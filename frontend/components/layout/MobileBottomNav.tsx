'use client';

import React from 'react';
import { Home, Wind, Wrench, Send, Menu } from 'lucide-react';

interface MobileBottomNavProps {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onOpenEnquiry: () => void;
}

export default function MobileBottomNav({
  menuOpen,
  onToggleMenu,
  onOpenEnquiry,
}: MobileBottomNavProps) {
  return (
    <nav
      className="mobile-bottom-nav"
      aria-label="Mobile Bottom App Navigation"
    >
      <div className="mobile-bottom-nav-inner">
        <a href="#home" className="mobile-nav-tab" aria-label="Home">
          <span className="mobile-nav-icon">
            <Home size={20} />
          </span>
          <span className="mobile-nav-label">Home</span>
        </a>

        <a href="#solutions" className="mobile-nav-tab" aria-label="Solutions">
          <span className="mobile-nav-icon">
            <Wind size={20} />
          </span>
          <span className="mobile-nav-label">Solutions</span>
        </a>

        {/* Center Primary Action: Enquire */}
        <button
          type="button"
          onClick={onOpenEnquiry}
          className="mobile-nav-tab mobile-nav-center-action"
          aria-label="Make an enquiry"
        >
          <span className="center-action-glow" />
          <span className="center-action-icon">
            <Send size={18} />
          </span>
          <span className="mobile-nav-label center-label">Enquire</span>
        </button>

        <a href="#services" className="mobile-nav-tab" aria-label="HVAC Services">
          <span className="mobile-nav-icon">
            <Wrench size={20} />
          </span>
          <span className="mobile-nav-label">Services</span>
        </a>

        <button
          type="button"
          onClick={onToggleMenu}
          className={`mobile-nav-tab ${menuOpen ? 'is-active' : ''}`}
          aria-label={menuOpen ? 'Close Navigation Drawer' : 'Open Navigation Drawer'}
          aria-expanded={menuOpen}
        >
          <span className="mobile-nav-icon">
            <Menu size={20} />
          </span>
          <span className="mobile-nav-label">Menu</span>
        </button>
      </div>
    </nav>
  );
}
