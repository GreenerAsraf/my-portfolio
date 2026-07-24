"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Preloader.css";

const Preloader = ({ onComplete }) => {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // Start sliding the doors open automatically after the entry animations finish (approx 1.8s)
    const openTimer = setTimeout(() => {
      setIsOpening(true);
    }, 1800);

    // Call the parent onComplete callback once the doors are fully open (1s transition duration)
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2800);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="preloader-container">
      {/* Split Doors */}
      <div className={`preloader-door left-door ${isOpening ? "open" : ""}`} />
      <div className={`preloader-door right-door ${isOpening ? "open" : ""}`} />

      {/* Content overlay */}
      <div className={`preloader-content ${isOpening ? "fade-out" : ""}`}>
        {/* Name Logo */}
        <motion.div
          className="preloader-name-container"
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1.2,
            type: "spring",
            bounce: 0.5,
          }}
        >
          {"Connecting to ASRAF UDDIN".split(" ").map((word, wordIndex, array) => {
            const previousLettersCount = array.slice(0, wordIndex).join("").length;
            
            return (
              <span key={wordIndex} className="preloader-word">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    className="preloader-letter"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: (previousLettersCount + letterIndex) * 0.06,
                      ease: "easeOut",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
                {wordIndex !== array.length - 1 && <span className="preloader-space">&nbsp;</span>}
              </span>
            );
          })}
        </motion.div>

        {/* Profile Pic */}
        <motion.img
          src="/Asraf.webp"
          alt="Asraf Uddin"
          className="preloader-image"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />

        {/* Spinner */}
        <motion.div
          className="preloader-spinner"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default Preloader;
