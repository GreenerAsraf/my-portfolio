"use client";
import React from "react";
import { motion } from "framer-motion";
import ArticelCard from "../../ShearedFolder/ArticelCard/ArticelCard";
import ArticelData from "../../ShearedFolder/ArticelData/ArticelData";
import Link from "next/link";
import "./SomeArticels.css";

const SomeArticels = () => {
  return (
    <section className="somearticels-section container">

      {/* Animated section header */}
      <motion.div
        className="somearticels-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="somearticels-header__left">
          <motion.span
            className="somearticels-label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Insights & Writing
          </motion.span>

          <motion.h2
            className="somearticels-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            Some of{" "}
            <span className="somearticels-title__gradient">my articles</span>
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            className="somearticels-underline"
            initial={{ width: 0 }}
            whileInView={{ width: "70px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/blog" className="somearticels-all-btn">
            View all articles
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>

      <ArticelCard articelList={ArticelData.slice(0, 3)} />
    </section>
  );
};

export default SomeArticels;
