"use client";

import React, { useState, useEffect } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import "./Menu.css";

const Menu = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href) => pathname === href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`menu-header container-fluid ${scrolled ? "menu-header--scrolled" : ""}`}>
      <Navbar expand="md" className="navbar-dark px-0 navbar-grid">
        <Link href="/" className="navbar-brand logo-container">
          <div className="logo-icon-wrap">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-letter">A</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <span className="logo-text">
            <span className="logo-first">Asraf</span>
            <span className="logo-second">Uddin</span>
          </span>
        </Link>

        {/* Infinite Loop Marquee Ticker */}
        <div className="navbar-ticker d-none d-lg-flex">
          <div className="ticker-track">
            <span className="ticker-item">🟢 Open for Opportunities</span>
            <span className="ticker-item">⚡ Next.js & React</span>
            <span className="ticker-item">💻 MERN Stack</span>
            <span className="ticker-item">🚀 Clean Architecture</span>
            {/* Duplicate set for seamless looping */}
            <span className="ticker-item">🟢 Open for Opportunities</span>
            <span className="ticker-item">⚡ Next.js & React</span>
            <span className="ticker-item">💻 MERN Stack</span>
            <span className="ticker-item">🚀 Clean Architecture</span>
          </div>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto align-items-center">
            <Link
              href="/home"
              className={`nav-link ${isActive("/home") || isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className={`nav-link ${isActive("/portfolio") ? "active" : ""}`}
            >
              Portfolio
            </Link>
            <Link
              href="/pricing"
              className={`nav-link ${isActive("/pricing") ? "active" : ""}`}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className={`nav-link ${isActive("/blog") ? "active" : ""}`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
            >
              Contact
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Toggle Dark/Light Mode"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Resume dropdown */}
            <div className="resume-dropdown ml-md-3">
              <button className="resume-btn">
                Resume
                <svg className="resume-btn__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="resume-dropdown__menu">
                <a
                  href="https://docs.google.com/document/d/1uKyIuKQpeRYfjg9jcU8ATSlvuI6xTzJ7K6GWFDwwnAI/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-dropdown__item"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                  View
                </a>
                <a
                  href="https://docs.google.com/document/d/1uKyIuKQpeRYfjg9jcU8ATSlvuI6xTzJ7K6GWFDwwnAI/export?format=pdf"
                  download="Mohammed_Asraf_Uddin_Resume.pdf"
                  className="resume-dropdown__item"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download
                </a>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Menu;
