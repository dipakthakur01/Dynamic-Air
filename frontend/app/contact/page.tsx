import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Dynamic Air Solutions Pvt. Ltd. Kathmandu Nepal',
  description:
    'Contact Dynamic Air Solutions Pvt. Ltd. in Kathmandu, Nepal. Authorized Climix Q Series Cross Flow Air Curtains, Split ACs, VRF Systems & Cold Rooms. Call 9851123725 / 9715023725 or chat via WhatsApp.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Dynamic Air Solutions Pvt. Ltd. Kathmandu',
    description:
      'Direct contact desk, office location map, phone lines and WhatsApp consultation for Dynamic Air Solutions in Kathmandu, Nepal.',
    url: 'https://dynamicair.com.np/contact',
    siteName: 'Dynamic Air Solutions Pvt. Ltd.',
    images: [{ url: '/images/climix-air-curtain-hero.png', width: 1200, height: 630, alt: 'Dynamic Air Solutions Contact Office' }],
    locale: 'en_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Dynamic Air Solutions Pvt. Ltd.',
    description:
      'Contact our Kathmandu engineering hub for Climix Air Curtains, HVAC systems & Cold Rooms across Nepal.',
    images: ['/images/climix-air-curtain-hero.png'],
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://dynamicair.com.np/contact#webpage',
      url: 'https://dynamicair.com.np/contact',
      name: 'Contact Us | Dynamic Air Solutions Pvt. Ltd.',
      description:
        'Official contact portal, Google Maps location, direct phone lines, and engineering support for Dynamic Air Solutions Pvt. Ltd. in Kathmandu, Nepal.',
      isPartOf: {
        '@id': 'https://dynamicair.com.np/#business',
      },
      breadcrumb: {
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
            name: 'Contact',
            item: 'https://dynamicair.com.np/contact',
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
