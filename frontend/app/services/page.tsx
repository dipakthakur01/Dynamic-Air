import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'HVAC Engineering & Mechanical Services in Nepal | Dynamic Air Solutions',
  description:
    'Comprehensive HVAC services across Nepal: Climix Air Curtain installation, Heat Load Calculations, VRF Copper Piping, Gas Charging, and Annual Maintenance Contracts (AMC). Certified HVAC technicians in Kathmandu.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'HVAC Engineering & Installation Services in Nepal | Dynamic Air Solutions',
    description:
      'Professional air curtain installation, VRF system layout, chiller servicing, and preventive maintenance across Kathmandu & Nepal.',
    url: 'https://dynamicair.com.np/services',
    siteName: 'Dynamic Air Solutions Pvt. Ltd.',
    images: [{ url: '/images/climix-air-curtain-hero.png', width: 1200, height: 630, alt: 'Dynamic Air Engineering Services' }],
    locale: 'en_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HVAC Engineering & Installation Services in Nepal | Dynamic Air',
    description:
      'Air Curtain installation, VRF layout, heat load assessment, and HVAC AMC services across Nepal.',
    images: ['/images/climix-air-curtain-hero.png'],
  },
};

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://dynamicair.com.np/services#service',
      name: 'HVAC Engineering, Installation & Maintenance Services',
      provider: {
        '@id': 'https://dynamicair.com.np/#business',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Nepal',
      },
      description:
        'Professional installation of Climix Air Curtains, Inverter Split ACs, VRF Systems, Modular Cold Rooms, and comprehensive HVAC AMC contracts across Nepal.',
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
            name: 'Services',
            item: 'https://dynamicair.com.np/services',
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
