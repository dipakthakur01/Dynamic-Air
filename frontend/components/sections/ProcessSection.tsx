import React from 'react';

const processSteps = [
  {
    n: '01',
    title: 'Tell us about your space',
    text: 'Share what you need, where you need it and what matters most to you.',
  },
  {
    n: '02',
    title: 'Explore the right options',
    text: 'Discuss suitable equipment, the scope of work and a quotation.',
  },
  {
    n: '03',
    title: 'Get ready for better living',
    text: 'Agree the details, arrange the work and know how to get support.',
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section section-pad">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <div className="section-eyebrow">
              <span className="square-bullet" /> SIMPLE FROM THE START
            </div>
            <h2>
              Let’s make your
              <br /> <span className="muted-text">next step easy.</span>
            </h2>
          </div>
        </div>

        <div className="process-grid">
          {processSteps.map((item) => (
            <article key={item.n} data-reveal>
              <span className="process-number">
                {item.n}
                <span />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
