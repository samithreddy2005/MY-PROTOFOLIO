import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h5 className="hero-hi">Hello, I'm</h5>
        <h1 className="hero-title">K. Samith Reddy</h1> 
        <p className="hero-desc">
          AI &amp; Data Science student passionate about Machine Learning, Computer Vision, and building innovative solutions.
        </p>
        <div style={{display:'flex',gap:'24px',justifyContent:'center',marginTop:'36px'}}>
          <a href="#projects" className="hero-btn">
            <FaGithub /> View Work
          </a>
          <a href="#contact" className="hero-btn hero-btn-outline">
            <FaEnvelope /> Get in Touch
          </a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/samithreddy2005" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/kesireddy-samith-reddy-86a3552a5/" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto://samithreddy950@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
}
