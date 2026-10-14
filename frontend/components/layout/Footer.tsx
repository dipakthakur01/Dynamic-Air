'use client';

import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import type { BusinessConfig } from '@/types';
import SocialLinks from '@/components/ui/SocialLinks';

interface FooterProps {
  business: BusinessConfig;
  onOpenEnquiry: () => void;
}

// Encrypted developer attribution credentials
const _ZT_SIG_ENC = 'aHR0cHM6Ly93d3cuem9ydmVudGVjaC5jb20v'; // https://www.zorventech.com/
const _ZT_NAME_ENC = 'Wm9ydmVuIFRlY2g='; // Zorven Tech

const decodeSignature = (enc: string): string => {
  if (typeof atob === 'function') {
    return atob(enc);
  }
  return Buffer.from(enc, 'base64').toString('utf-8');
};

export default function Footer({ business, onOpenEnquiry }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const devUrl = decodeSignature(_ZT_SIG_ENC);
  const devName = decodeSignature(_ZT_NAME_ENC);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-column">
            <a href="#home" className="footer-brand" aria-label="Dynamic Air Solutions Pvt. Ltd.">
              <div className="footer-logo-wrap">
                <img
                  src="/images/dynamic-air-logo.png"
                  alt={business.name}
                  width={320}
                  height={72}
                  className="footer-logo-img footer-logo-light"
                />
                <img
                  src="/images/footer-logo-transparent.png"
                  alt={business.name}
                  width={320}
                  height={72}
                  className="footer-logo-img footer-logo-dark"
                />
              </div>
            </a>
            <p className="footer-tagline">
              {business.tagline} &middot; Authorized Climix Air Curtains
            </p>
            <p className="footer-description">
              Authorized distributor of Climix Q Series cross-flow air curtains, residential split air conditioning, commercial 100% Inverter VRF systems, and modular walk-in cold rooms across Nepal.
            </p>

            {business.socials && (
              <div className="footer-social-wrap">
                <span className="footer-micro-title">CONNECT ON SOCIAL MEDIA</span>
                <SocialLinks socials={business.socials} variant="footer" />
              </div>
            )}
          </div>

          <nav aria-label="Footer solutions">
            <span>SOLUTIONS &amp; PRODUCTS</span>
            <a href="#solutions">Climix Air Curtains</a>
            <a href="#solutions">Residential Split AC</a>
            <a href="#solutions">VRF Systems (4 HP Mini to Commercial)</a>
            <a href="#solutions">Modular Cold Rooms</a>
            <a href="#solutions">Smart HEPA Air Purifiers</a>
            <a href="/docs/climix-air-curtain-catalog.pdf" target="_blank" rel="noopener noreferrer">
              Download Climix Catalog (PDF)
            </a>
          </nav>

          <nav aria-label="Footer services">
            <span>ENGINEERING SERVICES</span>
            <a href="#services">Air Curtain Installation</a>
            <a href="#services">Heat Load Assessment</a>
            <a href="#services">Copper Piping &amp; Vacuum Setup</a>
            <a href="#services">Gas Charging &amp; Coil Servicing</a>
            <a href="#services">Annual Maintenance AMC</a>
          </nav>

          <nav aria-label="Footer contact">
            <span>DIRECT CONTACT</span>
            {business.phone && (
              <div className="footer-contact-link footer-contact-phone-item">
                <Phone size={14} />
                <span>Call: </span>
                <a
                  href={`tel:${business.phone.replace(/[^+\d]/g, '')}`}
                  className="footer-phone-sublink"
                  title={`Call ${business.phone}`}
                >
                  {business.phone}
                </a>
                {business.phone2 && (
                  <>
                    <span className="footer-phone-slash">/</span>
                    <a
                      href={`tel:${business.phone2.replace(/[^+\d]/g, '')}`}
                      className="footer-phone-sublink"
                      title={`Call ${business.phone2}`}
                    >
                      {business.phone2}
                    </a>
                  </>
                )}
              </div>
            )}
            {business.whatsapp && (
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                <MessageSquare size={14} /> WhatsApp: {business.whatsapp.replace(/^977/, '')}
              </a>
            )}
            {business.email && (
              <a href={`mailto:${business.email}`} className="footer-contact-link">
                <Mail size={14} /> {business.email}
              </a>
            )}
            <button onClick={onOpenEnquiry} className="footer-enquiry-btn">
              Make an enquiry &rarr;
            </button>
            <span className="footer-domain">dynamicair.com.np</span>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {currentYear} {business.name}. All rights reserved.
          </span>

          <span className="footer-credits">
            Developed by{' '}
            <a
              href={devUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="dev-credit-link"
              title="Visit Zorven Tech"
            >
              <span className="dev-credit-brand">{devName}</span>
            </a>
          </span>

          <span>
            Climix Air Curtains &middot; Air Conditioning &middot; Cold Rooms &middot; HVAC AMC
          </span>
        </div>
      </div>
    </footer>
  );
}
