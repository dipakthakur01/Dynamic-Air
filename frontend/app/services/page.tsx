import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'AC Repair, HVAC Installation & Maintenance AMC in Kathmandu Nepal | Dynamic Air',
  description:
    'Professional HVAC engineering across Nepal: AC repair & gas refilling, Climix Air Curtain mounting, Inverter Split & VRF piping, and AMC maintenance contracts in Kathmandu. Call 9851123725.',
  keywords: [
    'AC repair Kathmandu',
    'AC servicing in Nepal',
    'AC gas refilling Kathmandu',
    'HVAC installation Nepal',
    'Air curtain installation Nepal',
    'HVAC AMC Nepal',
    'VRF copper piping Kathmandu',
    'Cold room maintenance Nepal',
  ],
  alternates: {
    canonical: 'https://www.dynamicair.com.np/services',
  },
  openGraph: {
    title: 'AC Repair, HVAC Installation & Maintenance AMC in Kathmandu Nepal | Dynamic Air',
    description:
      'Professional air curtain installation, VRF system layout, AC repair, gas refilling, and preventive AMC maintenance across Kathmandu & Nepal.',
    url: 'https://www.dynamicair.com.np/services',
    siteName: 'Dynamic Air Solutions Pvt. Ltd.',
    images: [
      {
        url: '/images/climix-air-curtain-hero.png',
        width: 1200,
        height: 630,
        alt: 'Dynamic Air Engineering & AC Services Nepal',
      },
    ],
    locale: 'en_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AC Repair, HVAC Installation & AMC Services in Nepal | Dynamic Air',
    description:
      'Air curtain installation, AC repair, gas refilling, VRF layout, and HVAC AMC services across Nepal. Tel: 9851123725.',
    images: ['/images/climix-air-curtain-hero.png'],
  },
};

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.dynamicair.com.np/services#service',
      name: 'HVAC Engineering, AC Repair, Installation & AMC Services in Nepal',
      provider: {
        '@id': 'https://www.dynamicair.com.np/#business',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Nepal',
      },
      description:
        'Professional installation of Climix Air Curtains, Inverter Split ACs, VRF Systems, Modular Cold Rooms, along with AC repair, refrigerant gas charging, and comprehensive HVAC AMC contracts across Kathmandu and Nepal.',
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
            name: 'Services',
            item: 'https://www.dynamicair.com.np/services',
          },
        ],
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'HVAC Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Air Curtain Sales & Installation',
              description: 'Authorized supply, doorway sizing, and precision mounting of Climix cross-flow air curtains.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AC Sales & Capacity Assessment',
              description: 'Accurate heat-load calculation and tonnage recommendation for split, cassette, and VRF systems.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Professional HVAC Installation & Piping',
              description: 'Certified technicians, nitrogen pressure testing, and leak-proof copper piping layout.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AC Repair, Gas Charging & Maintenance AMC',
              description: 'High-pressure coil jet washing, R32 / R410A refrigerant gas refilling, and annual maintenance contracts.',
            },
          },
        ],
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesClient />
    </>
  );
}
