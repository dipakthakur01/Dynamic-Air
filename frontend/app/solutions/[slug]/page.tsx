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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: `https://dynamicair.com.np${product.image}`,
        brand: {
          '@type': 'Brand',
          name: product.category.includes('Climix') ? 'Climix' : 'Dynamic Air',
        },
        category: product.category,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'NPR',
          seller: {
            '@type': 'Organization',
            name: 'Dynamic Air Solutions Pvt. Ltd.',
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://dynamicair.com.np',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Solutions',
            item: 'https://dynamicair.com.np/solutions',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: product.name,
            item: `https://dynamicair.com.np/solutions/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SolutionShowcase initialProduct={product} />
    </>
  );
}
