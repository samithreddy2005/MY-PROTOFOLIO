import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaBrain, FaLaptopCode, FaTools } from 'react-icons/fa';
import '../styles/Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      icon: <FaCode />,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 75 },
      ],
    },
    {
      icon: <FaBrain />,
      title: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'OpenCV', level: 90 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'PyTorch', level: 75 },
      ],
    },
    {
      icon: <FaLaptopCode />,
      title: 'Web Development',
      skills: [
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 75 },
        { name: 'MongoDB', level: 70 },
      ],
    },
    {
      icon: <FaTools />,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Google Colab', level: 85 },
        { name: 'Docker', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transition: 'width 1.5s ease',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
