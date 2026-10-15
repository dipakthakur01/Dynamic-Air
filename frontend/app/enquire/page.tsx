import type { Metadata } from 'next';
import EnquireClient from './EnquireClient';

export const metadata: Metadata = {
  title: 'Make an Enquiry | Dynamic Air Solutions Pvt. Ltd. Nepal',
  description:
    'Submit an official project enquiry for Climix Q Series Cross Flow Air Curtains, Inverter Split ACs, Commercial VRF Systems, Modular Cold Rooms, and HVAC Engineering in Nepal. Instant WhatsApp & Phone: 9851123725 / 9715023725.',
  alternates: {
    canonical: '/enquire',
  },
  openGraph: {
    title: 'Make an Enquiry | Dynamic Air Solutions Pvt. Ltd.',
    description:
      'Official enquiry desk for Climix Air Curtains, Air Conditioning, VRF and Cold Rooms in Nepal. Connect directly via WhatsApp or phone.',
    url: 'https://dynamicair.com.np/enquire',
    images: [{ url: '/images/climix-air-curtain-hero.png', alt: 'Dynamic Air Enquiry Desk' }],
  },
};

export default function EnquirePage() {
  return <EnquireClient />;
}
