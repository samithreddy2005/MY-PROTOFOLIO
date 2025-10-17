import React from 'react';
import { FaHeart, FaCoffee } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            &copy; {currentYear} <span>Your Name</span>. All Rights Reserved.
          </p>
          <p className="footer-tagline">
            Built with <FaHeart className="heart-icon" /> and lots of <FaCoffee className="coffee-icon" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
