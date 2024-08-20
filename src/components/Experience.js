import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
        <div className="experience-content">
          <div className="job">
            <h3>Medi-File of Tampa - Office Manager (2011-present)</h3>
            <ul>
              <li>Manage all aspects of IT, including networking and maintaining office terminals.</li>
              <li>Initiated external database migration to Benchmark, improving reliability and cutting costs.</li>
            </ul>
          </div>
          <div className="job">
            <h3>Buffalo Wild Wings - Assistant General Manager (2004-2007, 2010-2011)</h3>
            <ul>
              <li>Oversaw hiring, training, and termination of employees.</li>
              <li>Managed data, including inventory, payroll, and purchasing.</li>
              <li>Successfully implemented new point of sale terminals and printers at multiple locations.</li>
              <li>Assisted in migrating local inventory data to a franchise-wide cloud database.</li>
            </ul>
          </div>
          <div className="job">
            <h3>Danny&apos;s Deep Creek Pub - General Manager (2007-2010)</h3>
            <ul>
              <li>Introduced real-time sales and inventory tracking with Aloha terminals.</li>
              <li>Improved efficiency by optimizing labor utilization based on accurate sales data.</li>
            </ul>
          </div>
          <div className="job">
            <h3>Assurant Group - LPI Processor (2002-2003)</h3>
            <ul>
              <li>Communicated with insurance representatives daily to verify dates of coverage on homeowners&apos; insurance policies.</li>
            </ul>
          </div>
        </div>
    </section>
  );
};

export default Experience;

