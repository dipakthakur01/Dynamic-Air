'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Plus, Sparkles, Download, FileText } from 'lucide-react';
import type { Category, Product } from '@/types';

interface SolutionsSectionProps {
  categories: Category[];
  currentCategory: Category;
  onSelectCategory: (category: Category) => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onOpenEnquiry: (topic?: string) => void;
}

export default function SolutionsSection({
  categories,
  currentCategory,
  onSelectCategory,
  products,
  onSelectProduct,
  onOpenEnquiry,
}: SolutionsSectionProps) {
  const router = useRouter();
  return (
    <section id="solutions" className="solutions-section section-pad">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <div className="section-eyebrow">
              <span className="square-bullet" /> AIR CURTAINS, HVAC, COLD STORAGE &amp; PURIFIERS
            </div>
            <h2>
              Engineered air barriers &amp; cooling.
              <br /> <span className="muted-text">Precision climate, cold storage &amp; clean air.</span>
            </h2>
          </div>
          <p>
            Explore Climix air curtains, residential split ACs, VRF systems (4 HP Mini to commercial),
            <br className="desktop-only" /> modular cold rooms, and smart HEPA air purifiers.
          </p>
        </div>

        <div className="filter-row" aria-label="Filter solutions">
          {categories.map((item) => (
            <button
              key={item}
              className={`filter-button ${currentCategory === item ? 'active' : ''}`}
              aria-pressed={currentCategory === item}
              onClick={() => onSelectCategory(item)}
            >
              {item}
              {currentCategory === item && <span />}
            </button>
          ))}
        </div>

        <div className="product-grid" aria-live="polite">
          {products.map((item, index) => (
            <article
              className="product-card clickable-product-card"
              key={item.id}
              style={{ animationDelay: `${index * 80}ms` }}
              onClick={(e) => {
                const target = e.target as HTMLElement;
                if (target.closest('.product-brochure-link')) return;
                router.push(`/solutions/${item.id}`);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  router.push(`/solutions/${item.id}`);
                }
              }}
              role="link"
              tabIndex={0}
              aria-label={`Inspect ${item.name} specifications and architecture`}
            >
              <div
                className="product-image-button"
                aria-hidden="true"
              >
                <img
                  className={item.imageClass || ''}
                  src={item.image}
                  loading="lazy"
                  alt={`Product illustration of ${item.name.toLowerCase()}`}
                  width="800"
                  height="600"
                />
                <span className="product-pill">{item.category}</span>
                <span className="product-open">
                  <Plus size={23} />
                </span>
              </div>
              <div className="product-body">
                <span className="micro-label">{item.label}</span>
                <h3>
                  <Link href={`/solutions/${item.id}`} onClick={(e) => e.stopPropagation()}>
                    {item.name}
                  </Link>
                </h3>
                {item.specSummary && (
                  <div className="product-specs-preview">
                    {item.specSummary}
                  </div>
                )}
                <p>{item.description}</p>
                <div className="product-card-actions">
                  <Link
                    href={`/solutions/${item.id}`}
                    className="product-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View specifications <Plus size={16} />
                  </Link>
                  {item.brochureUrl && (
                    <a
                      href={item.brochureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-brochure-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FileText size={14} /> PDF Catalog
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="selection-note">
          <div className="selection-note-left">
            <span>
              <Sparkles size={16} />
              Need help sizing your doorway or room?
            </span>
            <button
              onClick={() =>
                onOpenEnquiry('Help choosing the right Climix air curtain / AC')
              }
            >
              Request on-site assessment
            </button>
          </div>

          <div className="brochures-download-group">
            <a
              href="/docs/q-series-air-curtain-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="brochure-download-pill"
              title="Download Climix Q Series Air Curtain Brochure PDF"
            >
              <Download size={15} /> Climix Q Series (PDF)
            </a>
            <a
              href="/docs/commercial-ac-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="brochure-download-pill"
              title="Download Commercial AC Brochure PDF"
            >
              <Download size={15} /> Commercial AC (PDF)
            </a>
            <a
              href="/docs/wall-mounted-ac-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="brochure-download-pill"
              title="Download Wall-Mounted AC Brochure PDF"
            >
              <Download size={15} /> Wall-Mounted AC (PDF)
            </a>
            <a
              href="/docs/cold-storage-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="brochure-download-pill"
              title="Download Modular Cold Storage Solutions Brochure PDF"
            >
              <Download size={15} /> Cold Storage (PDF)
            </a>
            <a
              href="/docs/air-purifier-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="brochure-download-pill"
              title="Download Smart HEPA Air Purifier Brochure PDF"
            >
              <Download size={15} /> HEPA Air Purifier (PDF)
            </a>
            <a
              href="/docs/amc-service-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="brochure-download-pill"
              title="Download AMC Maintenance Service Brochure PDF"
            >
              <Download size={15} /> AMC Service (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
