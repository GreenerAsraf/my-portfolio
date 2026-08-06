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

// Inline SVGs for tech brands that lack FontAwesome icons
const NEXT_JS_SVG = (
  <svg viewBox="0 0 180 180" width="36" height="36" fill="currentColor">
    <circle cx="90" cy="90" r="90" fill="currentColor"/>
    <path d="M140 135.5L95.8 77.2V135.5H84.2V44.5H95.8L128.4 87.8V44.5H140V135.5ZM119.8 82.5c-3.1-4.2-6.8-7.9-10.9-11L84.2 44.5v55.8L119.8 82.5Z" fill="#0A192F"/>
  </svg>
);

const EXPRESS_SVG = (
  <svg viewBox="0 0 100 100" width="36" height="36" fill="currentColor">
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fontWeight="800" letterSpacing="-1">EX</text>
    <rect x="5" y="5" width="90" height="90" rx="10" fill="none" stroke="currentColor" strokeWidth="6"/>
  </svg>
);

const MONGODB_SVG = (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
    <path d="M12 1.5c-.3 0-5.8 4.9-5.8 9.9 0 4.5 3.5 8 6 10c2.5-2 6-5.5 6-10 0-5-5.5-9.9-6.9-9.9zm0 16.5c-1.5 0-4-2-4-6 0-4 3.5-7.5 4-8.5.5 1 4 4.5 4 8.5 0 4-2.5 6-4 6z"/>
  </svg>
);

const PRISMA_SVG = (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
    <path d="M12 1.5L2.25 7.125V18.375L12 24L21.75 18.375V7.125L12 1.5ZM12 4.125L19.5 8.438V12.75L12 8.438V4.125ZM4.5 8.438L12 12.75V17.063L4.5 12.75V8.438ZM12 21.375V17.063L19.5 12.75V17.063L12 21.375Z"/>
  </svg>
);

const TAILWIND_SVG = (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
    <path d="M12 3C8 3 5.5 5.5 5.5 10.5c0 5 4.5 5.5 4.5 7.5c0 1.5-1.5 2-2.5 2C5.5 20 4.5 18.5 4.5 18.5S3 21 6 21c3.5 0 6-2 6-5.5c0-4.5-4.5-5.5-4.5-7.5c0-1 1-1.5 2-1.5c2 0 2.5 1.5 2.5 1.5S13.5 3 12 3zm6.5 4.5C14.5 7.5 12 10 12 15c0 5 4.5 5.5 4.5 7.5c0 1.5-1.5 2-2.5 2c-2 0-3-1.5-3-1.5S9.5 25.5 12.5 25.5c3.5 0 6.5-2 6.5-5.5c0-4.5-4.5-5.5-4.5-7.5c0-1 1-1.5 2-1.5c2 0 2.5 1.5 2.5 1.5S20 7.5 18.5 7.5z"/>
  </svg>
);

const skillCategories = [
  {
    title: "Frontend Development",
    icon: faDesktop,
    description: "Building responsive and interactive user interfaces using modern web technologies.",
    skills: [
      { name: 'React.js', icon: faReact, color: '#61DAFB', level: '95%', levelNum: 95, tag: 'Expert' },
      { name: 'Next.js', svg: NEXT_JS_SVG, color: '#ffffff', level: '90%', levelNum: 90, tag: 'Expert' },
      { name: 'JavaScript', icon: faJsSquare, color: '#F7DF1E', level: '95%', levelNum: 95, tag: 'Expert' },
      { name: 'TailwindCSS', svg: TAILWIND_SVG, color: '#38B2AC', level: '90%', levelNum: 90, tag: 'Expert' },
    ]
  },
  {
    title: "Backend Development",
    icon: faServer,
    description: "Creating robust and scalable server-side applications and APIs.",
    skills: [
      { name: 'Node.js', icon: faNodeJs, color: '#68A063', level: '90%', levelNum: 90, tag: 'Expert' },
      { name: 'Express.js', svg: EXPRESS_SVG, color: '#61DAFB', level: '90%', levelNum: 90, tag: 'Expert' },
    ]
  },
  {
    title: "Database & Tools",
    icon: faDatabase,
    description: "Managing data and utilizing tools for efficient development workflows.",
    skills: [
      { name: 'MongoDB', svg: MONGODB_SVG, color: '#47A248', level: '85%', levelNum: 85, tag: 'Proficient' },
      { name: 'Prisma', svg: PRISMA_SVG, color: '#5A67D8', level: '80%', levelNum: 80, tag: 'Proficient' },
      { name: 'Git', icon: faGitAlt, color: '#F05032', level: '90%', levelNum: 90, tag: 'Expert' },
      { name: 'GitHub', icon: faGithub, color: '#ffffff', level: '95%', levelNum: 95, tag: 'Expert' },
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
                  <span className="skill-card__tag" style={{ borderColor: `${skill.color}33`, color: skill.color }}>
                    {skill.tag}
                  </span>
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon ? (
                      <FontAwesomeIcon icon={skill.icon} />
                    ) : (
                      skill.svg
                    )}
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-proficiency">
                    <div className="skill-proficiency-track">
                      <motion.div 
                        className="skill-proficiency-fill" 
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                      />
                    </div>
                    <span className="skill-proficiency-num">{skill.level}</span>
                  </div>
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
