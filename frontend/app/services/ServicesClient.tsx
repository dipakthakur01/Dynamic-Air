'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { business, services } from '@/lib/site-content';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import EnquiryModal from '@/components/modals/EnquiryModal';

export default function ServicesClient() {
  const [serviceOpen, setServiceOpen] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [interest, setInterest] = useState('HVAC Installation & Service');
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
      localStorage.setItem('dynamic_air_theme', next);
    } catch {}
  };

  const handleOpenEnquiry = (topic?: string | unknown) => {
    const validTopic =
      typeof topic === 'string' && topic.trim().length > 0
        ? topic.trim()
        : 'HVAC Engineering Services';
    setInterest(validTopic);
    setEnquiryOpen(true);
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      try {
        dialog.showModal();
      } catch (e) {
        console.warn('[EnquiryModal] showModal error:', e);
      }
    }
  };

  const handleCloseEnquiry = () => {
    setEnquiryOpen(false);
    const dialog = dialogRef.current;
    if (dialog?.open) {
      try {
        dialog.close();
      } catch (e) {
        console.warn('[EnquiryModal] close error:', e);
      }
    }
  };

  return (
    <div className="services-page-wrapper solution-showcase-wrapper">
      <Header
        business={business}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenEnquiry={handleOpenEnquiry}
      />

      <main className="services-page-main" id="main">
        <div className="container" style={{ paddingTop: '16px', paddingBottom: '0' }}>
          <div className="solution-page-header-top" style={{ marginBottom: '8px' }}>
            <Link href="/" className="solution-back-btn">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
            <div className="solution-breadcrumb-pill">
              <ShieldCheck size={14} />
              <span>Certified HVAC Engineering &amp; Maintenance Services</span>
            </div>
          </div>
          <h1 className="sr-only">
            AC Repair, HVAC Installation &amp; Maintenance AMC in Kathmandu Nepal
          </h1>
        </div>

        <ServicesSection
          services={services}
          serviceOpen={serviceOpen}
          setServiceOpen={setServiceOpen}
          onOpenEnquiry={handleOpenEnquiry}
        />

        <MarqueeSection />

        <ProcessSection />
      </main>

      <Footer business={business} onOpenEnquiry={handleOpenEnquiry} />

      <MobileBottomNav
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
        onOpenEnquiry={handleOpenEnquiry}
      />

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
