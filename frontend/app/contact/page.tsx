import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Dynamic Air Solutions Kathmandu | AC, Air Curtain & HVAC Nepal',
  description:
    'Contact Dynamic Air Solutions Pvt. Ltd. in Kathmandu, Nepal for AC sales, Climix air curtains, VRF installation, and cold storage quotations. Phone: 9851123725 / 9715023725.',
  keywords: [
    'Contact Dynamic Air Solutions',
    'AC shop Kathmandu',
    'Climix air curtain Nepal contact',
    'HVAC contractor Kathmandu phone',
    'Dynamic Air Solutions phone number',
  ],
  alternates: {
    canonical: 'https://www.dynamicair.com.np/contact',
  },
  openGraph: {
    title: 'Contact Dynamic Air Solutions Kathmandu | AC, Air Curtain & HVAC Nepal',
    description:
      'Direct contact desk, office location map, phone lines and WhatsApp consultation for Dynamic Air Solutions in Kathmandu, Nepal.',
    url: 'https://www.dynamicair.com.np/contact',
    siteName: 'Dynamic Air Solutions Pvt. Ltd.',
    images: [
      {
        url: '/images/climix-air-curtain-hero.png',
        width: 1200,
        height: 630,
        alt: 'Dynamic Air Solutions Contact Office Kathmandu',
      },
    ],
    locale: 'en_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Dynamic Air Solutions | Kathmandu Nepal',
    description:
      'Contact our Kathmandu engineering hub for Climix Air Curtains, HVAC systems & Cold Rooms across Nepal. Call 9851123725.',
    images: ['/images/climix-air-curtain-hero.png'],
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://www.dynamicair.com.np/contact#webpage',
      url: 'https://www.dynamicair.com.np/contact',
      name: 'Contact Us | Dynamic Air Solutions Pvt. Ltd.',
      description:
        'Official contact portal, Google Maps location, direct phone lines, and engineering support for Dynamic Air Solutions Pvt. Ltd. in Kathmandu, Nepal.',
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
            name: 'Contact',
            item: 'https://www.dynamicair.com.np/contact',
          },
        ],
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
