'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { business, faqs } from '@/lib/site-content';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import AboutSection from '@/components/sections/AboutSection';
import ProcessSection from '@/components/sections/ProcessSection';
import FaqSection from '@/components/sections/FaqSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import EnquiryModal from '@/components/modals/EnquiryModal';

export default function AboutClient() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [interest, setInterest] = useState('About Dynamic Air Solutions');
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
        : 'About Dynamic Air Solutions';
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
    <div className="about-page-wrapper solution-showcase-wrapper">
      <Header
        business={business}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenEnquiry={handleOpenEnquiry}
      />

      <main className="about-page-main" id="main">
        <div className="container" style={{ paddingTop: '16px', paddingBottom: '0' }}>
          <div className="solution-page-header-top" style={{ marginBottom: '8px' }}>
            <Link href="/" className="solution-back-btn">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
            <div className="solution-breadcrumb-pill">
              <ShieldCheck size={14} />
              <span>Authorized Climix Air Curtains &amp; Climate Solutions Partner</span>
            </div>
          </div>
        </div>

        <AboutSection onOpenEnquiry={handleOpenEnquiry} />

        <MarqueeSection />

        <ProcessSection />

        <FaqSection
          faqs={faqs}
          faqOpen={faqOpen}
          setFaqOpen={setFaqOpen}
          onOpenEnquiry={handleOpenEnquiry}
        />
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
