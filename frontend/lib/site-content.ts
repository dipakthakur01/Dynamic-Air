import type { BusinessConfig, Category, Product, Service, FaqItem } from '@/types';

export const business: BusinessConfig = {
  name: 'Dynamic Air Solutions Pvt. Ltd.',
  tagline: 'Complete Air Conditioning Solution',
  domain: 'https://www.dynamicair.com.np',
  email: 'sdynamicair@gmail.com',
  phone: '9851123725',
  phone2: '9715023725',
  whatsapp: '9779715023725', // International format for WhatsApp API: 977 9715023725
  address: 'Kathmandu, Nepal',
  mapsUrl: 'https://maps.google.com/?cid=2143714271384015274',
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
      'Authorized Climix Q Series Cross Flow Air Curtain supplier in Nepal. Heavy-duty pure copper motor (8,000 hrs rating), two-speed switching, intelligent wireless remote control, and rust-resistant metal casing. Creates an effective thermal, dust, and flying insect barrier up to 3m height across commercial and industrial doorways in Kathmandu and across Nepal.',
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
    brochureUrl: '/docs/q-series-air-curtain-brochure.pdf',
    specSummary: '100W – 200W · 220–240V 50Hz · 8–11 m/s · 1600–3800 m³/h',
  },
  {
    id: 'air-curtain-commercial',
    name: 'Commercial Entrance Air Barrier Systems',
    category: 'Climix Air Curtains',
    label: 'ENERGY SAVING & DUSTPROOF',
    image: '/images/air-curtain-applications.png',
    description:
      'Commercial entrance air barrier systems and air curtains in Nepal. Keep conditioned cool air inside and prevent outdoor heat, dust, flying insects, and vehicle exhaust smoke from entering high-traffic doorways. Drastically cuts air conditioning electricity bills for shops, supermarkets, and restaurants across Kathmandu.',
    features: [
      'Strong wind power with dustproof and thermal insulation barrier',
      'Preserves indoor clean air in food, medical, and hospitality zones',
      'Continuous operation up to 8,000 hours with heavy-duty copper motor',
      'Custom sizing from 90 cm to 200 cm doorway spans',
    ],
    idealFor:
      'Retail stores, restaurant entrances, hospital corridors, cold storage doors & warehouse loading docks',
    brochureUrl: '/docs/q-series-air-curtain-brochure.pdf',
  },
  {
    id: 'industrial-centrifugal-air-curtain',
    name: 'Industrial Heavy-Duty Air Curtain',
    category: 'Climix Air Curtains',
    label: 'HIGH-VELOCITY DOORWAY BARRIER',
    image: '/images/industrial-air-curtain.jpg',
    description:
      'Heavy-duty industrial centrifugal airflow barrier engineered for doorways up to 4.5 meters height in Nepal. Designed with corrosion-resistant metal casing, high-velocity blowers (up to 20 m/s), and industrial dust protection for warehouses, food factories, and cold storage facilities.',
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
      'High-efficiency Inverter and Normal Wall-Mounted Split Air Conditioners (AC) engineered for homes, living rooms, and apartments across Kathmandu and Nepal. Available in 1.0 Ton, 1.5 Ton, and 2.0 Ton capacities with 100% inner grooved copper piping, rapid turbo cooling, and low electricity power consumption.',
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
    brochureUrl: '/docs/wall-mounted-ac-brochure.pdf',
    specSummary: '1.0T – 2.0T · Inverter & Normal · R32 / R410A · Whisper Quiet',
  },

  // 3. Third: Commercial Air Conditioning Solutions
  {
    id: 'commercial-vrf-system',
    name: 'VRF / VRV Air Conditioning (4 HP Mini VRF to Commercial)',
    category: 'Commercial Air Conditioning',
    label: '4 HP MINI VRF TO LARGE COMMERCIAL HVAC',
    image: '/images/commercial-vrf-system.jpg',
    description:
      'Turnkey 100% Inverter VRF / VRV (Variable Refrigerant Flow) Air Conditioning systems in Nepal, spanning from 4 HP Residential Mini VRF for luxury villas and duplexes up to high-capacity modular commercial HVAC banks (up to 96+ HP) for multi-story buildings, corporate offices, hotels, and hospitals across Kathmandu.',
    features: [
      'Full capacity range: 4 HP Residential Mini VRF up to 96+ HP large commercial modular VRF systems',
      'Residential Mini VRF (from 4 HP): compact footprint and whisper-quiet outdoor operation tailored for villas and duplex residences',
      'Large Commercial VRF: multi-unit banks serving up to 64+ independent indoor spaces across multi-story buildings',
      '100% Inverter compressor engineering: modulates power precisely to real-time cooling and heating demand',
      'Extreme partial-load energy efficiency: cuts commercial electricity overhead by up to 45%',
      'Extended refrigerant piping length and generous elevation allowance for residential villas and tall commercial towers',
      'Intelligent central touch controllers, smart thermostat integration, and Building Management System (BMS) compatibility',
      'Complete turnkey HVAC engineering: on-site BTU load assessment, copper piping layout, nitrogen pressure testing & AMC servicing',
    ],
    idealFor:
      'Residential duplexes, luxury villas, commercial towers, corporate offices, hotels, hospitals, bank branches & institutions',
    brochureUrl: '/docs/commercial-ac-brochure.pdf',
    specSummary: '4 HP (Mini VRF) to 96+ HP Commercial · 100% Inverter · Multi-Zone VRF · BMS Integration',
  },
  {
    id: 'ceiling-cassette-ac',
    name: '4-Way Ceiling Cassette AC (Inverter & Non-Inverter)',
    category: 'Commercial Air Conditioning',
    label: '360° OFFICE & SHOWROOM AIRFLOW',
    image: '/images/cassette-ac.jpg',
    description:
      'Flush-mount 4-Way Ceiling Cassette Inverter Air Conditioner (AC) in Nepal delivering uniform 360-degree circular cooling and heating with zero dead zones. Engineered for commercial office spaces, bank branches, retail showrooms, and restaurants. Available in 2.0TR, 3.0TR, and 4.0TR with built-in drain pump.',
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
    brochureUrl: '/docs/commercial-ac-brochure.pdf',
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
      'Prefabricated modular walk-in cold rooms and commercial cold storage solutions in Nepal. Built with high-density polyurethane (PUF) insulated sandwich panels, available in both Chiller (+2°C to +8°C) and Freezer (-18°C to -25°C) configurations for food processing, supermarkets, dairy, and pharmaceuticals.',
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
    brochureUrl: '/docs/cold-storage-brochure.pdf',
    specSummary: 'Chiller (+2° to +8°C) · Freezer (-18° to -25°C) · PUF Panels · Digital Controller',
  },

  // 5. Fifth: Air Purifiers (Clean Air & HEPA Solutions)
  {
    id: 'hepa-air-purifier',
    name: 'Smart HEPA Air Purifier (Home & Commercial)',
    category: 'Air Purifiers',
    label: 'TRUE HEPA & ACTIVATED CARBON',
    image: '/images/hepa-air-purifier.jpg',
    imageClass: 'air-purifier-img',
    description:
      'Medical-grade True HEPA + Activated Carbon Air Purifier in Nepal with high 450 m³/h Clean Air Delivery Rate (CADR). Eliminates PM2.5 vehicle smog, Kathmandu dust, allergens, airborne bacteria, and toxic odors for residential homes and corporate executive cabins.',
    features: [
      'Available in multiple room sizes and capacities tailored for residential & commercial spaces',
      'High Clean Air Delivery Rate: CADR 450 m³/h for rapid whole-room air circulation',
      'Dual multi-stage filtration: Medical-grade True HEPA + High-absorption Activated Carbon filter',
      'Removes fine dust, PM2.5 particles, vehicle smog, pet dander, pollen, smoke & unpleasant odors',
      'Eliminates airborne bacteria, harmful germs, and virus-carrying aerosols',
      'Ultra energy-efficient 45W pure copper motor (220–240V, 50Hz) suitable for continuous 24/7 run',
      'Smart electronic touch control with 360° air quality ring indicator & ambient light sensor',
      'Whisper-quiet sleep operation (noise level from 32 dB(A) up to 64.5 dB(A) max turbo)',
      'Sleek modern cylindrical tower aesthetic (280 × 280 × 630 mm, Net Weight: 6.3 kg)',
    ],
    idealFor:
      'Residential living rooms, master bedrooms, executive cabins, private clinics, conference halls & reception lounges',
    brochureUrl: '/docs/air-purifier-brochure.pdf',
    specSummary: 'Available in Different Sizes · 450 m³/h CADR · True HEPA & Carbon · 45W · Quiet 64.5 dB(A)',
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
      'Complete copper pipe flaring, nitrogen pressure test, leak-tight line inspection, and safe electrical breaker wiring.',
    points: [
      'Pure copper tubing with heavy insulation protection',
      'Digital manifold pressure check and leak-tight commissioning',
      'Airflow balance check and anti-vibration outdoor mounting',
    ],
    image: '/images/service-hvac-piping.jpeg',
    imageAlt: 'Professional HVAC copper piping installation, precision manifold equipment, and outdoor unit mounting',
    badgeLabel: 'CERTIFIED HVAC ENGINEERING',
    tagline: 'Pure copper piping & precision pressure testing.',
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
    brochureUrl: '/docs/amc-service-brochure.pdf',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'What is an air curtain and why do I need one for my business?',
    answer:
      'A Climix Q Series air curtain creates a powerful, continuous barrier of high-velocity air across your doorway (up to 3 meters high). It keeps conditioned cool air inside, stops outdoor heat, dust, vehicle fumes, and flying insects from entering, and cuts doorway thermal loss by up to 80%.',
  },
  {
    question: 'Which size Climix air curtain is suitable for my door?',
    answer:
      'Climix Q Series models come in standard door widths: 90 cm (HFM-1209Q), 120 cm (HFM-1212Q), 150 cm (HFM-1215Q), and 180 cm (HFM-1218Q). For wider commercial openings or loading docks, units can be joined side by side. Call or WhatsApp us at 9851123725 / 9715023725 for door sizing advice.',
  },
  {
    question: 'How can I contact Dynamic Air Solutions Pvt. Ltd. for enquiries?',
    answer:
      'You can call or WhatsApp us directly at 9851123725 / 9715023725, email us at sdynamicair@gmail.com, or use the interactive enquiry form on this website to prepare and send your specifications directly to our engineering team.',
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
