import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Dynamic Air Solutions - Climix & HVAC Specialist Nepal',
  description:
    'Learn about Dynamic Air Solutions Pvt. Ltd. - Authorized Climix Q Series Cross Flow Air Curtains distributor, Inverter Split ACs, Commercial VRF Systems, and Modular Cold Rooms in Kathmandu, Nepal.',
  keywords: [
    'About Dynamic Air Solutions Nepal',
    'Climix air curtain distributor Nepal',
    'HVAC company Kathmandu',
    'Commercial AC contractor Nepal',
    'Cold room contractor Nepal',
  ],
  alternates: {
    canonical: 'https://www.dynamicair.com.np/about',
  },
  openGraph: {
    title: 'About Dynamic Air Solutions | Authorized Climix Distributor Nepal',
    description:
      'Learn about our engineering philosophy, working process, and verified HVAC capabilities across Kathmandu and Nepal.',
    url: 'https://www.dynamicair.com.np/about',
    siteName: 'Dynamic Air Solutions Pvt. Ltd.',
    images: [
      {
        url: '/images/climix-air-curtain-hero.png',
        width: 1200,
        height: 630,
        alt: 'About Dynamic Air Solutions Nepal',
      },
    ],
    locale: 'en_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Dynamic Air Solutions | Authorized Climix Distributor',
    description:
      'Authorized distributor of Climix Air Curtains and precision HVAC solutions in Nepal.',
    images: ['/images/climix-air-curtain-hero.png'],
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://www.dynamicair.com.np/about#webpage',
      url: 'https://www.dynamicair.com.np/about',
      name: 'About Dynamic Air Solutions Pvt. Ltd.',
      description:
        'Authorized Climix air curtain distributor and HVAC engineering specialist in Nepal.',
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
            name: 'About',
            item: 'https://www.dynamicair.com.np/about',
          },
        ],
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <AboutClient />
    </>
  );
}
