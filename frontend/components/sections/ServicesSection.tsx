'use client';

import React, { useState, useEffect } from 'react';
import { Snowflake, Wrench, Settings2, Wind, Plus, Minus, Check } from 'lucide-react';
import type { Service } from '@/types';

const iconMap = {
  snowflake: Snowflake,
  wrench: Wrench,
  settings: Settings2,
  wind: Wind,
};

interface ServicesSectionProps {
  services: Service[];
  serviceOpen: number | null;
  setServiceOpen: React.Dispatch<React.SetStateAction<number | null>>;
  onOpenEnquiry: (topic?: string) => void;
}

export default function ServicesSection({
  services,
  serviceOpen,
  setServiceOpen,
  onOpenEnquiry,
}: ServicesSectionProps) {
  // Track which service image/details are actively highlighted in the visual showcase
  const [activePreviewIndex, setActivePreviewIndex] = useState<number>(
    serviceOpen !== null && serviceOpen >= 0 && serviceOpen < services.length ? serviceOpen : 0
  );

  // Synchronize when serviceOpen prop changes externally
  useEffect(() => {
    if (serviceOpen !== null && serviceOpen >= 0 && serviceOpen < services.length) {
      setActivePreviewIndex(serviceOpen);
    }
  }, [serviceOpen, services.length]);

  const activeIndex =
    activePreviewIndex >= 0 && activePreviewIndex < services.length ? activePreviewIndex : 0;
  const activeItem = services[activeIndex] || services[0];
  const ActiveIcon = iconMap[activeItem?.icon as keyof typeof iconMap] || Wrench;

  const handleSelectService = (index: number) => {
    setActivePreviewIndex(index);
    setServiceOpen((prev) => (prev === index ? null : index));
  };

  const handleIndicatorClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePreviewIndex(index);
    setServiceOpen(index);
  };

  return (
    <section id="services" className="services-section section-pad">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <div className="section-eyebrow light">
              <span className="square-bullet" /> MORE THAN A PURCHASE
            </div>
            <h2>
              Great products.
              <br />
              <span className="accent-text">Even better care.</span>
            </h2>
          </div>
          <p>
            From the first conversation to the next service.
            <br className="desktop-only" /> We’re here for the whole journey.
          </p>
        </div>

        <div className="services-layout">
          {/* Left Side: Interactive Dynamic Image Showcase */}
          <div className="service-image-wrap" data-reveal>
            {/* Top Eyebrow Badge */}
            <div className="service-image-badge">
              <span className="service-counter-dot" />
              <span>
                Service {activeItem.number} / {String(services.length).padStart(2, '0')}
              </span>
            </div>

            {/* Top Interactive Indicator Pills */}
            <div
              className="service-pills-indicator"
              role="tablist"
              aria-label="Service showcase selection"
            >
              {services.map((item, idx) => (
                <button
                  key={item.number}
                  type="button"
                  className={`service-pill-dot ${idx === activeIndex ? 'active' : ''}`}
                  onClick={(e) => handleIndicatorClick(idx, e)}
                  title={`View ${item.title}`}
                  aria-label={`Showcase ${item.title}`}
                  aria-selected={idx === activeIndex}
                />
              ))}
            </div>

            {/* Stacked Images for Smooth Crossfade */}
            {services.map((item, index) => {
              const isCurrent = index === activeIndex;
              return (
                <div
                  key={item.number}
                  className={`service-image-layer ${isCurrent ? 'active' : ''}`}
                  aria-hidden={!isCurrent}
                >
                  <img
                    src={item.image || '/images/service.webp'}
                    width="900"
                    height="1100"
                    alt={item.imageAlt || item.title}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="service-image-shade" />
                </div>
              );
            })}

            {/* Bottom Caption Card */}
            <div className="service-photo-caption" key={activeIndex}>
              <span className="service-caption-icon">
                <ActiveIcon size={23} />
              </span>
              <div className="service-caption-content">
                <small>{activeItem.badgeLabel || 'THOUGHTFUL WORK. LASTING COMFORT.'}</small>
                <strong>{activeItem.tagline || activeItem.title}</strong>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Service List */}
          <div className="service-list">
            {services.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Wrench;
              const expanded = serviceOpen === index;
              const isSelected = activeIndex === index;

              return (
                <article
                  className={`service-item ${expanded ? 'expanded' : ''} ${
                    isSelected ? 'selected' : ''
                  }`}
                  key={item.number}
                >
                  <h3>
                    <button
                      className="service-toggle"
                      aria-expanded={expanded}
                      aria-controls={`service-${index}`}
                      onClick={() => handleSelectService(index)}
                    >
                      <span className="service-number">{item.number}</span>
                      <Icon className="service-type-icon" size={23} />
                      <span className="service-title-text">{item.title}</span>
                      <span className="service-expand">
                        {expanded ? <Minus size={19} /> : <Plus size={19} />}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`service-${index}`}
                    className="service-expandable"
                    hidden={!expanded}
                  >
                    <div>
                      <p className="service-desc">{item.description}</p>
                      <ul className="service-points">
                        {item.points.map((point) => (
                          <li key={point} className="service-point-item">
                            <Check size={14} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="service-actions-row">
                        <button
                          type="button"
                          className="text-link lime-link"
                          onClick={() => onOpenEnquiry(item.title)}
                        >
                          Enquire about this service
                          <Plus size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
