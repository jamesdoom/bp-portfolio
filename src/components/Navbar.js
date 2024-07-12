import React from 'react';
import './Navbar.css';
import Icon from '@mdi/react';
import { mdiFolderMusicOutline } from '@mdi/js';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Icon path={mdiFolderMusicOutline} size={1} className="logo-icon" />
        <span className="logo-text">Brian Palmer</span>
      </div>

      <ul className="nav-links">
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



