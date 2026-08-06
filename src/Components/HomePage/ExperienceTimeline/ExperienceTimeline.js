"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './ExperienceTimeline.css';

import { useLanguage } from '../../LanguageProvider/LanguageProvider';

const ExperienceTimeline = () => {
  const { t } = useLanguage();

  const timelineData = [
    {
      year: t.experience.t1Year,
      title: t.experience.t1Title,
      company: t.experience.t1Company,
      description: t.experience.t1Desc,
      accent: "var(--accent-teal)"
    },
    {
      year: t.experience.t2Year,
      title: t.experience.t2Title,
      company: t.experience.t2Company,
      description: t.experience.t2Desc,
      accent: "var(--accent-violet)"
    },
    {
      year: t.experience.t3Year,
      title: t.experience.t3Title,
      company: t.experience.t3Company,
      description: t.experience.t3Desc,
      accent: "var(--accent-teal)"
    },
    {
      year: t.experience.t4Year,
      title: t.experience.t4Title,
      company: t.experience.t4Company,
      description: t.experience.t4Desc,
      accent: "var(--accent-violet)"
    },
    {
      year: t.experience.t5Year,
      title: t.experience.t5Title,
      company: t.experience.t5Company,
      description: t.experience.t5Desc,
      accent: "var(--accent-teal)"
    }
  ];

  return (
    <section className="timeline-section container my-5">
      <motion.div
        className="timeline-header text-center mb-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="timeline-label">{t.experience.label}</span>
        <h2 className="timeline-title">{t.experience.heading}</h2>
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
