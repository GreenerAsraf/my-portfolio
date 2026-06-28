'use client';

import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faNodeJs, 
  faJsSquare, 
  faGithub,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faDesktop } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../../ShearedFolder/SectionTitle/SectionTitle';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: faDesktop,
    description: "Building responsive and interactive user interfaces using modern web technologies.",
    skills: [
      { name: 'React.js', icon: faReact, color: '#61DAFB' },
      { name: 'Next.js', textIcon: 'N', color: '#ffffff' },
      { name: 'JavaScript', icon: faJsSquare, color: '#F7DF1E' },
      { name: 'TailwindCSS', textIcon: 'TW', color: '#38B2AC' },
    ]
  },
  {
    title: "Backend Development",
    icon: faServer,
    description: "Creating robust and scalable server-side applications and APIs.",
    skills: [
      { name: 'Node.js', icon: faNodeJs, color: '#68A063' },
      { name: 'Express.js', textIcon: 'ex', color: '#ffffff' },
    ]
  },
  {
    title: "Database & Tools",
    icon: faDatabase,
    description: "Managing data and utilizing tools for efficient development workflows.",
    skills: [
      { name: 'MongoDB', textIcon: 'M', color: '#47A248' },
      { name: 'Prisma', textIcon: 'P', color: '#5A67D8' },
      { name: 'Git', icon: faGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: faGithub, color: '#ffffff' },
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills-section container">
     
      
      <div className="skills-intro">
        <p>
          I specialize in full-stack web development with a strong focus on modern JavaScript frameworks. 
          Here is a detailed breakdown of my technical expertise and the tools I use to build scalable, 
          high-performance applications.
        </p>
      </div>

      <div className="expertise-container">
        {skillCategories.map((category, index) => (
          <div className="expertise-category" key={index}>
            <div className="category-header">
              <div className="category-icon-wrapper">
                <FontAwesomeIcon icon={category.icon} className="category-icon" />
              </div>
              <h2 className="category-title">{category.title}</h2>
            </div>
            <p className="category-description">{category.description}</p>
            
            <div className="skills-grid">
              {category.skills.map((skill, sIndex) => (
                <div 
                  className="skill-card" 
                  key={sIndex} 
                  style={{ "--hover-color": skill.color }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon ? (
                      <FontAwesomeIcon icon={skill.icon} />
                    ) : (
                      <span className="text-icon">{skill.textIcon}</span>
                    )}
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
