'use client';

import React from 'react';
import { MessageCircle, House, Settings2, Wrench, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  onOpenEnquiry: (topic?: string) => void;
}

const values = [
  {
    icon: House,
    number: '01 /',
    title: 'Your space comes first.',
    text: 'A bedroom, a busy shop, a whole office. We start with how you use your space.',
  },
  {
    icon: Settings2,
    number: '02 /',
    title: 'Options, made clearer.',
    text: 'Understand the fit, the features and the practical details before you decide.',
  },
  {
    icon: Wrench,
    number: '03 /',
    title: 'Setup, considered.',
    text: 'Good planning and careful installation help your equipment work as it should.',
  },
  {
    icon: ShieldCheck,
    number: '04 /',
    title: 'Support that continues.',
    text: 'Maintenance and service enquiries for the equipment you use every day.',
  },
];

export default function AboutSection({ onOpenEnquiry }: AboutSectionProps) {
  return (
    <section id="about" className="about-section section-pad container">
      <div className="about-grid">
        <div className="about-heading" data-reveal>
          <div className="section-eyebrow">
            <span className="square-bullet" /> THE DYNAMIC AIR APPROACH
          </div>
          <h2>
            A little guidance.
            <br />
            A lot of
            <br /> <span className="muted-text">peace of mind.</span>
          </h2>
          <p>
            Technology should make life easier. So should choosing it. We focus
            on your needs, your space and the support that follows.
          </p>
          <button
            className="button button-dark"
            onClick={() => onOpenEnquiry('Discuss my requirements')}
          >
            Tell us what you need <MessageCircle size={17} />
          </button>
        </div>

        <div className="values-grid">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.number} data-reveal>
                <span className="value-icon">
                  <Icon size={26} />
                </span>
                <span className="value-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
