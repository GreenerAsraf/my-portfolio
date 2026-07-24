"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroCarousel.css";

// ── Typewriter hook ──────────────────────────────────────────
const useTypewriter = (texts, { typingSpeed = 80, deletingSpeed = 45, pauseMs = 1800 } = {}) => {
  const [display, setDisplay] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    const current = texts[textIdx];
    let timeout;

    if (phase === "typing") {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pauseMs);
      }
    } else if (phase === "pausing") {
      setPhase("deleting");
    } else if (phase === "deleting") {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), deletingSpeed);
      } else {
        setTextIdx((i) => (i + 1) % texts.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [display, phase, textIdx, texts, typingSpeed, deletingSpeed, pauseMs]);

  return display;
};

// ── Slide data ───────────────────────────────────────────────
const slides = [
  {
    id: 1,
    bg: "/carousel/bg1.webp",
    tag: "Full Stack Developer",
    headline: "Building Modern Web Experiences",
    sub: "Crafting scalable, high-performance apps with React, Next.js & Node.",
    accent: "#58e3c4",
  },
  {
    id: 2,
    bg: "/carousel/bg2.webp",
    tag: "Next.js & React Expert",
    headline: "Pixel-Perfect UI, Lightning Fast",
    sub: "Delivering beautiful interfaces that users love and businesses trust.",
    accent: "#7c3aed",
  },
  {
    id: 3,
    bg: "/carousel/bg3.webp",
    tag: "Backend & Database",
    headline: "Robust APIs & Smart Data Models",
    sub: "Node.js, Express, MongoDB & Prisma — engineered for scale.",
    accent: "#f59e0b",
  },
  {
    id: 4,
    bg: "/carousel/bg2.webp",
    tag: "Open for Opportunities",
    headline: "Let's Build Something Amazing",
    sub: "I'm available for freelance work and full-time positions worldwide.",
    accent: "#38bdf8",
  },
  {
    id: 5,
    bg: "/carousel/bg5.webp",
    tag: "Creative Problem Solver",
    headline: "Turning Ideas Into Reality",
    sub: "From concept to deployment — bringing your vision to life with clean code.",
    accent: "#ec4899",
  },
];

const ROLE_TEXTS = slides.map((s) => s.tag);
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
  const bgRef = useRef(null);
  const carouselRef = useRef(null);

  // Typewriter for the role tag
  const typedTag = useTypewriter(ROLE_TEXTS, { typingSpeed: 75, deletingSpeed: 40, pauseMs: 2000 });

  const goTo = useCallback((idx, dir) => {
    setDirection(dir);
    setCurrent(idx);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    const idx = (current + 1) % slides.length;
    goTo(idx, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    const idx = (current - 1 + slides.length) % slides.length;
    goTo(idx, -1);
  }, [current, goTo]);

  // Auto-advance with progress ring
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

  // Parallax scroll effect
  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (bgRef.current && carouselRef.current) {
          const scrollY = window.scrollY;
          const heroHeight = carouselRef.current.offsetHeight;
          // Only apply parallax while hero is in view
          if (scrollY < heroHeight) {
            bgRef.current.style.transform = `translateY(${scrollY * 0.28}px) scale(1.08)`;
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const slide = slides[current];

  return (
    <div className="hero-carousel" ref={carouselRef}>
      {/* Background layers with parallax */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slide.id}
          className="hero-bg"
          ref={bgRef}
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
            {/* Typewriter tag badge */}
            <motion.span
              className="hero-tag"
              style={{ borderColor: slide.accent, color: slide.accent }}
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {typedTag}
              <span className="typewriter-cursor" style={{ color: slide.accent }}>|</span>
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
              <a href="/about" className="hero-btn primary" style={{ background: slide.accent, color: "#0A192F" }}>
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
