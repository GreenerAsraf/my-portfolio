"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import './GetInTouchHome.css';

import emailjs from "emailjs-com";

const GetInTouchHome = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_0jbxlu6",
        "template_gjnsofi",
        e.target,
        "rHtvBbZ_lbS3OjOIH"
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          setIsSuccess(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setIsSuccess(false), 4000);
        },
        (error) => {
          setIsSubmitting(false);
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <section className="get-in-touch-section container">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="contact-card__info">
          <motion.p
            className="contact-card__label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What's Next?
          </motion.p>

          <motion.h2
            className="contact-card__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            className="contact-card__desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </motion.p>
        </div>

        <motion.div
          className="contact-card__form-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.46 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required 
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? (
                <span className="spinner"></span>
              ) : isSuccess ? (
                "Message Sent! ✓"
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetInTouchHome;
