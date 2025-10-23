import React from 'react';

const projects = [
  {
    title: 'Gesture Recognition System',
    desc: 'AI-powered real-time gesture recognition system using OpenCV for detecting/classifying threats.',
    tags: ['Python', 'OpenCV', 'VGG16', 'ResNet50', 'InceptionV3', 'CNN'],
    github: 'https://github.com/samithreddy2005'
  }
  // Add more if you want
];

const Projects = () => (
  <section id="projects" className="container">
    <div className="section-header">
      <div className="section-title">Featured Projects</div>
      <div className="title-underline"></div>
      <div style={{marginTop:"7px",fontSize:'1.02em',color:'#aaa'}}>Here is one of my recent works</div>
    </div>
    <div className="section-content" style={{display:"flex",flexWrap:"wrap",gap:"32px"}}>
      {projects.map((proj, i) => (
        <div className="section-card" style={{flex:'1 1 320px', minWidth:'280px'}}>
          <div style={{fontWeight:'bold', fontSize:'1.22em', color:'#8be9fd', marginBottom:'6px'}}>{proj.title}</div>
          <div style={{marginBottom:'10px', color:'#ececff'}}>{proj.desc}</div>
          <div style={{marginBottom:'13px'}}>{proj.tags.map(tag=>(
              <span key={tag} style={{background:"#232343", color:"#8be9fd",padding:"4px 10px",marginRight:"6px",borderRadius:'9px',fontSize:'0.97em',marginBottom:'4px',display:'inline-block'}}>{tag}</span>
          ))}</div>
          <a href={proj.github} className="btn" target="_blank" rel="noopener noreferrer">View More on GitHub</a>
        </div>
      ))}
    </div>
  </section>
);
export default Projects;
