"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./StatsCounter.css";

const stats = [
  {
    value: 3,
    suffix: "+",
    label: "Years Experience",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    accent: "#58e3c4",
    desc: "Building production apps",
  },
  {
    value: 20,
    suffix: "+",
    label: "Projects Delivered",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    accent: "#a78bfa",
    desc: "Across web & mobile",
  },
  {
    value: 10,
    suffix: "+",
    label: "Happy Clients",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    accent: "#38bdf8",
    desc: "Freelance & agency",
  },
  {
    value: 100,
    suffix: "%",
    label: "Passion for Code",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    accent: "#fb923c",
    desc: "Always learning & growing",
  },
];

// Animate a number from 0 to target
const useCounter = (target, duration = 1800, started = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    let raf;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, started]);

  return count;
};

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCounter(stat.value, 1600 + index * 200, inView);

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      style={{ "--accent": stat.accent }}
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      {/* Glow */}
      <div className="stat-card__glow" />

      {/* Icon */}
      <div className="stat-card__icon" style={{ color: stat.accent }}>
        {stat.icon}
      </div>

      {/* Number */}
      <div className="stat-card__number" style={{ color: stat.accent }}>
        {count}
        <span className="stat-card__suffix">{stat.suffix}</span>
      </div>

      {/* Label */}
      <div className="stat-card__label">{stat.label}</div>

      {/* Description */}
      <div className="stat-card__desc">{stat.desc}</div>

      {/* Bottom accent bar */}
      <motion.div
        className="stat-card__bar"
        style={{ background: stat.accent }}
        initial={{ width: 0 }}
        whileInView={{ width: "40px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 + index * 0.1, ease: "easeOut" }}
      />
    </motion.div>
  );
};

const StatsCounter = () => {
  return (
    <section className="stats-section container">
      {/* Section label */}
      <motion.div
        className="stats-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="stats-label">By the Numbers</span>
        <h2 className="stats-heading">
          Turning ideas into{" "}
          <span className="stats-heading__gradient">real results</span>
        </h2>
      </motion.div>

      {/* Cards grid */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
