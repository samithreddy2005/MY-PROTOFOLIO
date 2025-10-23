import React from 'react'; 
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            &copy; {currentYear} <span>K. Samith Reddy</span>. All Rights Reserved.
          </p>
          <p className="footer-tagline"> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
