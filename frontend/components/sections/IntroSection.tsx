import React from 'react';
import { Check } from 'lucide-react';

export default function IntroSection() {
  return (
    <section id="intro" className="intro-section container">
      <div className="section-eyebrow" data-reveal>
        <span className="square-bullet" /> COMPLETE AIR CONDITIONING SOLUTION
      </div>
      <div className="intro-grid">
        <h2 data-reveal>
          Your space.
          <br />
          Your comfort.
          <br /> <span className="muted-text">Our engineering.</span>
        </h2>
        <div className="intro-right" data-reveal>
          <p className="intro-statement">
            The right climate engineering protects your space, lowers energy bills, and ensures uninterrupted comfort.
          </p>
          <p>
            At Dynamic Air Solutions Pvt. Ltd., we supply authorized Climix Q Series cross-flow air curtains, residential split air conditioning, commercial VRF &amp; cassette systems, and modular walk-in cold rooms. From doorway hygiene sizing to centralized commercial HVAC engineering and long-term maintenance, we deliver reliable climate solutions across Nepal.
          </p>
          <div className="intro-principles">
            <span>
              <Check size={15} />
              Climix Authorized Distributor
            </span>
            <span>
              <Check size={15} />
              Residential &amp; Commercial VRF
            </span>
            <span>
              <Check size={15} />
              Chiller &amp; Freezer Cold Rooms
            </span>
            <span>
              <Check size={15} />
              Professional After-Sales &amp; AMC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
