import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaUser, FaTag, FaCommentDots } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);

    // In production, integrate with EmailJS or backend API
    console.log('Form Data:', formData);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Let's work together on your next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. Whether you
              have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:your.email@example.com">samithreddy950@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaGithub />
                </div>
                <div className="contact-text">
                  <h4>GitHub</h4>
                  <a href="https://github.com/samithreddy2005" target="_blank" rel="noreferrer">
                    https://github.com/samithreddy2005
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaLinkedin />
                </div>
                <div className="contact-text">
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/kesireddy-samith-reddy-86a3552a5" target="_blank" rel="noreferrer">
                    https://www.linkedin.com/in/kesireddy-samith-reddy-86a3552a5/
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Rajendranagar, Budwel, Hyderabad.</p>
                </div>
              </div>
            </div>

            <div className="social-links-contact">
              <a href="https://github.com/samithreddy2005" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kesireddy-samith-reddy-86a3552a5/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:samithreddy950@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FaUser className="form-icon" />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <FaEnvelope className="form-icon" />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <FaTag className="form-icon" />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <FaCommentDots className="form-icon" />
              </div>
              <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
