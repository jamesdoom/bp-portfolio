import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-kicker">Tampa-based developer</p>
        <h1>Brian Palmer</h1>
        <p>Full-stack JavaScript developer building practical, data-driven web applications.</p>
        <a href="#portfolio" className="cta-button">View Projects</a>
      </div>
    </section>
  );
};

export default Hero;
