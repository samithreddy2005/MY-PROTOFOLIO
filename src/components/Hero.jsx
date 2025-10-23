import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">K. Samith Reddy</h1>
          <h2 className="typing-text">
            <TypeAnimation
              sequence={[
                'AI Enthusiast',
                2000,
                'Data Scientist',
                2000,
                'Web Developer',
                2000,
                'Problem Solver',
                2000,
                'ML Engineer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="description">
            AI & Data Science student passionate about Machine Learning,
            Computer Vision, and building innovative solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <FaBriefcase /> View Work
            </a>
            <a href="#contact" className="btn btn-outline">
              <FaEnvelope /> Get in Touch
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/samithreddy2005" target="_blank" rel="noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kesireddy-samith-reddy-86a3552a5" target="_blank" rel="noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="mailto:samithreddy950@gmail.com" className="social-icon">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-down">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
