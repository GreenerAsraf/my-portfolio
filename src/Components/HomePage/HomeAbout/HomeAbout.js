'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../../LanguageProvider/LanguageProvider';
import './HomeAbout.css';

const HomeAbout = () => {
  const { t } = useLanguage();

  return (
    <section className="home-about-section container">
      <div className="home-about-grid">
        {/* Left Column: Premium Photo Wrapper & Animated Badge */}
        <motion.div 
          className="home-about-visuals"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="about-image-card">
            {/* Browser Dots Mockup on Photo Card */}
            <div className="about-image-header">
              <span className="bf-dot dot-red"></span>
              <span className="bf-dot dot-yellow"></span>
              <span className="bf-dot dot-green"></span>
            </div>
            
            <div className="about-image-wrapper">
              <Image 
                src="/carousel/bg_asraf.webp" 
                alt="Mohammed Asraf Uddin" 
                width={360} 
                height={400} 
                style={{ objectFit: 'cover' }}
                className="about-avatar-img"
              />
            </div>
            
            {/* Floating Experience Badge */}
            <motion.div 
              className="floating-experience-badge"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <div className="badge-icon">⚡</div>
              <div className="badge-info">
                <span className="badge-title">MERN Stack</span>
                <span className="badge-value">Architect</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Bio Content */}
        <motion.div 
          className="home-about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          <span className="about-label">{t.about.label}</span>
          <h2 className="about-title">
            {t.about.heading} <span className="title-gradient">{t.about.headingGradient}</span>
          </h2>
          
          <p className="about-para">
            {t.about.p1}
          </p>

          <p className="about-para">
            {t.about.p2}
          </p>

          {/* Inline Highlighted Tech Pills */}
          <div className="tech-pills-row">
            <span className="tech-pill pill-mongo">MongoDB</span>
            <span className="tech-pill pill-express">Express.js</span>
            <span className="tech-pill pill-react">React.js</span>
            <span className="tech-pill pill-node">Node.js</span>
            <span className="tech-pill pill-next">Next.js</span>
          </div>

          <motion.a 
            href="/about" 
            className="about-more-btn"
            whileHover={{ x: 6 }}
            transition={{ duration: 0.2 }}
          >
            {t.about.readFull}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;

