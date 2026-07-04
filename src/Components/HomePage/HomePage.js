"use client";
import React from 'react';
import { motion } from 'framer-motion';
import HeroCarousel from './HeroCarousel/HeroCarousel';
import GetInTouchHome from './GetInTocuchHome/GetInTouchHome';
import SomeArticels from './SomeArticels/SomeArticels';
import SomeWork from './SomeWork/SomeWork';
import Skills from './Skills/Skills';
import ExperienceTimeline from './ExperienceTimeline/ExperienceTimeline';
import Testimonials from './Testimonials/Testimonials';
import StatsCounter from './StatsCounter/StatsCounter';
import './HomePage.css';
// Reusable scroll-reveal wrapper
const FadeInSection = ({ children, delay = 0, direction = "up" }) => {
    const yOffset = direction === "up" ? 50 : direction === "down" ? -50 : 0;
    const xOffset = direction === "left" ? 60 : direction === "right" ? -60 : 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset, x: xOffset }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            {children}
        </motion.div>
    );
};

const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            {/* Hero Carousel — full viewport */}
            <HeroCarousel />

            {/* Stats Counter — immediately wows after hero */}
            <FadeInSection direction="up" delay={0}>
                <StatsCounter />
            </FadeInSection>

            {/* Page content sections with staggered scroll-reveal */}
            <div className="homepage-content">
                <FadeInSection direction="up" delay={0}>
                    <Skills />
                </FadeInSection>

                <FadeInSection direction="up" delay={0.05}>
                    <ExperienceTimeline />
                </FadeInSection>

                <FadeInSection direction="up" delay={0.05}>
                    <SomeWork />
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
    );
};

export default HomePage;