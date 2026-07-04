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
import { motion } from 'framer-motion';

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

      <motion.div
        className="skills-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Label */}
        <motion.span
          className="skills-label"
          initial={{ opacity: 0, letterSpacing: '6px' }}
          whileInView={{ opacity: 1, letterSpacing: '3px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technical Expertise
        </motion.span>

        {/* Main headline with gradient words */}
        <motion.h2
          className="skills-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          Full-Stack{' '}
          <span className="skills-heading-gradient">Developer</span>
          {' '}by Craft
        </motion.h2>

        {/* Animated divider */}
        <motion.div
          className="skills-divider"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '80px', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
        />

        {/* Subtitle */}
        <motion.p
          className="skills-subtitle"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          Specializing in modern JavaScript ecosystems — from pixel-perfect UIs
          to scalable, production-ready back-end architectures.
        </motion.p>
      </motion.div>

      <div className="expertise-container">
        {skillCategories.map((category, index) => (
          <motion.div 
            className="expertise-category" 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
