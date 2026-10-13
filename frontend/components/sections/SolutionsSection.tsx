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
              <span className="square-bullet" /> AIR CURTAINS, HVAC &amp; COLD STORAGE
            </div>
            <h2>
              Engineered air barriers.
              <br /> <span className="muted-text">Precision climate &amp; cold storage.</span>
            </h2>
          </div>
          <p>
            Explore Climix air curtains, residential split systems,
            <br className="desktop-only" /> commercial VRF networks, and modular cold rooms.
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

          <a
            href="/docs/climix-air-curtain-catalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="brochure-download-pill"
          >
            <Download size={15} /> Download Climix Q Series Catalog (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
