import mongoose, { Schema, Document } from "mongoose";
import { title } from "process";

export interface IPost extends Document {
  title: string;
  slug: string;
  content: string;
  author: string;
  coverImage: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  summary: string;
  published: boolean;
}


const PostSchema : Schema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  author: { type: String },
  coverImage: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  tags: [{ type: String }],
  summary: { type: String },
  published: { type: Boolean, default: false }
});

export default mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);