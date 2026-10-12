'use client';

import React from 'react';
import { Plus, Minus } from 'lucide-react';
import type { FaqItem } from '@/types';

interface FaqSectionProps {
  faqs: FaqItem[];
  faqOpen: number | null;
  setFaqOpen: React.Dispatch<React.SetStateAction<number | null>>;
  onOpenEnquiry: (topic?: string) => void;
}

export default function FaqSection({
  faqs,
  faqOpen,
  setFaqOpen,
  onOpenEnquiry,
}: FaqSectionProps) {
  return (
    <section id="faq" className="faq-section section-pad container">
      <div className="faq-grid">
        <div data-reveal className="faq-heading">
          <div className="section-eyebrow">
            <span className="square-bullet" /> GOOD TO KNOW
          </div>
          <h2>
            A few things
            <br /> <span className="muted-text">you might ask.</span>
          </h2>
          <p>
            Have something else in mind?
            <br />
            We’re happy to help you figure it out.
          </p>
          <button
            className="text-link dark-link"
            onClick={() => onOpenEnquiry('General question')}
          >
            Ask us a question <Plus size={16} />
          </button>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <article
              className={`faq-item ${faqOpen === index ? 'open' : ''}`}
              key={item.question}
            >
              <h3>
                <button
                  className="faq-question"
                  aria-expanded={faqOpen === index}
                  aria-controls={`faq-${index}`}
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                >
                  {item.question}
                  {faqOpen === index ? <Minus size={18} /> : <Plus size={18} />}
                </button>
              </h3>
              <div id={`faq-${index}`} hidden={faqOpen !== index}>
                <p className="faq-answer">{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
