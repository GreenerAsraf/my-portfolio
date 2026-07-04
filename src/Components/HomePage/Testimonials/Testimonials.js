"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const testimonialsData = [
  {
    quote: "Asraf is an exceptional full-stack developer. His attention to detail and ability to craft beautiful, performant user interfaces is truly unmatched. He elevated our entire web platform.",
    author: "Sarah Jenkins",
    role: "Product Manager at TechNova"
  },
  {
    quote: "Working with Asraf was a breeze. He takes complex backend requirements and turns them into elegant, scalable solutions. A true professional who always delivers on time.",
    author: "Michael Chang",
    role: "CTO, Creative Agency"
  },
  {
    quote: "One of the most dedicated engineers I've worked with. Not only is his code clean and maintainable, but his eye for modern design brings every project to life.",
    author: "Elena Rodriguez",
    role: "Lead Designer, Freelance Client"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
        <span className="testimonials-label">Feedback</span>
        <h2 className="testimonials-title">What People Say</h2>
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
