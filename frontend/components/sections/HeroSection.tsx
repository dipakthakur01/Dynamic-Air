'use client';

import React, { useRef } from 'react';
import { Plus } from 'lucide-react';
import type { HeroSlide } from '@/types';

interface HeroSectionProps {
  slides: HeroSlide[];
  slide: number;
  onChangeSlide: (index: number) => void;
}

export default function HeroSection({
  slides,
  slide,
  onChangeSlide,
}: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null);
  const currentSlide = slides[slide];

  return (
    <section
      id="home"
      className={`hero hero-slide-${slide}`}
      ref={heroRef}
      aria-roledescription="carousel"
      aria-label="Dynamic Air introduction"
    >
      <div className="hero-images" aria-hidden="true">
        {slides.map((item, index) => (
          <img
            key={item.image}
            className={`hero-image ${index === slide ? 'active' : ''}`}
            src={item.image}
            alt=""
            fetchPriority={index === 0 ? 'high' : 'auto'}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      <div className="hero-shade" />
      <div className="hero-ambient-glow" aria-hidden="true" />
      <div className="hero-vertical-label" aria-hidden="true">
        COMFORT, IN EVERY DETAIL.
      </div>

      <div className="hero-inner container">
        <div className="hero-copy" key={slide}>
          <div className="eyebrow hero-eyebrow light">
            <span className="tiny-star">✳</span>
            {currentSlide.overline}
          </div>
          <h1>
            <span className="sr-only">
              Dynamic Air Solutions Nepal – Climix Air Curtains, Inverter Split AC &amp; Commercial HVAC:{' '}
            </span>
            <span>{currentSlide.line1}</span>
            <span className="accent-text">{currentSlide.line2}</span>
          </h1>
          <p>{currentSlide.description}</p>
          <div className="hero-buttons">
            <a href="#solutions" className="button button-lime">
              Explore our solutions <Plus size={18} />
            </a>
            <a href="#services" className="text-link">
              Discover our services
              <span className="link-line" />
            </a>
          </div>
        </div>

        <div className="hero-caption" key={`caption-${slide}`}>
          <span className="caption-cross">+</span>
          <div>
            <small>{currentSlide.mini}</small>
            <span>{currentSlide.tag}</span>
          </div>
        </div>

        <div className="hero-bottom">
          <a className="scroll-prompt" href="#intro">
            <span className="scroll-line" />
            SCROLL TO EXPLORE
          </a>

          <div className="slide-controls">
            <span className="slide-count">
              0{slide + 1}
              <span>/ 0{slides.length}</span>
            </span>

            <div className="slide-dots">
              {slides.map((item, index) => (
                <button
                  key={item.overline}
                  className={slide === index ? 'active' : ''}
                  aria-label={`Show slide ${index + 1}: ${item.line1} ${item.line2}`}
                  aria-pressed={slide === index}
                  onClick={() => onChangeSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
