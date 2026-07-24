"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './ExperienceTimeline.css';

const timelineData = [
  {
    year: "Jan 2026 - Jun 2026",
    title: "Next Level AI-Driven Software Engineering Bootcamp",
    company: "Programming Hero",
    description: "Acquired advanced software engineering skills, focusing on clean architecture, AI integration, design patterns, and enterprise-grade software development methodologies.",
    accent: "var(--accent-teal)"
  },
  {
    year: "2022 - Present",
    title: "Complete Web Development Course",
    company: "Programming Hero",
    description: "Built a solid foundation in modern full-stack web development. Learnt HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and Next.js through building real-world projects.",
    accent: "var(--accent-violet)"
  },
  {
    year: "Sep 2022 - Oct 2022",
    title: "JavaScript Course (Batch 2, Roll-37)",
    company: "NACTAR",
    description: "Completed intensive training on core programming concepts, algorithms, data structures, and DOM manipulation in JavaScript.",
    accent: "var(--accent-teal)"
  },
  {
    year: "2015 - 2016",
    title: "MBA in Accounting",
    company: "University of Chittagong",
    description: "Master of Business Administration, specializing in Accounting. Developed strong analytical thinking, problem-solving skills, and financial systems knowledge.",
    accent: "var(--accent-violet)"
  },
  {
    year: "2010 - 2014",
    title: "BBA in Accounting",
    company: "University of Chittagong",
    description: "Bachelor of Business Administration, specializing in Accounting. Acquired fundamental business management, analytical, and data organization concepts.",
    accent: "var(--accent-teal)"
  }
];

const ExperienceTimeline = () => {
  return (
    <section className="timeline-section container my-5">
      <motion.div
        className="timeline-header text-center mb-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="timeline-label">Journey</span>
        <h2 className="timeline-title">Experience & Education</h2>
        <div className="timeline-divider mx-auto" />
      </motion.div>

      <div className="timeline-container">
        {/* Central Line */}
        <div className="timeline-line"></div>

        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className={`timeline-item ${isEven ? 'left' : 'right'}`}>
              <motion.div
                className="timeline-content"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                style={{ '--node-color': item.accent }}
              >
                <div className="timeline-node" />
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-role">{item.title}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <p className="timeline-desc">{item.description}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
