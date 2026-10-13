'use client';

import React from 'react';
import { MessageCircle, Wind, Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import type { BusinessConfig } from '@/types';
import SocialLinks from '@/components/ui/SocialLinks';

interface ContactSectionProps {
  business: BusinessConfig;
  onOpenEnquiry: () => void;
}

export default function ContactSection({
  business,
  onOpenEnquiry,
}: ContactSectionProps) {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <div data-reveal>
          <div className="section-eyebrow">
            <span className="square-bullet" /> COMPLETE AIR CONDITIONING SOLUTION
          </div>
          <h2>
            Good things start
            <br />
            with a conversation.
          </h2>
          <p>
            Climix air curtains, residential cooling, commercial VRF, or modular cold rooms.
            <br className="desktop-only" /> Call, WhatsApp, or enquire today for quotations and on-site assessments.
          </p>
          <div className="contact-cta-row">
            <button className="button button-dark" onClick={onOpenEnquiry}>
              Make an enquiry <MessageCircle size={18} />
            </button>
            {business.whatsapp && (
              <a
                href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
                  'Hello Dynamic Air Solutions, I would like to enquire about Climix air curtains, air conditioning, and cold room solutions.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-whatsapp"
              >
                <MessageSquare size={18} /> Chat on WhatsApp
              </a>
            )}
          </div>
        </div>

        <div className="contact-wordmark" aria-hidden="true">
          <svg
            className="contact-turbine-icon"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="8" y="4" width="48" height="26" rx="6" fill="#00828a" />
            <g stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="32" y1="8" x2="32" y2="26" />
              <line x1="23" y1="17" x2="41" y2="17" />
              <line x1="25.5" y1="10.5" x2="38.5" y2="23.5" />
              <line x1="25.5" y1="23.5" x2="38.5" y2="10.5" />
            </g>
            <rect x="8" y="34" width="48" height="26" rx="6" fill="#ea9223" />
            <circle cx="32" cy="47" r="4.8" fill="#ffffff" />
            <g stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round">
              <line x1="32" y1="38" x2="32" y2="40.5" />
              <line x1="32" y1="53.5" x2="32" y2="56" />
              <line x1="23" y1="47" x2="25.5" y2="47" />
              <line x1="38.5" y1="47" x2="41" y2="47" />
              <line x1="25.6" y1="40.6" x2="27.4" y2="42.4" />
              <line x1="36.6" y1="51.6" x2="38.4" y2="53.4" />
              <line x1="25.6" y1="53.4" x2="27.4" y2="51.6" />
              <line x1="36.6" y1="42.4" x2="38.4" y2="40.6" />
            </g>
          </svg>
          <span>
            DYNAMIC AIR
            <br />
            SOLUTIONS
          </span>
        </div>
      </div>

      <div className="container business-details">
        {business.phone && (
          <div className="business-badge-link">
            <Phone size={18} />
            <span>
              <strong>Call Us:</strong>{' '}
              <a
                href={`tel:${business.phone.replace(/[^+\d]/g, '')}`}
                className="contact-phone-sublink"
                title={`Call ${business.phone}`}
              >
                {business.phone}
              </a>
              {business.phone2 && (
                <>
                  <span className="contact-phone-slash">/</span>
                  <a
                    href={`tel:${business.phone2.replace(/[^+\d]/g, '')}`}
                    className="contact-phone-sublink"
                    title={`Call ${business.phone2}`}
                  >
                    {business.phone2}
                  </a>
                </>
              )}
            </span>
          </div>
        )}

        {business.email && (
          <a href={`mailto:${business.email}`} className="business-badge-link">
            <Mail size={18} />
            <span>
              <strong>Email:</strong> {business.email}
            </span>
          </a>
        )}

        {business.address && (
          <span className="business-badge-info">
            <MapPin size={18} />
            <span>
              <strong>Location:</strong> {business.address}
            </span>
          </span>
        )}

        {business.openingHours && (
          <span className="business-badge-info">
            <Clock size={18} />
            <span>
              <strong>Hours:</strong> {business.openingHours}
            </span>
          </span>
        )}

        {business.socials && (
          <div className="contact-social-strip">
            <span className="contact-social-label">Follow us:</span>
            <SocialLinks socials={business.socials} variant="card" />
          </div>
        )}
      </div>
    </section>
  );
}
