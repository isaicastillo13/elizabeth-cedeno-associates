// app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { connectDB } from "@/backend/lib/mongodb";
import Post, { IPost } from "@/backend/models/Post";

export const revalidate = 60; // ISR cada 60s

type Props = { params: { slug: string } };

async function getArticleBySlug(slug: string): Promise<IPost | null> {
  await connectDB();
  const clean = decodeURIComponent(slug).toLowerCase();
  // Tipar el lean para tener autocompletado y evitar errores "Property 'title'..."
  const article = await Post.findOne({ slug: clean }).lean<IPost>().exec();
  return article;
}

// (Opcional, recomendado para SSG/ISR real)
export async function generateStaticParams() {
  await connectDB();
  const slugs = await Post
    .find({ published: true }, { slug: 1, _id: 0 })
    .lean<{
      map(arg0: (s: any) => { slug: any; }): unknown; slug: string 
}>()
    .exec();

  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getArticleBySlug(params.slug);
  if (!post) return { title: "Artículo no encontrado" };

  const desc = post.content?.slice(0, 150) ?? "";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tu-dominio.com";

  return {
    title: post.title,
    description: desc,
    openGraph: {
      title: post.title,
      description: desc,
      // Mejor usar objetos con URL absoluta
      images: post.coverImage ? [{ url: post.coverImage.startsWith("http") ? post.coverImage : `${baseUrl}${post.coverImage}` }] : [],
      url: `${baseUrl}/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const post = await getArticleBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="max-w-3xl p-10 mx-auto">
      <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>

      {/* Si post.content es HTML (renderizado de Markdown), usa dangerouslySetInnerHTML.
         Si es texto plano, así está OK. */}
      <div className="prose prose-lg max-w-none">
        {typeof post.content === "string" ? <p>{post.content}</p> : null}
      </div>
    </div>
  );
}
