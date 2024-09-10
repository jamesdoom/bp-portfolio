import React, { useState } from 'react';
import './Navbar.css';
import Icon from '@mdi/react';
import { mdiFolderMusicOutline, mdiMenu } from '@mdi/js'; // Import mdiMenu for the hamburger icon

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  // Function to toggle the navigation menu
  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Icon path={mdiFolderMusicOutline} size={1} className="logo-icon" />
        <span className="logo-text">Brian Palmer</span>
      </div>

      <button className="toggle-button" onClick={toggleNav}>
        <Icon path={mdiMenu} size={1.5} /> {/* Hamburger Icon */}
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


