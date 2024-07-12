import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Welcome!</h1>
        <p>Discover my projects and skills.</p>
        <a href="#portfolio" className="cta-button">Explore</a>
      </div>
    </section>
  );
};

export default Hero;
