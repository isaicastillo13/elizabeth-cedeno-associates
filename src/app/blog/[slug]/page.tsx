import { Metadata } from "next";
import { notFound } from "next/navigation";
import { connectDB } from "@/backend/lib/mongodb";
import Post from "@/backend/models/Post";

export const revalidate = 60; // Revalidar cada 60 segundos

type Props = {
  params: {
    slug: string;
  };
};

async function getArticleBySlug(slug: string) {
  await connectDB();

  const articule = await Post.findOne({ slug }).lean();
  return articule;
}
// Simulación de base de datos temporal
const fakePosts = [
  {
    slug: "como-cuidar-tu-sonrisa",
    title: "Cómo cuidar tu sonrisa",
    content: "Este es el contenido del artículo sobre cómo cuidar tu sonrisa.",
  },
  {
    slug: "Abogados-especialistas-en-derecho-administrativo",
    title: "Promociones de Julio 2025",
    content: "Aprovecha nuestras ofertas exclusivas para este mes.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getArticleBySlug(params.slug);
  if (!post) {
    return { title: "Artículo no encontrado" };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 150), // Primeros 150 caracteres del
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 150),
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const post = await getArticleBySlug(params.slug);

  if (!post) return notFound();

  return (
    <div className="max-w-3xl p-10 mx-auto">
      <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>

      {/* Si usas contenido HTML (MD a HTML), usa dangerouslySetInnerHTML; si es texto plano, solo imprime */}
      <div className="prose prose-lg max-w-none">
        {typeof post.content === "string" ? <p>{post.content}</p> : null}
      </div>
    </div>
  );
}
