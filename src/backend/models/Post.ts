import mongoose, { Schema, HydratedDocument, Model } from "mongoose";

export interface IPost {
  title: string;
  slug: string;
  content: string;
  author?: string;
  coverImage?: string;
  tags?: string[];
  summary?: string;
  published: boolean;
  // Estos dos los añade Mongoose al usar timestamps:
  createdAt?: Date;
  updatedAt?: Date;
}

export type PostDocument = HydratedDocument<IPost>;

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true, trim: true },
    slug:  { type: String, required: true, unique: true, index: true, trim: true, lowercase: true },
    content: { type: String, required: true, trim: true },
    author:  { type: String, trim: true },
    coverImage: { type: String, trim: true },
    tags: [{ type: String, trim: true }],
    summary: { type: String, trim: true },
    published: { type: Boolean, default: false },
  },
  {
    timestamps: true,          // ✅ crea/actualiza createdAt y updatedAt
    versionKey: false,         // opcional, evita __v
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    // collection: "posts",     // opcional si quieres fijar el nombre
  }
);

// Opcional: si quieres asegurar unicidad a nivel índice:
PostSchema.index({ slug: 1 }, { unique: true });

// Si quieres autogenerar slug desde title cuando no venga:
PostSchema.pre("validate", function (next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");
  }
  next();
});

export const Post: Model<IPost> =
  mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);

export default Post;
