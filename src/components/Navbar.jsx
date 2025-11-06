import React, { useState, useEffect } from 'react';
 
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state
      setScrolled(window.scrollY > 100);

      // Update active section
      const sections = ['home', 'about', 'achievements', 'projects', 'contact'];
      let current = 'home'; // Default to home

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is within the top 150px of the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset for fixed navbar
      const navbarHeight = document.querySelector('.navbar')?.clientHeight || 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* This new .nav-content wrapper is needed for flexbox layout */}
        <div className="nav-content">
          <div className="logo">
            <a
              href="#home"
              className="logo-text"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              aria-label="Go to home"
            >
              {"<MY PROTOFOLIO>"}
            </a>
          </div>

          {/* Always-visible links (removed collapse toggling) */}
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className={activeSection === 'achievements' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('achievements');
                }}
              >
                Achievements
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Removed hamburger toggler */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

