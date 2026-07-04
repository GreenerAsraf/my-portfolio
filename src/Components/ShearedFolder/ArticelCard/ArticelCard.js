"use client";

import React from "react";
import { motion } from "framer-motion";
import "./ArticelCard.css";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1], // Custom spring-like easing
    },
  }),
};

const ArticelCard = ({ articelList }) => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div className="article-cards-grid">
      {articelList.map((articel, index) => (
        <motion.a
          key={`${articel.link}-${index}`}
          className="elegant-article-card"
          href={articel.link}
          target="_blank"
          rel="noopener noreferrer"
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover="hover"
        >
          {/* Top image wrapper */}
          <div className="elegant-article-card__img-wrap">
            <motion.img
              src={articel.image}
              alt={articel.title}
              className="elegant-article-card__img"
              variants={{
                hover: { scale: 1.05, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            />
            {/* Overlay gradient for readability */}
            <div className="elegant-article-card__overlay" />
          </div>

          {/* Card content */}
          <div className="elegant-article-card__content">
            <div className="elegant-article-card__meta">
              <span className="elegant-article-card__date">6 May 2022</span>
            </div>

            <h3 className="elegant-article-card__title">
              {articel.title}
            </h3>

            <p className="elegant-article-card__desc">
              {truncate(articel.description, 110)}
            </p>

            {/* Tags area */}
            <div className="elegant-article-card__tags">
              {articel.tags.map((tag) => (
                <span key={tag} className="elegant-article-card__tag">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* "Read More" button area that appears on hover */}
            <motion.div 
              className="elegant-article-card__read-more"
              variants={{
                hover: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                hidden: { opacity: 0, x: -10 }
              }}
              initial="hidden"
            >
              Read Article
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default ArticelCard;