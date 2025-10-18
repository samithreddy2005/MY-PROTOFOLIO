import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Gesture Recognition System',
      description:
        'AI-powered real-time gesture recognition system using OpenCV and TensorFlow for detecting and classifying hand gestures with 95% accuracy.',
      image: 'https://via.placeholder.com/400x250',
      tags: ['Python', 'OpenCV', 'TensorFlow', 'CNN'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Predictive Analytics Dashboard',
      description:
        'Machine learning model for predictive analysis with interactive dashboard, achieving 92% accuracy using ensemble methods.',
      image: 'https://via.placeholder.com/400x250',
      tags: ['Python', 'Scikit-learn', 'Flask', 'Chart.js'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Task Management Platform',
      description:
        'Full-stack web application with user authentication, real-time updates, and responsive design for efficient task management.',
      image: 'https://via.placeholder.com/400x250',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'AI Image Enhancement Tool',
      description:
        'Advanced image processing application using computer vision techniques for enhancement, filtering, and object detection.',
      image: 'https://via.placeholder.com/400x250',
      tags: ['Python', 'OpenCV', 'NumPy', 'Streamlit'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'AI Chatbot Assistant',
      description:
        'Intelligent chatbot using NLP and machine learning for natural conversation and task automation with context awareness.',
      image: 'https://via.placeholder.com/400x250',
      tags: ['Python', 'NLP', 'TensorFlow', 'FastAPI'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Data Visualization Dashboard',
      description:
        'Interactive data visualization platform for analyzing large datasets with real-time charts and comprehensive insights.',
      image: 'https://via.placeholder.com/400x250',
      tags: ['Python', 'Plotly', 'Dash', 'Pandas'],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Here are some of my recent works</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      title="GitHub Repo"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more">
          <a href="https://github.com/samithreddy2005" target="_blank" rel="noreferrer" className="btn btn-outline">
            <FaGithub /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
