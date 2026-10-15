import type { Metadata } from 'next';
import EnquireClient from '../enquire/EnquireClient';

export const metadata: Metadata = {
  title: 'Make an Enquiry | Dynamic Air Solutions Pvt. Ltd. Nepal',
  description:
    'Submit an official project enquiry for Climix Q Series Cross Flow Air Curtains, Inverter Split ACs, Commercial VRF Systems, Modular Cold Rooms, and HVAC Engineering in Nepal. Instant WhatsApp & Phone: 9851123725 / 9715023725.',
  alternates: {
    canonical: '/enquiry',
  },
};

export default function EnquiryPage() {
  return <EnquireClient />;
}
