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

const productSeoMap: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
    schemaSku: string;
  }
> = {
  'climix-q-series': {
    title: 'Climix Q Series Air Curtain in Nepal | Doorway Air Barrier Price & Sizing',
    description:
      'Buy genuine Climix Q Series Cross Flow Air Curtains in Nepal. Heavy-duty copper motor, 2-speed remote, 90cm to 180cm door sizes. Fast delivery & installation in Kathmandu. Call 9851123725.',
    keywords: [
      'Climix air curtain Nepal',
      'Air curtain in Nepal',
      'Air curtain price in Nepal',
      'Climix Q Series cross flow air curtain',
      'Door air curtain Kathmandu',
      'Commercial air curtain Nepal',
      'HFM-1209Q HFM-1212Q HFM-1215Q HFM-1218Q',
    ],
    schemaSku: 'DA-CLIMIX-Q',
  },
  'air-curtain-commercial': {
    title: 'Commercial Air Curtains in Nepal | Shop & Restaurant Entrance Barrier',
    description:
      'Commercial entrance air curtains for restaurants, hospitals, supermarkets & shops in Nepal. Prevent dust, flies, and AC cooling loss up to 80%. Authorized Climix supplier. Contact 9851123725.',
    keywords: [
      'Commercial air curtain Nepal',
      'Shop entrance air curtain Kathmandu',
      'Restaurant air curtain Nepal',
      'Dustproof air curtain Nepal',
      'Doorway insect barrier Nepal',
      'Energy saving air door Nepal',
    ],
    schemaSku: 'DA-AIR-COMM',
  },
  'industrial-centrifugal-air-curtain': {
    title: 'Industrial Centrifugal Air Curtains in Nepal (Up to 4.5m Height)',
    description:
      'High-velocity industrial centrifugal air curtains in Nepal for cold storage facilities, warehouses & factories. Up to 20 m/s air barrier blocking dust, heat & smoke. Call 9851123725.',
    keywords: [
      'Industrial air curtain Nepal',
      'Heavy duty air curtain Kathmandu',
      'Centrifugal air curtain Nepal',
      'Warehouse doorway air barrier Nepal',
      'Cold storage air curtain',
      'High velocity air curtain',
    ],
    schemaSku: 'DA-AIR-IND',
  },
  'residential-split-ac': {
    title: 'Inverter Split AC in Nepal (1.0 Ton, 1.5 Ton, 2.0 Ton) | Dynamic Air',
    description:
      'High-efficiency DC Inverter & Normal Split Air Conditioners (AC) in Nepal. 1.0 Ton, 1.5 Ton, and 2.0 Ton with 100% inner grooved copper piping & rapid turbo cooling. Fast installation. Call 9851123725.',
    keywords: [
      'AC in Nepal',
      'Inverter AC Nepal',
      'Split AC Kathmandu',
      'AC price in Nepal',
      '1 ton AC Nepal',
      '1.5 ton inverter AC price Nepal',
      '2 ton split AC Nepal',
      'Home air conditioner Kathmandu',
      'Dynamic Air AC sales',
    ],
    schemaSku: 'DA-SPLIT-AC',
  },
  'commercial-vrf-system': {
    title: 'Commercial VRF / VRV Air Conditioning in Nepal (4 HP to 96+ HP)',
    description:
      'Centralized 100% Inverter VRF / VRV HVAC systems in Nepal. From 4 HP Mini VRF for luxury villas to large commercial multi-zone towers. Turnkey copper piping, commissioning & AMC. Call 9851123725.',
    keywords: [
      'VRF system Nepal',
      'VRV air conditioning Nepal',
      'Commercial HVAC Nepal',
      'Mini VRF for villas Kathmandu',
      'Commercial AC Nepal',
      'Centralized AC Nepal',
      'HVAC contractor Nepal',
    ],
    schemaSku: 'DA-VRF-SYS',
  },
  'ceiling-cassette-ac': {
    title: '4-Way Ceiling Cassette Inverter AC in Nepal (2.0TR - 4.0TR)',
    description:
      'Flush-mount 4-Way Ceiling Cassette AC in Nepal (2 Ton, 3 Ton, 4 Ton Inverter & Normal) with uniform 360° airflow and built-in drain pump for modern offices & retail showrooms. Call 9851123725.',
    keywords: [
      'Cassette AC Nepal',
      'Ceiling AC Kathmandu',
      '4 way cassette AC price Nepal',
      'Commercial office AC Nepal',
      'Showroom air conditioning Nepal',
      'Inverter cassette AC Nepal',
    ],
    schemaSku: 'DA-CASSETTE',
  },
  'modular-cold-room': {
    title: 'Modular Cold Room & Cold Storage in Nepal (Chiller & Freezer)',
    description:
      'Prefabricated modular cold room storage in Nepal. Chiller (+2°C to +8°C) and Freezer (-18°C to -25°C) PUF panels for dairy, meat, pharmaceuticals & agriculture. Expert setup. Call 9851123725.',
    keywords: [
      'Cold room in Nepal',
      'Cold storage Nepal',
      'Walk in chiller Kathmandu',
      'Commercial freezer room Nepal',
      'Cold room manufacturer Nepal',
      'PUF panel cold storage Nepal',
      'Modular cold room price Nepal',
    ],
    schemaSku: 'DA-COLD-ROOM',
  },
  'hepa-air-purifier': {
    title: 'Smart HEPA Air Purifier in Nepal (CADR 450 m³/h Clean Air)',
    description:
      'Medical-grade True HEPA + Activated Carbon air purifier in Nepal. CADR 450 m³/h, smart air quality indicator ring, removes PM2.5 smog, vehicle exhaust, dust & germs. Call 9851123725.',
    keywords: [
      'Air purifier in Nepal',
      'HEPA air purifier Kathmandu',
      'Air purifier price in Nepal',
      'Anti smog air purifier Nepal',
      'PM2.5 air purifier Nepal',
      'Clean air purifier Kathmandu',
    ],
    schemaSku: 'DA-HEPA-PUR',
  },
};

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

  const seo = productSeoMap[slug] || {
    title: `${product.name} in Nepal | Dynamic Air Solutions`,
    description: `${product.name} in Nepal – ${product.description.slice(0, 140)}... Call: 9851123725.`,
    keywords: [product.name, `${product.name} Nepal`, product.category, 'Dynamic Air Solutions'],
    schemaSku: `DA-${slug.toUpperCase()}`,
  };

  const canonicalUrl = `https://www.dynamicair.com.np/solutions/${slug}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      siteName: 'Dynamic Air Solutions Pvt. Ltd.',
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: `${product.name} in Nepal`,
        },
      ],
      type: 'website',
      locale: 'en_NP',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [product.image],
    },
  };
}

export default async function SolutionSlugPage({ params }: SolutionSlugPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  const seo = productSeoMap[slug];
  const productUrl = `https://www.dynamicair.com.np/solutions/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${productUrl}#product`,
        name: `${product.name} in Nepal`,
        description: product.description,
        image: `https://www.dynamicair.com.np${product.image}`,
        sku: seo?.schemaSku || `DA-${slug.toUpperCase()}`,
        mpn: slug,
        brand: {
          '@type': 'Brand',
          name: product.category.includes('Climix') ? 'Climix' : 'Dynamic Air',
        },
        category: product.category,
        offers: {
          '@type': 'Offer',
          url: productUrl,
          availability: 'https://schema.org/InStock',
          priceCurrency: 'NPR',
          price: 'Contact for Quote',
          itemCondition: 'https://schema.org/NewCondition',
          seller: {
            '@type': 'Organization',
            name: 'Dynamic Air Solutions Pvt. Ltd.',
            url: 'https://www.dynamicair.com.np',
          },
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '38',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
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
          {
            '@type': 'ListItem',
            position: 3,
            name: product.name,
            item: productUrl,
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
