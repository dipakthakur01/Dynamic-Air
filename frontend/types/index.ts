export type Category =
  | 'All solutions'
  | 'Climix Air Curtains'
  | 'Residential Air Conditioning'
  | 'Commercial Air Conditioning'
  | 'Cold Room Solutions';

export interface Product {
  id: string;
  name: string;
  category: Category;
  label: string;
  image: string;
  description: string;
  features: string[];
  idealFor: string;
  imageClass?: string;
  brochureUrl?: string;
  specSummary?: string;
}

export interface Service {
  number: string;
  icon: string;
  title: string;
  short: string;
  description: string;
  points: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HeroSlide {
  overline: string;
  line1: string;
  line2: string;
  description: string;
  image: string;
  alt: string;
  caption: string;
  tag: string;
  mini: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  domain: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  mapsUrl: string;
  openingHours: string;
  logo: string;
  footerLogo: string;
  socials: SocialLinks;
}
