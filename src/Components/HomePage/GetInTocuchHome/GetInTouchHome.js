"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const GetInTouchHome = () => {
  return (
    <section className="container" style={{ paddingBottom: "80px" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          background: "linear-gradient(135deg, #172A45 0%, #0d2137 100%)",
          border: "1px solid rgba(88,227,196,0.15)",
          borderRadius: "20px",
          padding: "60px 30px",
          textAlign: "center",
          boxShadow: "0 8px 48px rgba(0,0,0,0.3)",
        }}
      >
        <motion.p
          className="light__green__color"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.85rem" }}
        >
          What's Next?
        </motion.p>

        <motion.h1
          className="light__white__color"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.22 }}
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, marginBottom: "16px" }}
        >
          Get In Touch
        </motion.h1>

        <motion.p
          className="light__white__color col-md-6 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.34 }}
          style={{ color: "#a8b2d8", lineHeight: 1.7 }}
        >
          I'd Love to hear from you. Whether you have a question or just want to
          say hi, feel free to drop a message. I'll try my best to get back to
          you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.46 }}
          className="d-flex justify-content-center mt-4"
        >
          <Link href="/contact">
            <motion.button
              className="btn btn-outline-success"
              style={{ padding: "12px 36px", fontSize: "1rem", fontWeight: 600, borderRadius: "8px" }}
              whileHover={{ scale: 1.07, boxShadow: "0 6px 24px rgba(88,227,196,0.3)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Say Hello 👋
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetInTouchHome;
