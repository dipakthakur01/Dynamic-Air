import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/lib/site-content';
import SolutionShowcase from '@/components/solutions/SolutionShowcase';

interface SolutionSlugPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({
  params,
}: SolutionSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    return {
      title: 'Solution Not Found | Dynamic Air Solutions Pvt. Ltd.',
    };
  }

  return {
    title: `${product.name} | Dynamic Air Solutions Nepal`,
    description: `${product.name} – ${product.description.slice(0, 150)}... Contact: 9851123725 / 9715023725.`,
    alternates: {
      canonical: `/solutions/${slug}`,
    },
    openGraph: {
      title: `${product.name} | Dynamic Air Solutions`,
      description: product.description,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function SolutionSlugPage({ params }: SolutionSlugPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  return <SolutionShowcase initialProduct={product} />;
}
