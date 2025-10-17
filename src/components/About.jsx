import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaDownload } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img src="https://via.placeholder.com/400" alt="Profile" />
              <div className="image-overlay"></div>
            </div>
          </div>

          <div className="about-text">
            <h3>
              Hi, I'm <span className="highlight">KESIREDDY SAMITH REDDY</span>
            </h3>
            <p>
              I'm an AI & Data Science student at <strong>KLH University</strong>, passionate
              about leveraging technology to solve real-world problems. With expertise in Machine
              Learning, Computer Vision, and Web Development, I enjoy building innovative projects
              that make a difference.
            </p>
            <p>
              My journey in tech has been driven by curiosity and a love for learning. From gesture
              recognition systems to competitive programming, I'm constantly exploring new
              technologies and pushing my boundaries.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <h4>10+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>500+</h4>
                <p>Problems Solved</p>
              </div>
              <div className="stat-item">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>
            </div>

            <div className="about-info">
              <div className="info-item">
                <FaGraduationCap />
                <div>
                  <strong>Education</strong>
                  <p>KLH University - AI & Data Science</p>
                </div>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt />
                <div>
                  <strong>Location</strong>
                  <p>Hyderabad, India</p>
                </div>
              </div>
              <div className="info-item">
                <FaCode />
                <div>
                  <strong>Interests</strong>
                  <p>AI, ML, Computer Vision, Web Dev</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              <FaDownload /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
