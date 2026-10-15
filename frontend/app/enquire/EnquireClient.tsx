'use client';

import React, { useState, useEffect, type FormEvent } from 'react';
import Link from 'next/link';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Download,
  MessageCircle,
  Loader2,
  RefreshCw,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
  Check,
} from 'lucide-react';
import { business } from '@/lib/site-content';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';

const DEFAULT_INQUIRY_MAIL = 'sdynamicair@gmail.com';

const solutionOptions = [
  'Smart HEPA Air Purifier (Different Sizes)',
  'Residential Wall-Mounted Split AC',
  'VRF / VRV System (4 HP Mini VRF to Commercial)',
  '4-Way Ceiling Cassette AC',
  'Modular Cold Room (Chiller & Freezer)',
  'HVAC Installation & Copper Piping',
  'Repair & Gas Charging',
  'Annual Maintenance Contract (AMC)',
  'Climix Q Series Air Curtain',
  'General enquiry',
];

export default function EnquireClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const [interest, setInterest] = useState(solutionOptions[0]);
  const [draft, setDraft] = useState('');
  const [notice, setNotice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'fallback'>('idle');
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    contact: string;
    interest: string;
    location: string;
    message: string;
  } | null>(null);

  const targetWhatsapp = business.whatsapp || '9779715023725';

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
      localStorage.setItem('dynamic_air_theme', next);
    } catch {}
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setNotice('');

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const contact = String(data.get('contact') || '').trim();
    const selectedInterest = String(data.get('interest') || interest).trim();
    const location = String(data.get('location') || '').trim() || 'Kathmandu, Nepal';
    const message = String(data.get('message') || '').trim();

    const formattedDraft = `Hello Dynamic Air Solutions,

I would like to enquire about: ${selectedInterest}

Client Name: ${name}
Contact: ${contact}
Location: ${location}

Requirements & Project Scope:
${message}

Please share equipment availability, on-site assessment schedule, and quotation.`;

    setDraft(formattedDraft);
    setSubmittedData({
      name,
      contact,
      interest: selectedInterest,
      location,
      message,
    });

    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(formattedDraft)}`;

    // Open WhatsApp in a new tab upon submit user gesture
    if (typeof window !== 'undefined') {
      try {
        window.open(whatsappUrl, '_blank');
      } catch {}
    }

    // Direct auto-send to email behind the scenes via FormSubmit
    const targetEmail = business.email || DEFAULT_INQUIRY_MAIL;
    const payload: Record<string, string> = {
      name,
      contact,
      interest: selectedInterest,
      location,
      message,
      _subject: `New Website Enquiry: ${selectedInterest} - ${name}`,
      _template: 'table',
      _captcha: 'false',
    };

    if (contact.includes('@')) {
      payload._replyto = contact;
    }

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json().catch(() => null);

      if (response.ok && (result?.success === 'true' || result?.success === true)) {
        setSubmitStatus('success');
        setNotice('Enquiry auto-sent to our team! Use the WhatsApp option below for instant real-time chat.');
      } else if (result?.message && result.message.toLowerCase().includes('activation')) {
        setSubmitStatus('success');
        setNotice(`Enquiry submitted! Please check ${targetEmail} to confirm one-time FormSubmit activation.`);
      } else {
        setSubmitStatus('fallback');
        setNotice('Direct transmission could not be confirmed. Please send via WhatsApp below.');
      }
    } catch {
      setSubmitStatus('fallback');
      setNotice('Network connection was interrupted. Please send directly via WhatsApp below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyDraft = async () => {
    try {
      await navigator.clipboard.writeText(draft);
      setNotice('Enquiry copied to clipboard. You can paste it into WhatsApp.');
    } catch {
      setNotice('Copy is unavailable. Please select and copy the text below.');
    }
  };

  const downloadDraft = () => {
    const url = URL.createObjectURL(
      new Blob([draft], { type: 'text/plain;charset=utf-8' })
    );
    const link = document.createElement('a');
    link.href = url;
    link.download = `Dynamic-Air-Enquiry-${Date.now()}.txt`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice('Enquiry file downloaded.');
  };

  const handleReset = () => {
    setDraft('');
    setNotice('');
    setSubmitStatus('idle');
    setSubmittedData(null);
  };

  const scrollToForm = () => {
    const el = document.getElementById('enquiry-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="solution-showcase-wrapper enquire-page-wrapper">
      <Header
        business={business}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenEnquiry={scrollToForm}
      />

      <main className="enquire-page-main" id="main">
        <div className="container" style={{ paddingTop: '28px', paddingBottom: '70px' }}>
          {/* Top Breadcrumb */}
          <div className="solution-page-header-top" style={{ marginBottom: '24px' }}>
            <Link href="/#home" className="solution-back-btn">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
            <div className="solution-breadcrumb-pill">
              <ShieldCheck size={14} />
              <span>Official Dynamic Air Enquiry Desk</span>
            </div>
          </div>

          {/* Two-Column Responsive Grid */}
          <div className="enquire-page-grid">
            {/* Left Column: Direct Contact & Trust Information */}
            <div className="enquire-info-col">
              <div className="section-eyebrow">
                <span className="square-bullet" /> LET’S TALK COMFORT
              </div>
              <h1 className="enquire-page-title">
                What can we
                <br />
                help you with?
              </h1>
              <p className="enquire-page-desc">
                Whether you need Climix cross-flow air curtains, inverter split air conditioning,
                commercial VRF systems, or modular cold rooms across Nepal — our certified HVAC
                engineers are ready to assist with sizing, quotations, and on-site assessments.
              </p>

              {/* Direct WhatsApp Callout */}
              {business.whatsapp && (
                <div className="enquire-whatsapp-banner">
                  <div className="banner-badge">
                    <MessageCircle size={15} />
                    <span>INSTANT RESPONSE</span>
                  </div>
                  <h3>Prefer to Chat on WhatsApp?</h3>
                  <p>
                    Send your site photos or doorway dimensions directly to our technician for rapid guidance.
                  </p>
                  <a
                    href={`https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(
                      'Hello Dynamic Air Solutions, I would like to make an enquiry regarding HVAC and Climix air curtain solutions.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-whatsapp"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MessageCircle size={18} /> Chat on WhatsApp
                  </a>
                </div>
              )}

              {/* Direct Contact Cards */}
              <div className="enquire-contact-cards">
                <div className="contact-card-item">
                  <div className="card-item-icon">
                    <Phone size={18} />
                  </div>
                  <div className="card-item-content">
                    <span className="card-item-label">Direct Phone Lines</span>
                    <div className="card-phone-links">
                      <a href={`tel:${business.phone.replace(/[^+\d]/g, '')}`}>{business.phone}</a>
                      {business.phone2 && (
                        <>
                          <span className="slash">/</span>
                          <a href={`tel:${business.phone2.replace(/[^+\d]/g, '')}`}>{business.phone2}</a>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="card-item-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="card-item-content">
                    <span className="card-item-label">Kathmandu Engineering Hub</span>
                    <span className="card-item-val">{business.address}</span>
                  </div>
                </div>

                <div className="contact-card-item">
                  <div className="card-item-icon">
                    <Clock size={18} />
                  </div>
                  <div className="card-item-content">
                    <span className="card-item-label">Operating Schedule</span>
                    <span className="card-item-val">{business.openingHours}</span>
                  </div>
                </div>
              </div>

              {/* Trust Features */}
              <div className="enquire-trust-list">
                <span className="trust-heading">WHY PARTNER WITH DYNAMIC AIR:</span>
                <div className="trust-points-grid">
                  <div className="trust-point">
                    <Check size={14} />
                    <span>Authorized Climix distributor in Nepal</span>
                  </div>
                  <div className="trust-point">
                    <Check size={14} />
                    <span>Free door & heat-load assessment</span>
                  </div>
                  <div className="trust-point">
                    <Check size={14} />
                    <span>HVAC installation & genuine copper piping</span>
                  </div>
                  <div className="trust-point">
                    <Check size={14} />
                    <span>1-Year comprehensive warranty & AMC</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form Desk */}
            <div className="enquire-form-col" id="enquiry-form-section">
              <div className="enquire-form-surface">
                <div className="surface-header">
                  <span className="surface-badge">
                    <Sparkles size={13} /> SUBMIT REQUIREMENTS
                  </span>
                  <h2>Project Quotation & Sizing Form</h2>
                  <p>Fill out the form below for immediate dispatch to our engineers.</p>
                </div>

                {!draft ? (
                  <form onSubmit={handleSubmit} className="enquiry-form">
                    <div className="form-row">
                      <label>
                        Your name <span>*</span>
                        <input
                          name="name"
                          required
                          minLength={2}
                          maxLength={100}
                          autoComplete="name"
                          placeholder="Full name"
                        />
                      </label>
                      <label>
                        Phone or WhatsApp <span>*</span>
                        <input
                          name="contact"
                          required
                          minLength={5}
                          maxLength={150}
                          autoComplete="tel"
                          placeholder="e.g. 98XXXXXXXX"
                        />
                      </label>
                    </div>

                    <div className="form-row">
                      <label>
                        I’m interested in
                        <select
                          name="interest"
                          value={interest}
                          onChange={(e) => setInterest(e.target.value)}
                        >
                          {solutionOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label>
                        Your location
                        <input
                          name="location"
                          maxLength={150}
                          autoComplete="address-level2"
                          placeholder="City or area (e.g. Kathmandu)"
                        />
                      </label>
                    </div>

                    <label>
                      Tell us a little more <span>*</span>
                      <textarea
                        name="message"
                        required
                        minLength={10}
                        maxLength={2000}
                        rows={4}
                        placeholder="Your space, doorway width, equipment specifications or service needs…"
                      />
                    </label>

                    <p className="form-disclosure">
                      Submissions are auto-sent directly to our engineering team and can immediately be sent to WhatsApp below.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="button button-dark full-width enquiry-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={17} className="spin" />
                          Auto-sending enquiry to engineering team…
                        </>
                      ) : (
                        <>
                          Submit Enquiry (Auto-Send to Team) <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="enquiry-result">
                    {/* AUTO SEND STATUS */}
                    <div className={`enquiry-status-card ${submitStatus === 'success' ? 'status-success' : 'status-fallback'}`}>
                      <div className="enquiry-status-header">
                        {submitStatus === 'success' ? (
                          <>
                            <CheckCircle2 size={20} />
                            <span>Enquiry Auto-Sent Successfully!</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle size={20} />
                            <span>Enquiry Prepared for WhatsApp</span>
                          </>
                        )}
                      </div>
                      <p className="enquiry-status-text">
                        {submitStatus === 'success' ? (
                          <>
                            Thank you, <strong>{submittedData?.name}</strong>. Your enquiry regarding{' '}
                            <strong>{submittedData?.interest}</strong> has been auto-sent to our engineering department.
                          </>
                        ) : (
                          <>
                            Your enquiry is ready. Direct dispatch target: Dynamic Air Engineering Team.
                          </>
                        )}
                      </p>
                      {submittedData?.contact && (
                        <p className="enquiry-status-text" style={{ marginTop: '5px' }}>
                          Contact on file: <strong>{submittedData.contact}</strong>
                        </p>
                      )}
                    </div>

                    {/* WHATSAPP CTA */}
                    <div className="enquiry-whatsapp-card" style={{ marginTop: '16px' }}>
                      <div className="whatsapp-card-badge">
                        <MessageCircle size={15} />
                        <span>CURRENT SENDING TO WHATSAPP</span>
                      </div>
                      <h3 className="whatsapp-card-title">
                        Send Current Enquiry to WhatsApp
                      </h3>
                      <p className="whatsapp-card-desc">
                        Chat directly with our technician on WhatsApp for instant quotations and equipment recommendation.
                      </p>
                      <a
                        href={`https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(draft)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button-whatsapp whatsapp-direct-send-btn"
                      >
                        <MessageCircle size={19} />
                        <span>Send Current Enquiry to WhatsApp</span>
                        <ExternalLink size={15} />
                      </a>
                    </div>

                    {/* SUMMARY PREVIEW */}
                    <div className="enquiry-summary-preview" style={{ marginTop: '16px' }}>
                      <div className="preview-label-row">
                        <span className="result-label">Current Enquiry Details</span>
                        <span className="recipient-pill">Status: Auto-Dispatched</span>
                      </div>
                      <textarea
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        rows={6}
                      />
                    </div>

                    {/* ACTIONS: Copy, Download */}
                    <div className="result-buttons">
                      <button className="button button-dark" onClick={copyDraft}>
                        <Copy size={16} />
                        Copy
                      </button>
                      <button className="button button-outline" onClick={downloadDraft}>
                        <Download size={16} />
                        Download (.txt)
                      </button>
                    </div>

                    <div className="enquiry-footer-actions">
                      <button className="edit-enquiry" onClick={handleReset}>
                        <RefreshCw size={13} style={{ marginRight: '5px' }} />
                        Submit another enquiry
                      </button>
                    </div>
                  </div>
                )}

                {notice && (
                  <p className="notice" role="status" style={{ marginTop: '14px' }}>
                    {notice}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer business={business} onOpenEnquiry={scrollToForm} />

      <MobileBottomNav
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
        onOpenEnquiry={scrollToForm}
      />
    </div>
  );
}
