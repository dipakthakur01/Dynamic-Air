import type { Metadata } from 'next';
import EnquireClient from '../enquire/EnquireClient';

export const metadata: Metadata = {
  title: 'Make an Enquiry | Dynamic Air Solutions Pvt. Ltd. Nepal',
  description:
    'Submit an official project enquiry for Climix Q Series Cross Flow Air Curtains, Inverter Split ACs, Commercial VRF Systems, Modular Cold Rooms, and HVAC Engineering in Nepal. Instant WhatsApp & Phone: 9851123725 / 9715023725.',
  alternates: {
    canonical: '/enquiry',
  },
  openGraph: {
    title: 'Make an Enquiry | Dynamic Air Solutions Pvt. Ltd.',
    description:
      'Official enquiry desk for Climix Air Curtains, Air Conditioning, VRF and Cold Rooms in Nepal. Connect directly via WhatsApp or phone.',
    url: 'https://dynamicair.com.np/enquiry',
    siteName: 'Dynamic Air Solutions Pvt. Ltd.',
    images: [{ url: '/images/climix-air-curtain-hero.png', width: 1200, height: 630, alt: 'Dynamic Air Enquiry Desk' }],
    locale: 'en_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Make an Enquiry | Dynamic Air Solutions Pvt. Ltd.',
    description:
      'Submit an official project enquiry for Climix Air Curtains, AC, VRF & Cold Rooms in Nepal.',
    images: ['/images/climix-air-curtain-hero.png'],
  },
};

const enquiryJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://dynamicair.com.np/enquiry#webpage',
      url: 'https://dynamicair.com.np/enquiry',
      name: 'Make an Enquiry | Dynamic Air Solutions Pvt. Ltd.',
      description:
        'Submit an official project enquiry for Climix Q Series Cross Flow Air Curtains, Inverter Split ACs, Commercial VRF Systems, Modular Cold Rooms, and HVAC Engineering in Nepal.',
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
            name: 'Make an Enquiry',
            item: 'https://dynamicair.com.np/enquiry',
          },
        ],
      },
    },
  ],
};

export default function EnquiryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enquiryJsonLd) }}
      />
      <EnquireClient />
    </>
  );
}
