import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaBrain, FaLaptopCode, FaTools } from 'react-icons/fa';
import '../styles/Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const node = skillsRef.current; // copy ref to stable local variable
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => {
      // use the captured `node` for cleanup (avoids ESLint warning)
      observer.unobserve(node);
      observer.disconnect();
    };
  }, []);

  const skillCategories = [
    {
      icon: <FaCode />,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'Java', level: 50 },
        { name: 'C', level: 40 },
      ],
    },
    {
      icon: <FaBrain />,
      title: 'AI & Machine Learning',
      skills: [
        { name: 'OpenCV', level: 95 },
        { name: 'TensorFlow', level: 80 }, 
        { name: 'PyTorch', level: 75 },
      ],
    },
    {
      icon: <FaLaptopCode />,
      title: 'Web Development',
      skills: [
        { name: 'HTML', level: 80 },
        { name: 'CSS', level: 80 },
        { name: 'React.js', level: 83 },
        { name: 'Node.js', level: 85 },
        { name: 'MongoDB', level: 90 },
      ],
    },
    {
      icon: <FaTools />,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 95 },
        { name: 'VS Code', level: 97 },
        { name: 'Google Colab', level: 97 },
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
