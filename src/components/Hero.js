import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-kicker"><span />Tampa-based full-stack developer</p>
          <h1>Useful software,<br /><em>built with intent.</em></h1>
          <p className="hero-lede">I build polished, data-heavy web applications—from NASA discovery tools and API dashboards to practical production workflows.</p>
          <div className="hero-actions">
            <a href="#portfolio" className="button button-primary">Explore selected work <span aria-hidden="true">↓</span></a>
            <a href="https://github.com/jamesdoom" target="_blank" rel="noopener noreferrer" className="button button-secondary">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-aside" aria-label="Developer profile">
          <div className="hero-monogram">BP</div>
          <div><span>Current focus</span><strong>Full-stack products</strong></div>
          <div><span>Core stack</span><strong>React · TypeScript · Node</strong></div>
          <div><span>Approach</span><strong>Practical · Tested · Accessible</strong></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
