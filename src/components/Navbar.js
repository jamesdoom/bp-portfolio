import React, { useState } from 'react';
import './Navbar.css';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <nav className="navbar">
      <a href="#hero" className="wordmark" aria-label="Brian Palmer home">
        <span className="wordmark-mark">BP</span>
        <span className="wordmark-copy">
          <span className="wordmark-name">Brian Palmer</span>
          <span className="wordmark-role">Full-Stack Developer</span>
        </span>
      </a>

      <button className="toggle-button" onClick={toggleNav} aria-label="Toggle navigation" aria-expanded={isNavVisible}>
        <Icon path={mdiMenu} size={1.35} />
      </button>

      <ul className={`nav-links ${isNavVisible ? 'show' : ''}`}>
        <li><a href="#portfolio" onClick={() => setNavVisible(false)}>Work</a></li>
        <li><a href="#about" onClick={() => setNavVisible(false)}>About</a></li>
        <li><a href="#experience" onClick={() => setNavVisible(false)}>Experience</a></li>
        <li><a href="#skills" onClick={() => setNavVisible(false)}>Toolkit</a></li>
        <li><a href="#contact" onClick={() => setNavVisible(false)} className="nav-contact">Let&apos;s talk</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


