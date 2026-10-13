import type { Metadata, Viewport } from 'next';
import './globals.css';

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
  metadataBase: new URL('https://dynamicair.com.np'),
  title: 'Dynamic Air Solutions Pvt. Ltd. | Climix Air Curtains, HVAC & Cold Rooms Nepal',
  description:
    'Dynamic Air Solutions Pvt. Ltd. – Authorized Climix Q Series Cross Flow Air Curtains, Residential Inverter Split ACs, Commercial VRF Systems, Modular Cold Rooms, and Professional HVAC Installation & AMC in Kathmandu, Nepal. Contact: 9851123725 / sdynamicair@gmail.com.',
  manifest: '/manifest.json',
  alternates: { canonical: '/' },
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
    title: 'Dynamic Air Solutions Pvt. Ltd. | Complete Air Conditioning & Cold Storage Solution',
    description:
      'Authorized Climix Air Curtains, Residential Split ACs, Commercial VRF Systems, Modular Cold Rooms & HVAC Engineering Services in Nepal. Tel: 9851123725.',
    url: 'https://dynamicair.com.np',
    images: [{ url: '/images/dynamic-air-logo.png', width: 1200, height: 630, alt: 'Dynamic Air Solutions' }],
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'googlee2fa6752e72140d2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="googlee2fa6752e72140d2" />
        <meta name="google-site-verification" content="e2fa6752e72140d2" />
        <link rel="apple-touch-icon" href="/images/logo-round.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('dynamic_air_theme');
                  var theme = saved || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
