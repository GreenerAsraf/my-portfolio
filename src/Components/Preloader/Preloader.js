"use client";
import React from "react";
import { motion } from "framer-motion";
import "./Preloader.css";

const Preloader = () => {
  return (
    <motion.div
      className="preloader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="preloader-content">
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
            // Calculate a global index to maintain the staggered animation delay across words
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
                      delay: (previousLettersCount + letterIndex) * 0.08,
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

        <motion.img
          src="/Asraf.jpg"
          alt="Asraf Uddin"
          className="preloader-image"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        />

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
    </motion.div>
  );
};

export default Preloader;
