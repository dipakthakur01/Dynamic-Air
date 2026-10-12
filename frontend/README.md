# Dynamic Air

A frontend-only Next.js information website for electronics, air conditioning and service.

## Included

- Responsive desktop, tablet and mobile layouts
- Three-image cinematic hero with manual controls, pause and crossfade
- Scroll reveals, image hover effects, moving typography and reading progress
- Filterable solution cards and accessible native detail dialogs
- Expandable service panels and FAQs
- Enquiry composer with local copy/download; optional email and WhatsApp links
- Reduced-motion support, semantic HTML, keyboard access and focus states
- Static export, metadata, favicon, sitemap and robots.txt

No sign-up, login, database, API routes, payment processing or backend.

## Run locally

Use Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. To use another port: `npm run dev -- --port 3001`.

```bash
npm run typecheck
npm run build
```

The static website is generated in `out/`. Do not use `next start` for a static export.

## Folder structure

```text
app/
  globals.css          Visual design, responsive layouts and motion
  layout.tsx           Site title, description, favicon and SEO
  page.tsx             Main home page orchestrating modular sections and dialogs
  robots.ts            Static robots.txt
  sitemap.ts           Static sitemap
components/
  index.ts             Barrel export for all frontend components
  layout/
    Header.tsx         Navigation, brand logo, mobile menu drawer and CTA
    Footer.tsx         Footer navigation, brand identity and copyright
  sections/
    HeroSection.tsx    Three-slide hero carousel with crossfade and controls
    ExpertiseStrip.tsx Quick service highlights and icons
    IntroSection.tsx   Brand philosophy and core values
    SolutionsSection.tsx Category filterable product cards and trigger
    ServicesSection.tsx Expandable service panels and checklists
    MarqueeSection.tsx Dynamic ticker banner
    AboutSection.tsx   Dynamic Air approach and principles
    ProcessSection.tsx 3-step customer journey cards
    FaqSection.tsx     Interactive expandable FAQs
    ContactSection.tsx Contact CTA & verified business contact details
  modals/
    ProductModal.tsx   Accessible solution detail modal dialog
    EnquiryModal.tsx   Interactive enquiry composer with copy & export
types/
  index.ts             TypeScript interface and type definitions
lib/
  site-content.ts      Business contacts, products, services and FAQ content
  image-prompts.json   Prompts used for the illustrative generated imagery
public/
  favicon.svg
  images/
    cooling.webp
    appliances.webp
    service.webp
scripts/
  dev.mjs              Next.js development launcher
next.config.ts         Static export configuration
package.json
package-lock.json
```

## Configure the business before launch

Edit `lib/site-content.ts`:

- `name`, `domain`
- `email`, `phone`, `whatsapp` (international digits, no plus sign)
- `address`, `mapsUrl`, `openingHours`
- Confirm the actual product categories and services you offer.

No unverified telephone number, email address, store address, price, review, partnership or certification has been invented. These contact fields are intentionally empty. Contact links appear automatically once email/phone/WhatsApp are configured. Currently visitors can prepare, copy and download an enquiry. Nothing is submitted, stored on a server, or represented as delivered.

Product and technician images are generated illustrations. They are not photos of your stock, staff, installations or completed projects. Replace them with your own business photos when available. The provided reference site was used only to understand the broad service categories. Its branding, testimonials, claims, contact details and product pricing have not been copied.

The brand name is inferred from dynamicair.com.np. Cooling, home electronics, installation, maintenance and commercial enquiries form the initial editable content. No specific service coverage area or opening hours is assumed.

## Publish on dynamicair.com.np with cPanel or static hosting

1. Update the business details and run `npm ci` then `npm run build`.
2. Back up the website currently hosted under the domain, if any.
3. In the domain's hosting account, identify its document root (often `public_html`, but addon domains may have a different folder).
4. Upload **the contents of `out/`**, including `_next/`, `images/`, `index.html`, `404.html`, `robots.txt` and `sitemap.xml`, into that document root.
5. Do not upload `node_modules`, `.next`, the source repository, `.openai`, or server credentials to the public document root.
6. Point the domain to your hosting provider using their exact DNS values. Keep email MX/TXT records unchanged.
7. Enable HTTPS with your hosting provider and choose one preferred hostname. Metadata currently uses `https://dynamicair.com.np`.
8. Open the domain and check images, enquiry actions and mobile navigation.

The supplied `upload-ready/` folder is already built and can be uploaded directly. For later content edits, rebuild from `frontend/` and upload the new `out/` contents. This site does not need a Node.js application running in cPanel, MySQL, a form service or a backend.

If using the accompanying hosted preview instead of cPanel, connect the domain using the exact DNS records returned by the hosting platform. Do not combine DNS instructions from two different hosting options.

## Enquiries and privacy

Form values exist only in page memory. The website makes no form submission and uses no analytics or application cookies. Copy and download are initiated by the visitor. Configured `mailto:`/WhatsApp actions open the visitor's own email or messaging app; they still choose whether to send. Typography currently loads Google Fonts, with local system fallback when unavailable.
