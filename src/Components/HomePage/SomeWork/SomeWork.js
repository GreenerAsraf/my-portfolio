"use client";
import React from "react";
import { motion } from "framer-motion";
import "./SomeWork.css";
import PortfolioCard from "../../ShearedFolder/PortfolioCard/PortfolioCard";
import ProjectList from "../../ProjectList/ProjectList";
import Link from "next/link";

import { useLanguage } from "../../LanguageProvider/LanguageProvider";

const SomeWork = () => {
  const { t } = useLanguage();

  return (
    <section className="somework-section container">

      {/* Animated section header */}
      <motion.div
        className="somework-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="somework-header__left">
          <motion.span
            className="somework-label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.work.label}
          </motion.span>

          <motion.h2
            className="somework-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            {t.work.heading}{" "}
            <span className="somework-title__gradient">{t.work.headingGradient}</span>
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            className="somework-underline"
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
          <Link href="/portfolio" className="somework-all-btn">
            {t.work.viewAll}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>


      <PortfolioCard portfolioList={ProjectList.slice(0, 3)} />
    </section>
  );
};

export default SomeWork;
