'use client';

import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faNodeJs, 
  faJsSquare, 
  faHtml5, 
  faCss3Alt 
} from '@fortawesome/free-brands-svg-icons';
import SectionTitle from '../../ShearedFolder/SectionTitle/SectionTitle';

const skillsData = [
  { name: 'React.js', icon: faReact },
  { name: 'Next.js', textIcon: 'N' }, // Next.js isn't always in free brands, we use a text fallback or React icon
  { name: 'Node.js', icon: faNodeJs },
  { name: 'JavaScript', icon: faJsSquare },
  { name: 'MongoDB', textIcon: 'M' }, // MongoDB icon isn't standard in free brands
  { name: 'TailwindCSS', textIcon: 'TW' },
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3Alt },
];

const Skills = () => {
  return (
    <section className="skills-section container">
      <SectionTitle title="Skills &" span="Expertise" />
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">
              {skill.icon ? (
                <FontAwesomeIcon icon={skill.icon} />
              ) : (
                <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>{skill.textIcon}</span>
              )}
            </div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
