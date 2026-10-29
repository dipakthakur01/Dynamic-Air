import type { Metadata } from 'next';
import { products } from '@/lib/site-content';
import SolutionShowcase from '@/components/solutions/SolutionShowcase';

export const metadata: Metadata = {
  title: 'Air Conditioners, Climix Air Curtains & Cold Rooms in Nepal | Dynamic Air',
  description:
    'Browse complete cooling & ventilation products in Nepal: Climix Air Curtains, Inverter Split AC, Cassette AC, VRF Systems, Modular Cold Rooms & Air Purifiers. Call 9851123725.',
  alternates: {
    canonical: 'https://www.dynamicair.com.np/solutions',
  },
  openGraph: {
    title: 'Air Conditioners, Climix Air Curtains & Cold Rooms in Nepal | Dynamic Air',
    description:
      'Authorized Climix Air Curtains, Inverter Split ACs, Commercial VRF Systems, Modular Cold Rooms & Smart Air Purifiers in Nepal.',
    url: 'https://www.dynamicair.com.np/solutions',
    siteName: 'Dynamic Air Solutions Pvt. Ltd.',
    images: [
      {
        url: '/images/climix-air-curtain-hero.png',
        width: 1200,
        height: 630,
        alt: 'Air Conditioners & Air Curtains Nepal',
      },
    ],
  },
};

const solutionsJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.dynamicair.com.np/solutions#webpage',
      url: 'https://www.dynamicair.com.np/solutions',
      name: 'Air Conditioners, Climix Air Curtains & Cold Storage Solutions Nepal',
      description:
        'Authorized Climix Air Curtains, Inverter Split AC, VRF Systems, Modular Cold Rooms and HEPA Air Purifiers available across Kathmandu and Nepal.',
      isPartOf: {
        '@id': 'https://www.dynamicair.com.np/#business',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.dynamicair.com.np',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Solutions',
            item: 'https://www.dynamicair.com.np/solutions',
          },
        ],
      },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: products.map((product, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: product.name,
          url: `https://www.dynamicair.com.np/solutions/${product.id}`,
        })),
      },
    },
  ],
};

export default function SolutionsIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsJsonLd) }}
      />
      <SolutionShowcase initialProduct={products[0]} />
    </>
  );
}
