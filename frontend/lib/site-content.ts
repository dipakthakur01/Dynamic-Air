import type { BusinessConfig, Category, Product, Service, FaqItem } from '@/types';

export const business: BusinessConfig = {
  name: 'Dynamic Air Solutions Pvt. Ltd.',
  tagline: 'Complete Air Conditioning Solution',
  domain: 'https://dynamicair.com.np',
  email: '',
  phone: '9851123725',
  phone2: '9715023725',
  whatsapp: '9779715023725', // International format for WhatsApp API: 977 9715023725
  address: 'Kathmandu, Nepal',
  mapsUrl: '',
  openingHours: 'Sun – Fri: 9:00 AM – 6:30 PM',
  logo: '/images/dynamic-air-logo.png',
  footerLogo: '/images/dynamic-air-logo.png',
  socials: {
    facebook: 'https://www.facebook.com/share/1C7B7pXJVV/',
    instagram: 'https://www.instagram.com/dynamicairsolution?mdxt=NzJpeGJhNjlibGd1',
    tiktok: 'https://www.tiktok.com/@dynamic.air.solutions?_r=1&_t=ZS-9AT51zhBb8u',
  },
};

export type { Category, Product, Service, FaqItem };

export const products: Product[] = [
  // 1. First: Climix Air Curtains
  {
    id: 'climix-q-series',
    name: 'Climix Q Series Air Curtain',
    category: 'Climix Air Curtains',
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
    category: 'Climix Air Curtains',
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
    id: 'industrial-centrifugal-air-curtain',
    name: 'Industrial Heavy-Duty Air Curtain',
    category: 'Climix Air Curtains',
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

  // 2. Second: Residential Air Conditioning Solutions
  {
    id: 'residential-split-ac',
    name: 'Wall-Mounted Split AC (Inverter & Normal)',
    category: 'Residential Air Conditioning',
    label: 'RESIDENTIAL HOME COOLING',
    image: '/images/residential-split-ac.jpg',
    description:
      'Engineered specifically for residential living rooms, bedrooms, and apartments across Kathmandu and Nepal. Available in both high-efficiency Inverter and durable Non-Inverter (Normal) configurations to match your household comfort and budget.',
    features: [
      'Available in both DC Inverter (high energy savings) and Non-Inverter (Normal) models',
      'Maximum application for residential purposes: bedrooms, apartments, and villas',
      'Capacities available in 1.0 Ton, 1.5 Ton, and 2.0 Ton models',
      'Rapid turbo cooling, whisper-quiet night sleep mode, and anti-dust air filtration',
      '100% grooved inner copper piping for reliable heat exchange and longevity',
      'Stable performance with wide voltage operating range',
    ],
    idealFor:
      'Residential bedrooms, living halls, home offices, and apartment complexes',
    specSummary: '1.0T – 2.0T · Inverter & Normal · R32 / R410A · Whisper Quiet',
  },

  // 3. Third: Commercial Air Conditioning Solutions
  {
    id: 'commercial-vrf-system',
    name: 'Commercial VRF / VRV Air Conditioning (100% Inverter)',
    category: 'Commercial Air Conditioning',
    label: '100% INVERTER COMMERCIAL HVAC',
    image: '/images/commercial-vrf-system.jpg',
    description:
      'High-capacity commercial VRF (Variable Refrigerant Flow) systems powered by 100% Inverter technology. Connects heavy-duty outdoor rooftop condenser banks to multiple indoor ceiling cassette and duct units with independent zone climate control.',
    features: [
      '100% Inverter compressor engineering: modulates power precisely to actual cooling demand',
      'Commercial outdoor rooftop multi-unit banks serving up to 64+ independent indoor spaces',
      'Extreme partial-load energy efficiency: cuts commercial electricity overhead up to 45%',
      'Extended refrigerant piping length and height allowances for multi-story buildings',
      'Intelligent central touch controllers and Building Management System (BMS) compatibility',
      'Complete HVAC engineering: load calculation, copper piping layout, and scheduled servicing',
    ],
    idealFor:
      'Luxury residences, commercial complexes, corporate offices, hotels, hospitals, bank branches & institutions',
    specSummary: '100% Inverter · 8 HP to 96+ HP · Multi-Zone VRF · BMS Integration',
  },
  {
    id: 'ceiling-cassette-ac',
    name: '4-Way Ceiling Cassette AC (Inverter & Non-Inverter)',
    category: 'Commercial Air Conditioning',
    label: '360° OFFICE & SHOWROOM AIRFLOW',
    image: '/images/cassette-ac.jpg',
    description:
      'Flush-mount ceiling cassette system delivering uniform 360-degree circular airflow with zero dead zones. Primarily utilized for modern office spaces, retail showrooms, and restaurants; available in both Inverter and Non-Inverter types.',
    features: [
      'Available in both Inverter and Non-Inverter (Normal) configurations',
      'Mainly used for modern office spaces, banks, retail showrooms, and conference halls',
      '360° circular airflow coverage eliminates localized hot or cold pockets',
      'Built-in high-lift automatic condensate drain pump (up to 750mm lift)',
      'Capacities available: 2.0 Ton, 3.0 Ton, and 4.0 Ton (2.0TR – 4.0TR)',
      'Sleek aesthetic ceiling panel with washable high-density anti-dust filters',
    ],
    idealFor:
      'Office spaces, conference halls, retail showrooms, restaurants, and banks',
    brochureUrl: '/docs/climix-air-curtain-catalog.pdf',
    specSummary: '2.0TR – 4.0TR · Inverter & Normal · 360° Airflow · Built-In Drain Pump',
  },

  // 4. Fourth: Cold Room Solutions
  {
    id: 'modular-cold-room',
    name: 'Modular Cold Room Storage Solutions',
    category: 'Cold Room Solutions',
    label: 'CHILLER & FREEZER TEMPERATURE',
    image: '/images/cold-room.jpeg',
    description:
      'Prefabricated modular cold rooms engineered for commercial preservation and storage. Built with high-density polyurethane (PUF) insulated sandwich panels and available in both Chiller and Freezer temperature configurations.',
    features: [
      'Dual temperature configurations: Chiller (+2°C to +8°C) and Freezer (-18°C to -25°C)',
      'Primary use: commercial storage of perishables, dairy, pharmaceuticals, meat & produce',
      'High-density PUF insulated panels with cam-lock tongue-and-groove joints',
      'Heavy-duty walk-in insulated door with safety inside release handle and view window',
      'Digital microcomputer temperature controller with automatic defrost cycle',
      'Custom sizing tailored precisely to room dimensions, shelving, and storage volume',
    ],
    idealFor:
      'Cold storage facilities, supermarkets, hotels, restaurants, dairy, pharmaceuticals & food processing',
    specSummary: 'Chiller (+2° to +8°C) · Freezer (-18° to -25°C) · PUF Panels · Digital Controller',
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
    image: '/images/service-air-curtain.jpeg',
    imageAlt: 'Climix Q Series cross-flow air curtain installed over commercial glass doorway',
    badgeLabel: 'AUTHORIZED CLIMIX PARTNER',
    tagline: 'Precision doorway airflow & hygiene barrier.',
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
    image: '/images/service-ac-assessment.jpeg',
    imageAlt: 'Modern inverter AC outdoor condenser units professionally installed on building exterior',
    badgeLabel: 'HEAT-LOAD CALCULATION & SIZING',
    tagline: 'Maximized cooling & reduced energy consumption.',
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
    image: '/images/service-hvac-piping.jpeg',
    imageAlt: 'Professional HVAC copper piping installation, vacuum pump, and precision manifold equipment',
    badgeLabel: 'CERTIFIED HVAC ENGINEERING',
    tagline: 'Pure copper piping & deep vacuum testing.',
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
    image: '/images/service-repair-amc.jpeg',
    imageAlt: 'Certified technician performing AC refrigerant gas charging and outdoor unit diagnostics',
    badgeLabel: 'DIAGNOSTICS & LIFELONG AMC CARE',
    tagline: 'Precision gas charging & peak cooling reliability.',
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
      'Climix Q Series models come in standard door widths: 90 cm (HFM-1209Q), 120 cm (HFM-1212Q), 150 cm (HFM-1215Q), and 180 cm (HFM-1218Q). For wider commercial openings or loading docks, units can be joined side by side. Call or WhatsApp us at 9851123725 / 9715023725 for door sizing advice.',
  },
  {
    question: 'How can I contact Dynamic Air Solutions Pvt. Ltd. for enquiries?',
    answer:
      'You can call or WhatsApp us directly at 9851123725 / 9715023725, or use the interactive enquiry form on this website to prepare and send your specifications directly to our engineering team.',
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
