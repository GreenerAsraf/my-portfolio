"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroCarousel.css";

const slides = [
  {
    id: 1,
    bg: "/carousel/bg1.png",
    tag: "Full Stack Developer",
    headline: "Building Modern Web Experiences",
    sub: "Crafting scalable, high-performance apps with React, Next.js & Node.",
    accent: "#58e3c4",
  },
  {
    id: 2,
    bg: "/carousel/bg2.png",
    tag: "Next.js & React Expert",
    headline: "Pixel-Perfect UI, Lightning Fast",
    sub: "Delivering beautiful interfaces that users love and businesses trust.",
    accent: "#7c3aed",
  },
  {
    id: 3,
    bg: "/carousel/bg3.png",
    tag: "Backend & Database",
    headline: "Robust APIs & Smart Data Models",
    sub: "Node.js, Express, MongoDB & Prisma — engineered for scale.",
    accent: "#f59e0b",
  },
  {
    id: 4,
    bg: "/carousel/bg4.JPG",
    tag: "Open for Opportunities",
    headline: "Let's Build Something Amazing",
    sub: "I'm available for freelance work and full-time positions worldwide.",
    accent: "#38bdf8",
  },
];

const DURATION = 6000;

const textVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: i * 0.18, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: -20, filter: "blur(4px)", transition: { duration: 0.4 } },
};

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? "8%" : "-8%", opacity: 0, scale: 1.04 }),
  center: { x: "0%", opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeInOut" } },
  exit: (dir) => ({
    x: dir > 0 ? "-8%" : "8%",
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.7, ease: "easeInOut" },
  }),
};

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback(
    (idx, dir) => {
      setDirection(dir);
      setCurrent(idx);
      setProgress(0);
    },
    []
  );

  const next = useCallback(() => {
    const idx = (current + 1) % slides.length;
    goTo(idx, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    const idx = (current - 1 + slides.length) % slides.length;
    goTo(idx, -1);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      setProgress(Math.min((elapsed / DURATION) * 100, 100));
      if (elapsed < DURATION) {
        raf = requestAnimationFrame(tick);
      } else {
        next();
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [current, next]);

  const slide = slides[current];

  return (
    <div className="hero-carousel">
      {/* Background layers */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slide.id}
          className="hero-bg"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ backgroundImage: `url('${slide.bg}')` }}
        />
      </AnimatePresence>

      {/* Dark overlay with accent tint */}
      <div
        className="hero-overlay"
        style={{
          background: `linear-gradient(135deg, rgba(10,25,47,0.92) 60%, ${slide.accent}22 100%)`,
        }}
      />

      {/* Floating particles */}
      <div className="hero-particles" aria-hidden="true">
        {[...Array(18)].map((_, i) => (
          <span key={i} className="particle" style={{ "--i": i }} />
        ))}
      </div>

      {/* Content */}
      <div className="hero-content container">
        <AnimatePresence mode="wait">
          <motion.div key={slide.id} className="hero-text-block">
            {/* Tag badge */}
            <motion.span
              className="hero-tag"
              style={{ borderColor: slide.accent, color: slide.accent }}
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {slide.tag}
            </motion.span>

            {/* Headline */}
            <motion.h1
              className="hero-headline"
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {slide.headline}
            </motion.h1>

            {/* Sub */}
            <motion.p
              className="hero-sub"
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {slide.sub}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="hero-ctas"
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <a href="/aboutme" className="hero-btn primary" style={{ background: slide.accent, color: "#0A192F" }}>
                About Me
              </a>
              <a href="/contact" className="hero-btn outline" style={{ borderColor: slide.accent, color: slide.accent }}>
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide counter & dots */}
      <div className="hero-controls">
        <button className="hero-arrow" onClick={prev} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15,18 9,12 15,6"/></svg>
        </button>

        <div className="hero-dots">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`hero-dot ${i === current ? "active" : ""}`}
              style={i === current ? { "--accent": slide.accent } : {}}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Go to slide ${i + 1}`}
            >
              {i === current && (
                <svg viewBox="0 0 36 36" className="dot-ring">
                  <circle cx="18" cy="18" r="14" strokeDasharray="88" strokeDashoffset={88 - (88 * progress) / 100} stroke={slide.accent} strokeWidth="2.5" fill="none"/>
                </svg>
              )}
            </button>
          ))}
        </div>

        <button className="hero-arrow" onClick={next} aria-label="Next slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9,6 15,12 9,18"/></svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <span />
      </motion.div>
    </div>
  );
};

export default HeroCarousel;
