'use client';

import React from 'react';
import type { SocialLinks as SocialsType } from '@/types';

interface SocialLinksProps {
  socials: SocialsType;
  variant?: 'footer' | 'card' | 'header' | 'default';
  className?: string;
}

export default function SocialLinks({
  socials,
  variant = 'default',
  className = '',
}: SocialLinksProps) {
  const isCard = variant === 'card';

  return (
    <div className={`social-links-group variant-${variant} ${className}`}>
      {socials.facebook && (
        <a
          href={socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn"
          aria-label="Facebook"
        >
          <svg width={isCard ? 15 : 17} height={isCard ? 15 : 17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
          {isCard && <span>Facebook</span>}
        </a>
      )}
      {socials.instagram && (
        <a
          href={socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn"
          aria-label="Instagram"
        >
          <svg width={isCard ? 15 : 17} height={isCard ? 15 : 17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          {isCard && <span>Instagram</span>}
        </a>
      )}
      {socials.tiktok && (
        <a
          href={socials.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn"
          aria-label="TikTok"
        >
          <svg width={isCard ? 15 : 17} height={isCard ? 15 : 17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
          {isCard && <span>TikTok</span>}
        </a>
      )}
    </div>
  );
}
