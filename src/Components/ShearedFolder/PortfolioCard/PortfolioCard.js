'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import './PortfolioCard.css';

// Vibrant accent per project index
const ACCENTS = [
  { color: '#58e3c4', glow: 'rgba(88,227,196,0.35)', light: 'rgba(88,227,196,0.08)' },   // teal
  { color: '#a78bfa', glow: 'rgba(167,139,250,0.35)', light: 'rgba(167,139,250,0.08)' }, // violet
  { color: '#fb923c', glow: 'rgba(251,146,60,0.35)',  light: 'rgba(251,146,60,0.08)'  }, // orange
  { color: '#38bdf8', glow: 'rgba(56,189,248,0.35)',  light: 'rgba(56,189,248,0.08)'  }, // sky
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.93 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.3, delay: i * 0.07, ease: 'backOut' },
  }),
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
};

const PortfolioCard = ({ portfolioList }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <motion.div
      className="works-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {portfolioList.map((portfolio, i) => {
        const accent = ACCENTS[i % ACCENTS.length];
        const isHovered = hoveredIdx === i;

        return (
          <motion.div
            key={portfolio.name}
            layout
            className="work-card"
            variants={cardVariants}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            whileHover={{ y: -10, transition: { duration: 0.3, ease: 'easeOut' } }}
            style={{ '--accent': accent.color, '--glow': accent.glow, '--accent-light': accent.light }}
          >
            {/* Number badge */}
            <span className="work-card__number" style={{ color: accent.color }}>
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* Infinite looping glowing border */}
            <motion.div
              className="work-card__border"
              animate={{
                opacity: 1,
                boxShadow: [
                  `0 0 0 1px ${accent.color}40, 0 4px 20px ${accent.glow}`,
                  `0 0 0 2px ${accent.color}, 0 12px 48px ${accent.glow}`,
                  `0 0 0 1px ${accent.color}40, 0 4px 20px ${accent.glow}`
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Image block */}
            <div className="work-card__img-wrap">
              <Image
                src={portfolio.Image}
                alt={portfolio.name}
                className="work-card__img"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />

              {/* Shimmer scan line */}
              <motion.div
                className="work-card__shimmer"
                animate={isHovered ? { y: ['0%', '110%'] } : { y: '0%' }}
                transition={{ duration: 1.1, ease: 'easeInOut', repeat: isHovered ? Infinity : 0, repeatDelay: 0.6 }}
              />

              {/* Hover overlay with Live Site button */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className="work-card__overlay"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    style={{ background: `linear-gradient(180deg, transparent 0%, rgba(6,15,30,0.85) 100%)` }}
                  >
                    {portfolio.links.find(l => l.linkType === 'Live Site') && (
                      <motion.a
                        href={portfolio.links.find(l => l.linkType === 'Live Site').link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-card__live-btn"
                        style={{ background: accent.color, color: '#0a192f' }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.08, duration: 0.25, ease: 'backOut' }}
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Live Preview
                      </motion.a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Card body */}
            <div className="work-card__body">
              {/* Type badge */}
              <span className="work-card__type" style={{ color: accent.color, background: accent.light, borderColor: `${accent.color}33` }}>
                {portfolio.type}
              </span>

              {/* Title */}
              <h3 className="work-card__title">{portfolio.name}</h3>

              {/* Description */}
              {portfolio.description && (
                <p className="work-card__desc">{portfolio.description}</p>
              )}

              {/* Tech tags — staggered */}
              <motion.div
                className="work-card__tags"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {portfolio.technologys.map((tech, ti) => (
                  <motion.span
                    key={tech}
                    className="work-card__tag"
                    custom={ti}
                    variants={tagVariants}
                    style={{ '--t-accent': accent.color }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Card footer — links */}
            <div className="work-card__footer">
              {portfolio.links.map((link) => (
                <motion.a
                  key={link.link}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-card__link"
                  style={{ '--btn-accent': accent.color }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.linkType}
                </motion.a>
              ))}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default PortfolioCard;
