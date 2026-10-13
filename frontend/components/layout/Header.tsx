'use client';

import React, { useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  MessageSquare,
  FileText,
  Smartphone,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import type { BusinessConfig } from '@/types';
import SocialLinks from '../ui/SocialLinks';
import ThemeToggle from '../ui/ThemeToggle';

interface HeaderProps {
  business: BusinessConfig;
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenEnquiry: (topic?: string) => void;
  installPrompt?: any;
  onInstallApp?: () => void;
}

const detailedNavLinks = [
  {
    num: '01',
    label: 'Air Curtains & Cooling Solutions',
    id: 'solutions',
    desc: 'Climix Air Curtains, Split AC, VRF & Cold Rooms',
  },
  {
    num: '02',
    label: 'HVAC Engineering Services',
    id: 'services',
    desc: 'Installation, Heat Load & Maintenance AMC',
  },
  {
    num: '03',
    label: 'About Dynamic Air',
    id: 'about',
    desc: 'Authorized Climix Distributor in Nepal',
  },
  {
    num: '04',
    label: '3-Step Working Process',
    id: 'process',
    desc: 'Site Survey, Sizing & Deployment',
  },
  {
    num: '05',
    label: 'Frequently Asked Questions',
    id: 'faq',
    desc: 'Door Dimensions, Sizing & Power Savings',
  },
  {
    num: '06',
    label: 'Contact & Kathmandu Office',
    id: 'contact',
    desc: 'Direct Phone, WhatsApp & Site Visits',
  },
];

export default function Header({
  business,
  scrolled,
  menuOpen,
  setMenuOpen,
  theme,
  onToggleTheme,
  onOpenEnquiry,
  installPrompt,
  onInstallApp,
}: HeaderProps) {
  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, setMenuOpen]);

  // Prevent background scroll when menu is open on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('nav-drawer-open');
    } else {
      document.body.classList.remove('nav-drawer-open');
    }
    return () => {
      document.body.classList.remove('nav-drawer-open');
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="header-inner">
          {/* Brand Logo */}
          <a
            className="brand"
            href="#home"
            aria-label="Dynamic Air Solutions Pvt. Ltd. home"
            onClick={() => setMenuOpen(false)}
          >
            <div className="header-brand-badge">
              <div className="brand-emblem-rotator" aria-hidden="true">
                <img
                  src="/images/emblem-rotating.png"
                  alt="Dynamic Air rotating emblem"
                  width={44}
                  height={44}
                  className="brand-emblem-img"
                />
              </div>
              <img
                src="/images/dynamic-air-text.png"
                alt="Dynamic Air Solutions Pvt. Ltd. - Complete Air Conditioning Solution"
                width={175}
                height={44}
                className="brand-logo-text"
              />
            </div>
          </a>

          {/* Desktop Quick Nav */}
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#solutions">Solutions</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            {/* Direct Phone Link (Combined Single Desktop Pill) */}
            {business.phone && (
              <div className="header-phone-link desktop-only">
                <Phone size={13} />
                <div className="header-phone-numbers-group">
                  <a
                    href={`tel:${business.phone.replace(/[^+\d]/g, '')}`}
                    className="header-phone-sublink"
                    title={`Call ${business.phone}`}
                  >
                    {business.phone}
                  </a>
                  {business.phone2 && (
                    <>
                      <span className="header-phone-slash">/</span>
                      <a
                        href={`tel:${business.phone2.replace(/[^+\d]/g, '')}`}
                        className="header-phone-sublink"
                        title={`Call ${business.phone2}`}
                      >
                        {business.phone2}
                      </a>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Direct Phone Call Button (Mobile Circular Button) */}
            {business.phone && (
              <a
                href={`tel:${business.phone.replace(/[^+\d]/g, '')}`}
                className="header-phone-btn-mobile mobile-only"
                aria-label={`Call Dynamic Air: ${business.phone}`}
                title={`Call ${business.phone}`}
              >
                <Phone size={17} />
              </a>
            )}

            {/* Quick Theme Toggle in Header Bar */}
            <ThemeToggle
              theme={theme}
              onToggle={onToggleTheme}
              variant="icon"
              className="header-theme-toggle"
            />

            {/* Make an Enquiry CTA */}
            <button
              className="button header-cta"
              onClick={() => onOpenEnquiry()}
            >
              Make an enquiry <span className="button-dot" />
            </button>

            {/* Mobile Hamburger Icon Button (Icon Only) */}
            <button
              className={`menu-toggle-btn ${menuOpen ? 'is-active' : ''}`}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="collapsible-navigation"
              onClick={() => setMenuOpen((value) => !value)}
              id="menu-trigger-button"
            >
              <span className="menu-btn-icon-wrap">
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay */}
      <div
        className={`collapsible-nav-backdrop ${menuOpen ? 'is-visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Collapsible Navigation Bar Drawer */}
      <aside
        id="collapsible-navigation"
        className={`collapsible-nav-drawer ${menuOpen ? 'is-open' : ''}`}
        aria-label="Expanded Navigation Menu"
        aria-hidden={!menuOpen}
      >
        <div className="drawer-inner">
          {/* Drawer Top Header */}
          <div className="drawer-header">
            <div className="drawer-brand-block">
              <span className="drawer-badge">
                <ShieldCheck size={14} /> AUTHORIZED CLIMIX DISTRIBUTOR
              </span>
              <span className="drawer-title">Navigation &amp; Controls</span>
            </div>
            <button
              className="drawer-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Theme Controller Segmented Panel */}
          <div className="drawer-theme-box">
            <ThemeToggle
              theme={theme}
              onToggle={onToggleTheme}
              variant="full"
            />
          </div>

          {/* Navigation Links */}
          <nav className="drawer-nav-list" aria-label="Detailed sections">
            <span className="drawer-nav-caption">SECTIONS &amp; PAGES</span>
            {detailedNavLinks.map(({ num, label, id, desc }) => (
              <a
                key={id}
                href={`#${id}`}
                className="drawer-nav-item"
                onClick={() => setMenuOpen(false)}
              >
                <span className="drawer-item-num">{num}</span>
                <span className="drawer-item-content">
                  <span className="drawer-item-label">{label}</span>
                  <span className="drawer-item-desc">{desc}</span>
                </span>
                <ChevronRight size={16} className="drawer-item-arrow" />
              </a>
            ))}
          </nav>

          {/* PWA App Install Action */}
          <div className="drawer-pwa-card">
            <div className="pwa-card-header">
              <span className="pwa-card-icon">
                <Smartphone size={18} />
              </span>
              <div className="pwa-card-text">
                <strong>Dynamic Air Mobile App</strong>
                <small>Install PWA for fast, offline-ready access</small>
              </div>
            </div>
            <button
              type="button"
              className="pwa-install-action-btn"
              onClick={() => {
                if (onInstallApp) onInstallApp();
              }}
            >
              {installPrompt ? 'Install App Now' : 'Add to Home Screen'}
              <CheckCircle2 size={15} />
            </button>
          </div>

          {/* Quick Contact & Document Actions */}
          <div className="drawer-quick-actions">
            <span className="drawer-nav-caption">DIRECT ASSISTANCE</span>
            <div className="drawer-actions-grid">
              {business.phone && (
                <div className="drawer-action-chip chip-phone">
                  <Phone size={14} />
                  <span>Call: </span>
                  <div className="header-phone-numbers-group">
                    <a
                      href={`tel:${business.phone.replace(/[^+\d]/g, '')}`}
                      className="drawer-phone-sublink"
                    >
                      {business.phone}
                    </a>
                    {business.phone2 && (
                      <>
                        <span className="drawer-phone-slash">/</span>
                        <a
                          href={`tel:${business.phone2.replace(/[^+\d]/g, '')}`}
                          className="drawer-phone-sublink"
                        >
                          {business.phone2}
                        </a>
                      </>
                    )}
                  </div>
                </div>
              )}
              {business.whatsapp && (
                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="drawer-action-chip chip-whatsapp"
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp Us</span>
                </a>
              )}
              <a
                href="/docs/climix-air-curtain-catalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-action-chip chip-catalog"
              >
                <FileText size={14} />
                <span>Climix Catalog (PDF)</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          {business.socials && (
            <div className="drawer-socials">
              <span className="drawer-nav-caption">FOLLOW OUR WORK</span>
              <SocialLinks socials={business.socials} variant="header" />
            </div>
          )}

          {/* Primary CTA Button */}
          <div className="drawer-cta-wrap">
            <button
              className="button button-lime drawer-enquiry-btn"
              onClick={() => {
                setMenuOpen(false);
                onOpenEnquiry();
              }}
            >
              Make an enquiry &rarr;
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
