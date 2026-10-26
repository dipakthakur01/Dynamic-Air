'use client';

import React from 'react';
import { MessageCircle, Wind, Mail, Phone, MapPin, Clock, MessageSquare, ExternalLink } from 'lucide-react';
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
            <button className="button button-dark" onClick={() => onOpenEnquiry()}>
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
          <a
            href={business.mapsUrl || 'https://maps.google.com/?cid=2143714271384015274'}
            target="_blank"
            rel="noopener noreferrer"
            className="business-badge-link"
            title="Open Dynamic Air Solutions in Google Maps"
          >
            <MapPin size={18} />
            <span>
              <strong>Location:</strong> {business.address}
            </span>
          </a>
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

      {/* Interactive Google Map Section */}
      <div className="container contact-map-wrapper">
        <div className="contact-map-card">
          <div className="contact-map-header">
            <div className="contact-map-header-left">
              <span className="map-badge">
                <MapPin size={15} /> VISIT OUR OFFICE & WAREHOUSE
              </span>
              <h3 className="map-title">Dynamic Air Solutions Pvt. Ltd.</h3>
              <p className="map-subtitle">
                Kathmandu, Nepal &middot; Authorized Climix Engineering, Sales & Service Center
              </p>
            </div>
            <a
              href={business.mapsUrl || 'https://maps.google.com/?cid=2143714271384015274'}
              target="_blank"
              rel="noopener noreferrer"
              className="map-directions-btn"
              title="Open Dynamic Air Solutions in Google Maps"
            >
              <span>Get Directions</span>
              <ExternalLink size={15} />
            </a>
          </div>
          <div className="contact-map-frame-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.975939973865!2d85.30396019999999!3d27.6871385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19767fd824a1%3A0x1dbfef658cc711aa!2sDynamic%20Air%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1792977855296!5m2!1sen!2snp"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Dynamic Air Solutions Pvt Ltd Google Maps Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
