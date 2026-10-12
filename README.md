# Dynamic Air Website Project

A high-performance modern web application for Dynamic Air (Electronics, Cooling & Maintenance Services).

---

## 📁 Project Architecture & Folder Organization

This repository is organized into distinct, specialized directories with the frontend application cleanly isolated:

```text
dynamic-air-website/
├── frontend/                 # 🚀 Next.js 16 + React 19 Frontend Application (Source Code)
│   ├── app/                  # Next.js App Router (pages, layout, global styles, SEO)
│   │   ├── globals.css       # Complete CSS design system, typography & micro-interactions
│   │   ├── layout.tsx        # HTML document frame & global metadata
│   │   ├── page.tsx          # Main entry page assembling modular components
│   │   ├── robots.ts         # Automated robots.txt generator
│   │   └── sitemap.ts        # Automated sitemap.xml generator
│   ├── components/           # 🧩 Modular React UI Components
│   │   ├── index.ts          # Central barrel export
│   │   ├── layout/           # Global chrome & navigation
│   │   │   ├── Header.tsx    # Header navbar, mobile drawer, brand identity & action CTA
│   │   │   └── Footer.tsx    # Footer site map, contact badges & copyright
│   │   ├── sections/         # Feature sections for the landing page
│   │   │   ├── HeroSection.tsx      # Cinematic 3-slide hero carousel with auto/manual controls
│   │   │   ├── ExpertiseStrip.tsx   # Fast feature icon bar
│   │   │   ├── IntroSection.tsx     # Value proposition & guiding principles
│   │   │   ├── SolutionsSection.tsx # Category filterable solution/product cards
│   │   │   ├── ServicesSection.tsx  # Interactive expandable service panels & checklists
│   │   │   ├── MarqueeSection.tsx   # Looping ticker banner
│   │   │   ├── AboutSection.tsx     # 4-pillar brand values & approach
│   │   │   ├── ProcessSection.tsx   # 3-step customer onboarding flow
│   │   │   ├── FaqSection.tsx       # Interactive expandable FAQs
│   │   │   └── ContactSection.tsx   # Call to action & live business contact details
│   │   └── modals/           # Native accessible dialogs
│   │       ├── ProductModal.tsx     # Full product/solution specification dialog
│   │       └── EnquiryModal.tsx     # Interactive draft builder (copy, export, email, WhatsApp)
│   ├── lib/                  # 📚 Business data & content configurations
│   │   ├── site-content.ts   # Configurable business details, product catalog, services, FAQs
│   │   └── image-prompts.json# Metadata & prompts for illustrative imagery
│   ├── types/                # 🏷️ TypeScript interfaces & definitions
│   │   └── index.ts          # Types for Products, Services, FAQs, HeroSlides, Categories
│   ├── public/               # 🖼️ Static assets (images, icons, .htaccess)
│   ├── scripts/              # ⚙️ Dev scripts (dev.mjs launcher)
│   ├── next.config.ts        # Next.js static export config
│   ├── tsconfig.json         # TypeScript configuration with '@/...' path aliases
│   └── package.json          # Frontend dependencies & NPM scripts
│
├── upload-ready/             # 📦 Prebuilt Static Export (Ready for cPanel / Apache / CDN)
│   ├── index.html            # Pre-rendered HTML homepage
│   ├── 404.html              # Custom 404 page
│   ├── _next/                # Optimized JavaScript chunks & CSS bundles
│   ├── images/               # Optimized WebP assets
│   ├── .htaccess             # Apache rewrite rules & caching headers
│   ├── robots.txt            # Search engine directives
│   └── sitemap.xml           # XML sitemap for SEO
│
├── DOMAIN_SETUP.md           # 🌐 DNS records, hostname configuration & cPanel instructions
├── START_HERE.txt            # ⚡ Quick overview file
└── README.md                 # 📖 Root project documentation (this file)
```

---

## 🚀 Working with the Frontend

All frontend development is located inside the [`frontend/`](file:///c:/Users/dipak/Desktop/pr/Dynamic_Air_NextJS_Website/dynamic-air-website/frontend) directory.

### 1. Install Dependencies
```bash
cd frontend
npm ci
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Check Types
```bash
npm run typecheck
```

### 4. Build Static Production Export
```bash
npm run build
```
The static export is generated in `frontend/out/`.

---

## 🛠️ Customizing Business Details & Content

To update business contact details, products, or services:
- Open [`frontend/lib/site-content.ts`](file:///c:/Users/dipak/Desktop/pr/Dynamic_Air_NextJS_Website/dynamic-air-website/frontend/lib/site-content.ts)
- Configure `email`, `phone`, `whatsapp`, `address`, `mapsUrl`, and `openingHours`.
- Rebuild via `npm run build` and upload the contents of `out/` to your hosting provider.

---

## 🌐 Deployment Options

See [`DOMAIN_SETUP.md`](file:///c:/Users/dipak/Desktop/pr/Dynamic_Air_NextJS_Website/dynamic-air-website/DOMAIN_SETUP.md) for detailed step-by-step instructions:
- **Option A**: Connect your custom domain directly (`dynamicair.com.np`).
- **Option B**: Upload prebuilt files from [`upload-ready/`](file:///c:/Users/dipak/Desktop/pr/Dynamic_Air_NextJS_Website/dynamic-air-website/upload-ready) to cPanel / `public_html`.
