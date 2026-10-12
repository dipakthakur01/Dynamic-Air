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
            Climix air curtains, room cooling, or commercial HVAC engineering.
            <br className="desktop-only" /> Call, WhatsApp, or enquire today for quotations and on-site assessments.
          </p>
          <div className="contact-cta-row">
            <button className="button button-dark" onClick={onOpenEnquiry}>
              Make an enquiry <MessageCircle size={18} />
            </button>
            {business.whatsapp && (
              <a
                href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
                  'Hello Dynamic Air Solutions, I would like to enquire about Climix air curtains and cooling solutions.'
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
            <circle
              cx="32"
              cy="32"
              r="30"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.5"
            />
            <g fill="currentColor">
              <path d="M32 32 C32 18, 38 8, 45 8 C48 16, 42 26, 32 32 Z" opacity="0.95" />
              <path d="M32 32 C46 32, 56 38, 56 45 C48 48, 38 42, 32 32 Z" opacity="0.95" />
              <path d="M32 32 C32 46, 26 56, 19 56 C16 48, 22 38, 32 32 Z" opacity="0.95" />
              <path d="M32 32 C18 32, 8 26, 8 19 C16 16, 26 22, 32 32 Z" opacity="0.95" />
            </g>
            <circle cx="32" cy="32" r="5" fill="#f59e0b" />
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
          <a
            href={`tel:${business.phone.replace(/[^+\d]/g, '')}`}
            className="business-badge-link"
          >
            <Phone size={18} />
            <span>
              <strong>Call Us:</strong> {business.phone}
            </span>
          </a>
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
