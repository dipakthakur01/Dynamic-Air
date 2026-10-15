import React from 'react';
import { Wind, Snowflake, Building2, Box, Wrench, Sparkles } from 'lucide-react';

export default function ExpertiseStrip() {
  return (
    <div className="expertise-strip">
      <div className="container strip-inner">
        <span>ENGINEERED AIR &amp; COOLING</span>
        <div>
          <Wind size={18} />
          Climix Air Curtains
        </div>
        <div>
          <Snowflake size={18} />
          Residential Split AC
        </div>
        <div>
          <Building2 size={18} />
          Commercial VRF &amp; Cassette
        </div>
        <div>
          <Box size={18} />
          Modular Cold Rooms
        </div>
        <div>
          <Wrench size={18} />
          HVAC Services &amp; AMC
        </div>
        <div>
          <Sparkles size={18} />
          Air Purifiers
        </div>
      </div>
    </div>
  );
}
