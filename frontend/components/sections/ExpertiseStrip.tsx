import React from 'react';
import { Wind, Snowflake, Wrench, Building2 } from 'lucide-react';

export default function ExpertiseStrip() {
  return (
    <div className="expertise-strip">
      <div className="container strip-inner">
        <span>ENGINEERED AIR SOLUTIONS</span>
        <div>
          <Wind size={18} />
          Climix Air Curtains
        </div>
        <div>
          <Snowflake size={18} />
          Inverter Split AC
        </div>
        <div>
          <Wrench size={18} />
          HVAC Installation &amp; AMC
        </div>
        <div>
          <Building2 size={18} />
          Commercial VRF Systems
        </div>
      </div>
    </div>
  );
}
