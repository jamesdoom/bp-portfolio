import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Brian Palmer. All rights reserved.</p>
        <a href="#top" onClick={scrollToTop} className="back-to-top">Back to top</a>
      </div>
    </footer>
  );
};

export default Footer;
