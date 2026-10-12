'use client';

import React from 'react';
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
          <div className="service-image-wrap" data-reveal>
            <img
              src="/images/service.webp"
              width="900"
              height="1100"
              alt="Illustration of an HVAC technician inspecting an air conditioner"
              loading="lazy"
            />
            <div className="service-image-shade" />
            <div className="service-photo-caption">
              <span className="service-caption-icon">
                <Wrench size={23} />
              </span>
              <div>
                <small>THOUGHTFUL WORK. LASTING COMFORT.</small>
                <strong>Care is in the details.</strong>
              </div>
            </div>
          </div>

          <div className="service-list">
            {services.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Wrench;
              const expanded = serviceOpen === index;

              return (
                <article
                  className={`service-item ${expanded ? 'expanded' : ''}`}
                  key={item.number}
                >
                  <h3>
                    <button
                      className="service-toggle"
                      aria-expanded={expanded}
                      aria-controls={`service-${index}`}
                      onClick={() =>
                        setServiceOpen(expanded ? null : index)
                      }
                    >
                      <span className="service-number">{item.number}</span>
                      <Icon className="service-type-icon" size={23} />
                      <span>{item.title}</span>
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
                      <button
                        className="text-link lime-link"
                        onClick={() => onOpenEnquiry(item.title)}
                      >
                        Enquire about this service
                        <Plus size={15} />
                      </button>
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
