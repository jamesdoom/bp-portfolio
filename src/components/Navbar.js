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

      <button className="toggle-button" onClick={toggleNav} aria-label="Toggle navigation">
        <Icon path={mdiMenu} size={1.35} />
      </button>

      <ul className={`nav-links ${isNavVisible ? 'show' : ''}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


