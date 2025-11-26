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
              <img src="/public/profile.jpg" alt="Profile image" />
              <div className="image-overlay"></div>
            </div>
          </div>

          <div className="about-text">
            <h3>
              Hi, I'm <span className="highlight">Kesireddy Samith Reddy</span>
            </h3>
            <p>I am an AI & Data Science student at <strong>KLH University Aziznagar</strong>, driven by a passion for leveraging cutting-edge technology to address real-world challenges. Specializing in Machine Learning, Computer Vision, and Web Development, I thrive on building innovative and impactful projects that create meaningful solutions. My academic experience combined with hands-on expertise enables me to develop intelligent systems, analyze complex data, and deliver user-centric digital experiences.</p>
            <p>I am continually exploring emerging tools and methodologies to enhance my skills and contribute to advancements in AI and data-driven technologies. Through collaborative research and practical application, I aim to push the boundaries of what technology can achieve for society.</p>

            <div className="about-stats">
              <div className="stat-item">
                <h4>3+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>500+</h4>
                <p>Problems Solved Overall</p>
              </div>
              <div className="stat-item">
                <h4>3+</h4>
                <p>Years Experience in KLH University</p>
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
                  <strong>Locations</strong>
                  <p>Hyderabad, India</p>
                </div>
              </div>
              <div className="info-item">
                <FaCode />
                <div>
                  <strong>Interests</strong>
                  <p>AI, ML, OpenCV, Web Dev</p>
                </div>
              </div>
            </div>

            <a 
              href="/files/Resume.pdf" 
              className="btn btn-primary"
              download="Samith_Reddy_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
