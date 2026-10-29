import type { Metadata, Viewport } from 'next';
import './globals.css';
import { faqs, products } from '@/lib/site-content';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#00828a' },
    { media: '(prefers-color-scheme: dark)', color: '#070d14' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dynamicair.com.np'),
  title: {
    default: 'Dynamic Air Solutions | Air Conditioners (AC), Climix Air Curtains & HVAC Nepal',
    template: '%s | Dynamic Air Solutions Nepal',
  },
  description:
    'Dynamic Air Solutions Nepal - Authorized Climix Air Curtains, Inverter Split AC, Commercial VRF Systems, Modular Cold Rooms & HVAC Engineering in Kathmandu. Tel: 9851123725 / 9715023725.',
  keywords: [
    'Air Conditioner Nepal',
    'AC Price in Nepal',
    'Inverter Split AC Nepal',
    'Air Curtain Nepal',
    'Climix Air Curtain',
    'Commercial Air Curtain Kathmandu',
    'HVAC Nepal',
    'Commercial VRF System Nepal',
    'Ceiling Cassette AC Nepal',
    'Cold Room Nepal',
    'Cold Storage Solutions Nepal',
    'Smart HEPA Air Purifier Nepal',
    'AC Repair Kathmandu',
    'AC Servicing AMC Nepal',
    'Dynamic Air Solutions Kathmandu',
  ],
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://www.dynamicair.com.np',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/logo-icon-emblem.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo-icon-emblem.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Dynamic Air',
  },
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NP',
    siteName: 'Dynamic Air Solutions Pvt. Ltd.',
    title: 'Dynamic Air Solutions | Air Conditioners (AC), Climix Air Curtains & HVAC Nepal',
    description:
      'Authorized Climix Air Curtains, Inverter Split ACs, Commercial VRF Systems, Modular Cold Rooms & HVAC Engineering Services in Nepal. Tel: 9851123725 / 9715023725.',
    url: 'https://www.dynamicair.com.np',
    images: [
      {
        url: '/images/dynamic-air-logo.png',
        width: 1200,
        height: 630,
        alt: 'Dynamic Air Solutions Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dynamic Air Solutions | Air Conditioners (AC), Climix Air Curtains & HVAC Nepal',
    description:
      'Authorized Climix Air Curtains, Inverter Split ACs, Commercial VRF Systems, Modular Cold Rooms & HVAC Engineering in Nepal. Tel: 9851123725 / 9715023725.',
    images: ['/images/dynamic-air-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'googlee2fa6752e72140d2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HVACBusiness',
        '@id': 'https://www.dynamicair.com.np/#business',
        name: 'Dynamic Air Solutions Pvt. Ltd.',
        alternateName: [
          'Dynamic Air Solutions',
          'Dynamic Air Nepal',
          'Climix Nepal',
          'Dynamic Air Solutions Kathmandu',
        ],
        url: 'https://www.dynamicair.com.np',
        logo: 'https://www.dynamicair.com.np/images/dynamic-air-logo.png',
        image: 'https://www.dynamicair.com.np/images/climix-air-curtain-hero.png',
        description:
          'Authorized Climix Distributor and premier HVAC engineering contractor in Nepal. Supplying Climix Q Series Cross Flow Air Curtains, Inverter Split ACs, Commercial VRF Systems, Modular Cold Rooms, and Smart HEPA Air Purifiers with professional installation and AMC support across Kathmandu and Nepal.',
        telephone: ['+977-9851123725', '+977-9715023725'],
        email: 'sdynamicair@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kathmandu Engineering Hub',
          addressLocality: 'Kathmandu',
          addressRegion: 'Bagmati Province',
          postalCode: '44600',
          addressCountry: 'NP',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 27.6871385,
          longitude: 85.3039602,
        },
        hasMap: 'https://maps.google.com/?cid=2143714271384015274',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:30',
          },
        ],
        priceRange: '$$',
        currenciesAccepted: 'NPR',
        paymentAccepted: 'Cash, Bank Transfer, Fonepay, Cheque',
        areaServed: [
          { '@type': 'City', name: 'Kathmandu' },
          { '@type': 'City', name: 'Lalitpur' },
          { '@type': 'City', name: 'Bhaktapur' },
          { '@type': 'City', name: 'Pokhara' },
          { '@type': 'City', name: 'Birgunj' },
          { '@type': 'Country', name: 'Nepal' },
        ],
        sameAs: [
          'https://www.facebook.com/share/1C7B7pXJVV/',
          'https://www.instagram.com/dynamicairsolution',
          'https://www.tiktok.com/@dynamic.air.solutions',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Air Conditioning, Air Curtains & HVAC Solutions Nepal',
          itemListElement: products.map((prod) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: prod.name,
              url: `https://www.dynamicair.com.np/solutions/${prod.id}`,
              description: prod.description,
              image: `https://www.dynamicair.com.np${prod.image}`,
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.dynamicair.com.np/#website',
        url: 'https://www.dynamicair.com.np',
        name: 'Dynamic Air Solutions Pvt. Ltd.',
        description:
          'Air Conditioners (AC), Climix Air Curtains, VRF Systems & Cold Rooms in Nepal',
        publisher: {
          '@id': 'https://www.dynamicair.com.np/#business',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.dynamicair.com.np/solutions?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.dynamicair.com.np/#faq',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="googlee2fa6752e72140d2" />
        <meta name="google-site-verification" content="e2fa6752e72140d2" />
        <link rel="apple-touch-icon" href="/images/logo-round.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('dynamic_air_theme');if(t){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
