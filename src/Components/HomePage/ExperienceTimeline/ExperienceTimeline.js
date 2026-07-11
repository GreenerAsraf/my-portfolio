"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './ExperienceTimeline.css';

const timelineData = [
  {
    year: "2023 - Present",
    title: "Senior Full-Stack Developer",
    company: "TechNova Solutions",
    description: "Leading the front-end architecture using Next.js and Tailwind CSS. Built scalable microservices with Node.js and MongoDB. Improved performance by 45%.",
    accent: "var(--accent-teal)"
  },
  {
    year: "2021 - 2023",
    title: "React Developer",
    company: "Creative Agency",
    description: "Developed and maintained multiple client websites. Created reusable component libraries in React and integrated with headless CMS platforms.",
    accent: "var(--accent-violet)"
  },
  {
    year: "2019 - 2021",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    description: "Designed and built custom WordPress and MERN stack applications for local businesses. Managed end-to-end project lifecycles.",
    accent: "var(--accent-teal)"
  },
  {
    year: "2015 - 2019",
    title: "Accounting and Information System",
    company: "University of Chittagong",
    description: "Bachelor of Business Administration. Graduated with Honors. Specialized in accounting and information systems.",
    accent: "var(--accent-violet)"
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
