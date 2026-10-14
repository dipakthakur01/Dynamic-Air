'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Wind,
  Sparkles,
  FileText,
  ArrowLeft,
  Layers,
  Check,
  ExternalLink,
  Zap,
} from 'lucide-react';
import type { Product, Category } from '@/types';
import { business, products } from '@/lib/site-content';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import EnquiryModal from '@/components/modals/EnquiryModal';

interface SolutionShowcaseProps {
  initialProduct?: Product;
}

export default function SolutionShowcase({ initialProduct }: SolutionShowcaseProps) {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    initialProduct || products[0]
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [interest, setInterest] = useState(
    initialProduct?.name || products[0].name
  );
  const [draft, setDraft] = useState('');
  const [notice, setNotice] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Sync theme
  useEffect(() => {
    const active =
      (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') ||
      'light';
    setTheme(active);

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {}
  };

  const handleOpenEnquiry = (topic?: string) => {
    setInterest(topic || selectedProduct.name);
    setEnquiryOpen(true);
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  };

  const handleCloseEnquiry = () => {
    setEnquiryOpen(false);
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    }
  };

  const handleSelectProduct = (p: Product) => {
    setSelectedProduct(p);
    setInterest(p.name);
    // Update browser URL without reloading
    window.history.pushState({}, '', `/solutions/${p.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="solution-showcase-wrapper">
      <Header
        business={business}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenEnquiry={handleOpenEnquiry}
      />

      <main className="solution-showcase-main">
        <div className="container">
          {/* Top Breadcrumb & Back Link */}
          <div className="solution-page-header-top">
            <Link href="/#solutions" className="solution-back-btn">
              <ArrowLeft size={16} />
              <span>Back to All Solutions</span>
            </Link>
            <div className="solution-breadcrumb-pill">
              <ShieldCheck size={14} />
              <span>Authorized Climix Engineering Partner</span>
            </div>
          </div>

          {/* Animated Header Section */}
          <div className="solution-hero-heading-block">
            <div className="solution-eyebrow-accent">
              <span className="eyebrow-dash" />
              <span>DEDICATED ARCHITECTURAL CAPABILITIES</span>
            </div>
            <h1 className="solution-animated-title">
              Precision Climate &amp; Air Barrier Architecture.
            </h1>
            <p className="solution-hero-sub">
              Explore in-depth technical specifications, airflow physics, installation scopes,
              and certified performance parameters for our full HVAC and cold storage line.
            </p>
          </div>

          {/* Main Architectural Split Hero Card (One Side Overview, One Side Image) */}
          <section className="solution-split-card" aria-labelledby="active-product-title">
            {/* Left Side: Overview & Specifications */}
            <div className="solution-overview-col">
              <div className="solution-badge-row">
                <span className="solution-category-badge">
                  <Wind size={13} />
                  {selectedProduct.category}
                </span>
                <span className="solution-label-pill">{selectedProduct.label}</span>
              </div>

              <h2 id="active-product-title" className="solution-product-name">
                {selectedProduct.name}
              </h2>

              {selectedProduct.specSummary && (
                <div className="solution-spec-tagline">
                  <Zap size={15} />
                  <span>{selectedProduct.specSummary}</span>
                </div>
              )}

              <p className="solution-description-text">{selectedProduct.description}</p>

              {/* Action Buttons Group */}
              <div className="solution-actions-group">
                <button
                  type="button"
                  className="button button-primary solution-primary-cta"
                  onClick={() => handleOpenEnquiry(selectedProduct.name)}
                >
                  <span>Request Technical Scope</span>
                  <ArrowRight size={16} />
                </button>

                {selectedProduct.brochureUrl && (
                  <a
                    href={selectedProduct.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-ghost solution-brochure-btn"
                  >
                    <FileText size={15} />
                    <span>Download PDF Catalog</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>

              {/* Direct Engineering Phone Hotline */}
              <div className="solution-hotline-strip">
                <Phone size={14} />
                <span>
                  Direct Engineering Enquiry:{' '}
                  <strong>
                    <a
                      href={`tel:${business.phone.replace(/[^+\d]/g, '')}`}
                      className="hotline-sublink"
                    >
                      {business.phone}
                    </a>
                    {business.phone2 && (
                      <>
                        <span className="hotline-slash">/</span>
                        <a
                          href={`tel:${business.phone2.replace(/[^+\d]/g, '')}`}
                          className="hotline-sublink"
                        >
                          {business.phone2}
                        </a>
                      </>
                    )}
                  </strong>
                </span>
              </div>
            </div>

            {/* Right Side: High-Resolution Product Image with Blueprint Tag */}
            <div className="solution-image-col">
              <div className="solution-image-frame">
                <div className="solution-blueprint-badge">
                  <Layers size={13} />
                  <span>ARCHITECTURE BLUEPRINT &amp; APPLICATION</span>
                </div>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={800}
                  height={600}
                  className="solution-hero-img"
                />
                <div className="solution-image-caption-bar">
                  <span>{selectedProduct.name}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Capabilities & Deployment Scope Breakdown */}
          <div className="solution-details-grid">
            {/* Left Breakdown: Key Engineering Capabilities */}
            <div className="solution-details-card capabilities-card">
              <div className="card-header-bar">
                <Sparkles size={18} className="card-icon" />
                <div className="card-header-text">
                  <h3>Key Engineering Capabilities &amp; Performance</h3>
                  <small>Validated specifications and structural standards</small>
                </div>
              </div>

              <ul className="capabilities-list">
                {selectedProduct.features.map((feat, idx) => (
                  <li key={idx} className="capability-item">
                    <span className="check-bullet">
                      <Check size={14} />
                    </span>
                    <span className="capability-text">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Breakdown: Deployment Scope & Ideal Venues */}
            <div className="solution-details-card deployment-card">
              <div className="card-header-bar">
                <ShieldCheck size={18} className="card-icon accent" />
                <div className="card-header-text">
                  <h3>Deployment Scope &amp; Ideal Applications</h3>
                  <small>Target facilities and turnkey installation support</small>
                </div>
              </div>

              <div className="deployment-content">
                <div className="deployment-field">
                  <span className="field-label">IDEAL DEPLOYMENT VENUES</span>
                  <p className="field-value">{selectedProduct.idealFor}</p>
                </div>

                <div className="deployment-field">
                  <span className="field-label">ENERGY CONSERVATION RATING</span>
                  <p className="field-value">
                    Engineered to reduce air exchange thermal losses by up to <strong>40%</strong>,
                    drastically lowering commercial air conditioning and refrigeration power consumption.
                  </p>
                </div>

                <div className="deployment-field">
                  <span className="field-label">INCLUDED DYNAMIC AIR SERVICES</span>
                  <div className="services-chips-wrap">
                    <span className="service-chip">
                      <CheckCircle2 size={13} /> Site Survey &amp; Sizing
                    </span>
                    <span className="service-chip">
                      <CheckCircle2 size={13} /> Heat Load Calculation
                    </span>
                    <span className="service-chip">
                      <CheckCircle2 size={13} /> Professional Mounting
                    </span>
                    <span className="service-chip">
                      <CheckCircle2 size={13} /> Copper Vacuum Setup
                    </span>
                    <span className="service-chip">
                      <CheckCircle2 size={13} /> 1-Year AMC Warranty
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Explore Other Solution Disciplines (Matching Reference Design) */}
          <section className="explore-solutions-section" aria-labelledby="explore-disciplines-heading">
            <div className="explore-section-header">
              <h2 id="explore-disciplines-heading" className="explore-section-title">
                Explore Other Solution Disciplines
              </h2>
              <p className="explore-section-subtitle">
                Select any solution box below to open its dedicated architectural blueprint and engineering scope.
              </p>
            </div>

            <div className="explore-solutions-grid">
              {products
                .filter((p) => p.id !== selectedProduct.id)
                .map((item) => (
                  <article
                    key={item.id}
                    className="explore-solution-card"
                    onClick={() => handleSelectProduct(item)}
                    role="link"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleSelectProduct(item);
                      }
                    }}
                    aria-label={`Open overview for ${item.name}`}
                  >
                    <div className="explore-card-media">
                      <span className="explore-card-badge">{item.label}</span>
                      <img
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={240}
                        loading="lazy"
                        className="explore-card-img"
                      />
                    </div>
                    <div className="explore-card-body">
                      <div className="explore-card-title-row">
                        {item.id.includes('vrf') ? (
                          <Layers size={15} className="explore-card-icon" />
                        ) : item.id.includes('industrial') ? (
                          <ShieldCheck size={15} className="explore-card-icon" />
                        ) : item.id.includes('residential') ? (
                          <Zap size={15} className="explore-card-icon" />
                        ) : item.id.includes('cassette') ? (
                          <Sparkles size={15} className="explore-card-icon" />
                        ) : (
                          <Wind size={15} className="explore-card-icon" />
                        )}
                        <h3 className="explore-card-name">{item.name}</h3>
                      </div>
                      <p className="explore-card-desc">{item.description}</p>
                      <div className="explore-card-footer">
                        <span className="explore-card-action">
                          Open Overview <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        </div>
      </main>

      <Footer business={business} onOpenEnquiry={() => handleOpenEnquiry(selectedProduct.name)} />

      <EnquiryModal
        dialogRef={dialogRef}
        onClose={handleCloseEnquiry}
        interest={interest}
        setInterest={setInterest}
        draft={draft}
        setDraft={setDraft}
        notice={notice}
        setNotice={setNotice}
        business={business}
      />
    </div>
  );
}
