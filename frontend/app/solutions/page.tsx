import type { Metadata } from 'next';
import { products } from '@/lib/site-content';
import SolutionShowcase from '@/components/solutions/SolutionShowcase';

export const metadata: Metadata = {
  title: 'Dedicated Engineering Capabilities & Solutions | Dynamic Air Solutions Pvt. Ltd.',
  description:
    'Explore Climix Q Series Cross Flow Air Curtains, Smart HEPA Air Purifiers, Inverter Split AC, VRF Systems (4 HP Mini to Commercial), and Modular Walk-In Cold Rooms in Nepal. Tel: 9851123725 / 9715023725.',
  alternates: {
    canonical: '/solutions',
  },
};

export default function SolutionsIndexPage() {
  return <SolutionShowcase initialProduct={products[0]} />;
}
