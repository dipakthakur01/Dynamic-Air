import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dynamic Air Solutions Pvt. Ltd.',
    short_name: 'Dynamic Air',
    description:
      'Authorized Climix Q Series Cross Flow Air Curtains & Precision Climate Control Solutions Nepal',
    start_url: '/',
    id: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#070d14',
    theme_color: '#00828a',
    categories: ['business', 'utilities', 'shopping'],
    icons: [
      {
        src: '/images/logo-round.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/images/logo-round.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/images/logo-round.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Air Curtains & Solutions',
        url: '/#solutions',
        description: 'Climix Q Series Air Curtains & HVAC Solutions',
      },
      {
        name: 'Make an Enquiry',
        url: '/#contact',
        description: 'Quick HVAC Consultation & Quotation',
      },
      {
        name: 'Call Us',
        url: 'tel:9851123725',
        description: 'Call Dynamic Air Solutions directly',
      },
    ],
  };
}
