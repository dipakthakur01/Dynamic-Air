import type { BusinessConfig, Category, Product, Service, FaqItem } from '@/types';

export const business: BusinessConfig = {
  name: 'Dynamic Air Solutions Pvt. Ltd.',
  tagline: 'Complete Air Conditioning Solution',
  domain: 'https://dynamicair.com.np',
  email: 'sdynamicair@gmail.com',
  phone: '9851123725',
  whatsapp: '9779851123725', // International format for WhatsApp API: 977 9851123725
  address: 'Kathmandu, Nepal',
  mapsUrl: '',
  openingHours: 'Sun – Fri: 9:00 AM – 6:30 PM',
  logo: '/images/logo-round.png',
  footerLogo: '/images/footer-logo.png',
  socials: {
    facebook: 'https://www.facebook.com/share/1C7B7pXJVV/',
    instagram: 'https://www.instagram.com/dynamicairsolution?mdxt=NzJpeGJhNjlibGd1',
    tiktok: 'https://www.tiktok.com/@dynamic.air.solutions?_r=1&_t=ZS-9AT51zhBb8u',
  },
};

export type { Category, Product, Service, FaqItem };

export const products: Product[] = [
  {
    id: 'climix-q-series',
    name: 'Climix Q Series Air Curtain',
    category: 'Air curtains',
    label: 'CROSS FLOW WIND CURTAIN',
    image: '/images/climix-air-curtain-hero.png',
    description:
      'Heavy-duty cross flow air curtain with pure copper motor (8,000 hrs rating), two-speed switching, intelligent remote control, and rust-resistant metal casing. Creates an effective thermal and dust barrier up to 3m height.',
    features: [
      'Pure copper motor: 11 m/s wind speed, up to 3,800 m³/h airflow',
      'High & low dual speed switching with intelligent remote control',
      'Full metal jacket body with freely adjustable wind guide blades',
      'Available models: HFM-1209Q (90cm), HFM-1212Q (120cm), HFM-1215Q (150cm), HFM-1218Q (180cm)',
      'Built-in baseplate and installation mounting hardware included',
      'Up to 3-meter effective door barrier height',
    ],
    idealFor:
      'Hospitals, Cold storage, Restaurants, Hotels, Supermarkets & Factories',
    brochureUrl: '/docs/climix-air-curtain-catalog.pdf',
    specSummary: '100W – 200W · 220–240V 50Hz · 8–11 m/s · 1600–3800 m³/h',
  },
  {
    id: 'air-curtain-commercial',
    name: 'Commercial Entrance Air Barrier Systems',
    category: 'Air curtains',
    label: 'ENERGY SAVING & DUSTPROOF',
    image: '/images/air-curtain-applications.png',
    description:
      'Keep conditioned cool air inside and prevent outdoor heat, dust, flying insects, and exhaust smoke from entering high-traffic doorways. Cuts HVAC electricity bills drastically.',
    features: [
      'Strong wind power with dustproof and thermal insulation barrier',
      'Preserves indoor clean air in food, medical, and hospitality zones',
      'Continuous operation up to 8,000 hours with heavy-duty copper motor',
      'Custom sizing from 90 cm to 200 cm doorway spans',
    ],
    idealFor:
      'Retail stores, restaurant entrances, hospital corridors, cold storage doors & warehouse loading docks',
    brochureUrl: '/docs/climix-air-curtain-catalog.pdf',
  },
  {
    id: 'split-ac',
    name: 'Wall-Mounted Inverter Split AC',
    category: 'Air conditioning',
    label: 'RESIDENTIAL & OFFICE COOLING',
    image: '/images/cooling.webp',
    description:
      'Energy-efficient DC inverter split cooling and heating systems engineered for whisper-quiet operation, rapid cooling, and low electricity consumption across Kathmandu and Nepal climates.',
    features: [
      'High energy-efficiency DC inverter rotary compressor',
      'Rapid turbo cooling & gentle dehumidification modes',
      'Room-by-room temperature precision and multi-layer filtration',
      'Available in 1.0 Ton, 1.5 Ton, and 2.0 Ton capacities',
    ],
    idealFor: 'Bedrooms, living rooms, clinic cabins, and executive office spaces',
  },
  {
    id: 'ceiling-cassette-ac',
    name: '4-Way Ceiling Cassette Inverter AC',
    category: 'Commercial HVAC',
    label: '360° UNIFORM AIR DISTRIBUTION',
    image: '/images/cassette-ac.jpg',
    description:
      'Flush-mount ceiling cassette system with 360-degree circular airflow delivery, built-in high-lift condensate drain pump, independent vane control, and ultra-low noise operation for premium commercial spaces.',
    features: [
      '360° circular airflow coverage eliminates cooling dead-zones',
      'Whisper-quiet DC fan motor with intelligent temperature sensing',
      'Built-in high-lift drain pump (up to 750mm lift)',
      'Available in 2.0 Ton, 3.0 Ton, 4.0 Ton, and 5.0 Ton capacities',
      'Washable high-density anti-dust and antibacterial air filters',
    ],
    idealFor:
      'Restaurants, corporate conference halls, banks, retail showrooms, and luxury residences',
    brochureUrl: '/docs/climix-air-curtain-catalog.pdf',
    specSummary: '2.0T – 5.0T · 360° Airflow · R32 / R410A Eco · High-Lift Pump',
  },
  {
    id: 'industrial-centrifugal-air-curtain',
    name: 'Industrial Heavy-Duty Air Curtain',
    category: 'Air curtains',
    label: 'HIGH-VELOCITY DOORWAY BARRIER',
    image: '/images/industrial-air-curtain.jpg',
    description:
      'Powerful centrifugal airflow barrier engineered for doorways up to 4.5 meters height. Designed with heavy-duty corrosion-resistant casing, high-pressure centrifugal blowers, and industrial dust protection.',
    features: [
      'High-velocity centrifugal wind barrier up to 20 m/s air speed',
      'Corrosion-resistant metal casing for demanding environments',
      'Blocks up to 90% of outdoor heat, insects, exhaust smoke, and dust',
      'Preserves cold storage temperature and reduces HVAC power loss',
      'Available sizes: 1.0m, 1.2m, 1.5m, and 1.8m commercial spans',
    ],
    idealFor:
      'Industrial warehouses, cold storage facilities, hospital trauma entrances, and food processing plants',
    brochureUrl: '/docs/climix-air-curtain-catalog.pdf',
    specSummary: 'Up to 4.5m Doorway Height · 18–20 m/s Air Velocity · Heavy-Duty Motor',
  },
  {
    id: 'commercial-hvac',
    name: 'Commercial VRF & Cassette AC Solutions',
    category: 'Commercial HVAC',
    label: 'CENTRALIZED CLIMATE CONTROL',
    image: '/images/service.webp',
    imageClass: 'commercial-product',
    description:
      'End-to-end commercial climate solutions: ceiling cassette units, ductable air conditioning, ventilation, and multi-zone VRF systems engineered around your commercial layout.',
    features: [
      'Four-way ceiling cassette uniform air distribution',
      'Centralized multi-room VRF / VRV architecture',
      'Custom ducting layout, fresh air intake & exhaust integration',
      'Bespoke BTU heat load calculation by HVAC specialists',
    ],
    idealFor:
      'Commercial buildings, corporate offices, showrooms, banquet halls & hospitality',
  },
];

export const services: Service[] = [
  {
    number: '01',
    icon: 'wind',
    title: 'Air curtain sales & installation',
    short: 'Climix Q Series authorized supply & expert mounting.',
    description:
      'Authorized supply, doorway sizing, and precision mounting of Climix cross-flow air curtains for doors up to 3 meters height.',
    points: [
      'Doorway width & height inspection (90cm, 120cm, 150cm, 180cm)',
      'Reinforced baseplate vibration-free wall mounting',
      'Dual-speed air balance calibration and remote control handover',
    ],
  },
  {
    number: '02',
    icon: 'snowflake',
    title: 'AC sales & capacity assessment',
    short: 'Accurate heat-load sizing for maximum cooling efficiency.',
    description:
      'Choose split, cassette, or commercial air conditioners tailored to your room volume, sun exposure, and daily operating hours.',
    points: [
      'On-site heat load calculation and tonnage recommendation',
      'Genuine brand warranty and transparent quotation',
      'Prompt delivery and site readiness inspection across Kathmandu',
    ],
  },
  {
    number: '03',
    icon: 'wrench',
    title: 'Professional HVAC installation & piping',
    short: 'Certified technicians, leak-proof copper piping.',
    description:
      'Complete copper pipe flaring, nitrogen pressure test, deep vacuum evacuation, and safe electrical breaker wiring.',
    points: [
      'Pure copper tubing with heavy insulation protection',
      'Vacuum pump evacuation before refrigerant release',
      'Airflow balance check and anti-vibration outdoor mounting',
    ],
  },
  {
    number: '04',
    icon: 'settings',
    title: 'Repair, gas charging & maintenance AMC',
    short: 'Keep your cooling running at peak performance.',
    description:
      'High-pressure jet washing, R32 / R410A refrigerant top-up, compressor diagnostics, and scheduled annual maintenance contracts.',
    points: [
      'Coil jet washing & indoor chemical sanitization',
      'Digital manifold pressure check and gas leak rectification',
      'Annual maintenance contracts (AMC) for homes & businesses',
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'What is an air curtain and why do I need one for my business?',
    answer:
      'A Climix Q Series air curtain creates a powerful, continuous barrier of high-velocity air across your doorway (up to 3 meters high). It keeps conditioned cool air inside, stops outdoor heat, dust, vehicle fumes, and flying insects from entering, and saves up to 40% on AC electricity costs.',
  },
  {
    question: 'Which size Climix air curtain is suitable for my door?',
    answer:
      'Climix Q Series models come in standard door widths: 90 cm (HFM-1209Q), 120 cm (HFM-1212Q), 150 cm (HFM-1215Q), and 180 cm (HFM-1218Q). For wider commercial openings or loading docks, units can be joined side by side. Call or WhatsApp us at 9851123725 for door sizing advice.',
  },
  {
    question: 'How can I contact Dynamic Air Solutions Pvt. Ltd. for enquiries?',
    answer:
      'You can call or WhatsApp us directly at 9851123725, email us at sdynamicair@gmail.com, or use the interactive enquiry form on this website to prepare and send your specifications.',
  },
  {
    question: 'Do you provide on-site installation and maintenance in Kathmandu?',
    answer:
      'Yes. Dynamic Air Solutions Pvt. Ltd. provides complete delivery, professional installation, testing, and periodic maintenance services across Kathmandu and surrounding areas.',
  },
  {
    question: 'Can I download the Climix air curtain product catalog?',
    answer:
      'Yes! You can download the official Climix Q Series Cross Flow Air Curtain PDF catalog directly from our website using the download buttons in the solutions section, or request it on WhatsApp.',
  },
  {
    question: 'Do you offer Annual Maintenance Contracts (AMC) for businesses?',
    answer:
      'Yes, we provide flexible AMC packages for commercial offices, restaurants, hospitals, and stores covering routine air filter washing, coil jet cleaning, electrical checkups, and priority breakdown callouts.',
  },
];
