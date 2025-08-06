import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

// Simulación de base de datos temporal
const fakePosts = [
  {
    slug: 'como-cuidar-tu-sonrisa',
    title: 'Cómo cuidar tu sonrisa',
    content: 'Este es el contenido del artículo sobre cómo cuidar tu sonrisa.',
  },
  {
    slug: 'Abogados-especialistas-en-derecho-administrativo',
    title: 'Promociones de Julio 2025',
    content: 'Aprovecha nuestras ofertas exclusivas para este mes.',
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = fakePosts.find((p) => p.slug === params.slug);
  return {
    title: post?.title ?? 'Artículo no encontrado',
  };
}

export default function ArticlePage({ params }: Props) {
  const post = fakePosts.find((p) => p.slug === params.slug);

  if (!post) {
    return <div className="p-10 text-red-600">Artículo no encontrado</div>;
  }

  return (
    <div className="max-w-3xl p-10 mx-auto">
      <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
      <p className="text-lg">{post.content}</p>
    </div>
  );
}
