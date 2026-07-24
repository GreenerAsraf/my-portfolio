"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import Preloader from "../Preloader/Preloader";
import HeroCarousel from "./HeroCarousel/HeroCarousel";
import FadeInSection from "../ShearedFolder/FadeInSection/FadeInSection";
import "./HomePage.css";

const StatsCounter = dynamic(() => import("./StatsCounter/StatsCounter"));
const SomeWork = dynamic(() => import("./SomeWork/SomeWork"));
const Skills = dynamic(() => import("./Skills/Skills"));
const ExperienceTimeline = dynamic(() => import("./ExperienceTimeline/ExperienceTimeline"));
const SomeArticels = dynamic(() => import("./SomeArticels/SomeArticels"));
const Testimonials = dynamic(() => import("./Testimonials/Testimonials"));
const GetInTouchHome = dynamic(() => import("./GetInTocuchHome/GetInTouchHome"));

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      <div className="homepage-wrapper">
        <HeroCarousel />

        <FadeInSection direction="up" delay={0}>
          <StatsCounter />
        </FadeInSection>

        <div className="homepage-content">
          <FadeInSection direction="up" delay={0}>
            <SomeWork />
          </FadeInSection>

          <FadeInSection direction="up" delay={0.05}>
            <Skills />
          </FadeInSection>

          <FadeInSection direction="up" delay={0.05}>
            <ExperienceTimeline />
          </FadeInSection>

          <FadeInSection direction="up" delay={0.05}>
            <SomeArticels />
          </FadeInSection>

          <FadeInSection direction="up" delay={0.05}>
            <Testimonials />
          </FadeInSection>

          <FadeInSection direction="up" delay={0.05}>
            <GetInTouchHome />
          </FadeInSection>
        </div>
      </div>
    </>
  );
};

export default HomePage;
