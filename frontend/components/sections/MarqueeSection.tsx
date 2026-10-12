import React from 'react';

export default function MarqueeSection() {
  return (
    <section
      className="marquee-section"
      aria-label="Choose well. Live comfortably. Keep it running."
    >
      <div className="marquee-track" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <span key={i}>
            CHOOSE WELL <span className="marquee-star">✳</span> LIVE
            COMFORTABLY <span className="marquee-star">✳</span> KEEP IT RUNNING{' '}
            <span className="marquee-star">✳</span>
          </span>
        ))}
      </div>
    </section>
  );
}
