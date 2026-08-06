"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

import { useLanguage } from '../../LanguageProvider/LanguageProvider';

const Testimonials = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsData = [
    {
      quote: t.testimonials.t1Quote,
      author: t.testimonials.t1Author,
      role: t.testimonials.t1Role
    },
    {
      quote: t.testimonials.t2Quote,
      author: t.testimonials.t2Author,
      role: t.testimonials.t2Role
    },
    {
      quote: t.testimonials.t3Quote,
      author: t.testimonials.t3Author,
      role: t.testimonials.t3Role
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  return (
    <section className="testimonials-section container my-5">
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="testimonials-label">{t.testimonials.label}</span>
        <h2 className="testimonials-title">{t.testimonials.heading}</h2>
      </motion.div>

      <div className="testimonials-wrapper">
        <button className="testimonials-arrow left-arrow" onClick={prevTestimonial}>
          &larr;
        </button>

        <div className="testimonials-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="testimonial-card"
            >
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{testimonialsData[currentIndex].quote}</p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonialsData[currentIndex].author}</h4>
                <span className="author-role">{testimonialsData[currentIndex].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="testimonials-arrow right-arrow" onClick={nextTestimonial}>
          &rarr;
        </button>
      </div>

      <div className="testimonials-dots">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
