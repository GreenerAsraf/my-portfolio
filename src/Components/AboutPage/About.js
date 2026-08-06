"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AboutDetails from "./AboutDetails/AboutDetails";
import SkillsDetails from "./SkillDetails/SkillsDetails";
import "./AboutPhoto.css";
import { useLanguage } from "../LanguageProvider/LanguageProvider";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="container">
      <div className="row pt-5 align-items-center">
        {/* Photo column */}
        <div className="col-md-5 mb-5 mb-md-0 d-flex justify-content-center">
          <motion.div
            className="about-photo-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Morphing blob photo frame */}
            <div className="about-photo-frame">
              <Image
                src="/profile-pic.webp"
                alt="Mohammed Asraf Uddin"
                fill
                sizes="(max-width: 768px) 260px, 340px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>

            {/* Floating dots */}
            <span className="about-photo-dot about-photo-dot--1" />
            <span className="about-photo-dot about-photo-dot--2" />
            <span className="about-photo-dot about-photo-dot--3" />

            {/* Experience badge */}
            <motion.div
              className="about-photo-badge"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.45, ease: "backOut" }}
            >
              <span className="about-photo-badge__number">2+</span>
              <span className="about-photo-badge__text">
                <strong>Years</strong>
                {t.about.exp}
              </span>
            </motion.div>

            {/* Tech tag */}
            <motion.span
              className="about-photo-tag"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              {t.about.badgeTitle}
            </motion.span>
          </motion.div>
        </div>

        {/* Text column */}
        <motion.div
          className="col-md-7"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <AboutDetails />
          <SkillsDetails />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
