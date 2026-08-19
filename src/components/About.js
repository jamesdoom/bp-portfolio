import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="section-heading">
        <span>How I work</span>
        <h2>Practical experience,<br />translated into software.</h2>
      </div>
      <div className="about-content">
        <div className="about-portrait"><img src="/brian.png" alt="Brian Palmer" className="about-image" /><span>Tampa, Florida</span></div>
        <div className="about-copy">
          <p className="about-lead">Operations experience taught me to spot inefficient workflows. Software development lets me rebuild them.</p>
          <p>I&apos;ve spent my career solving practical problems—managing business systems, guiding technology migrations, and becoming the person people call when a process or device stops working.</p>
          <p>That perspective now shapes the products I build: clear interfaces, dependable data, sensible failure states, and details that respect the person using the software.</p>
          <div className="about-principles">
            <div><strong>01</strong><span>Start with the real problem</span></div>
            <div><strong>02</strong><span>Make complexity feel simple</span></div>
            <div><strong>03</strong><span>Test the complete experience</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
