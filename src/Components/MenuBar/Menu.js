"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { useLanguage } from "../LanguageProvider/LanguageProvider";
import "./Menu.css";

const Menu = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const collapseRef = useRef(null);

  const isActive = (href) => pathname === href;

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className={`menu-header container-fluid ${scrolled ? "menu-header--scrolled" : ""}`}>
      <nav className="navbar navbar-dark px-0 navbar-grid">
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
            <span className="ticker-item">{t.nav.ticker1}</span>
            <span className="ticker-item">{t.nav.ticker2}</span>
            <span className="ticker-item">{t.nav.ticker3}</span>
            <span className="ticker-item">{t.nav.ticker4}</span>
            {/* Duplicate set for seamless looping */}
            <span className="ticker-item">{t.nav.ticker1}</span>
            <span className="ticker-item">{t.nav.ticker2}</span>
            <span className="ticker-item">{t.nav.ticker3}</span>
            <span className="ticker-item">{t.nav.ticker4}</span>
          </div>
        </div>

        {/* Mobile-only: compact language toggle in top bar */}
        <div className="lang-toggle-mobile d-md-none">
          <button
            className="lang-toggle-mobile__btn"
            onClick={() => changeLanguage(language === "bn" ? "en" : "bn")}
            aria-label="Switch Language"
          >
            <span className="lang-toggle-mobile__flag">{language === "bn" ? "🇧🇩" : "🇺🇸"}</span>
            <span className="lang-toggle-mobile__code">{language === "bn" ? "বাং" : "EN"}</span>
          </button>
        </div>

        {/* Custom hamburger toggle — replaces Navbar.Toggle */}
        <button
          className={`navbar-toggler${menuOpen ? "" : " collapsed"}`}
          type="button"
          aria-controls="basic-navbar-nav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Custom collapse — replaces Navbar.Collapse */}
        <div
          ref={collapseRef}
          className={`navbar-collapse collapse${menuOpen ? " show" : ""}`}
          id="basic-navbar-nav"
        >
          <div className="navbar-nav ml-auto align-items-center">
            <Link
              href="/home"
              className={`nav-link ${isActive("/home") || isActive("/") ? "active" : ""}`}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/portfolio"
              className={`nav-link ${isActive("/portfolio") ? "active" : ""}`}
            >
              {t.nav.portfolio}
            </Link>
            <Link
              href="/pricing"
              className={`nav-link ${isActive("/pricing") ? "active" : ""}`}
            >
              {t.nav.pricing}
            </Link>
            <Link
              href="/blog"
              className={`nav-link ${isActive("/blog") ? "active" : ""}`}
            >
              {t.nav.blog}
            </Link>
            <Link
              href="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
            >
              {t.nav.contact}
            </Link>

            {/* Language Switcher Dropdown (desktop only — mobile uses top-bar toggle) */}
            <div className="lang-dropdown ml-md-2 mr-md-2 d-none d-md-flex">
              <button className="lang-btn" aria-label="Select Language">
                <span className="lang-flag">{language === "bn" ? "🇧🇩" : "🇺🇸"}</span>
                <span className="lang-code">{language === "bn" ? "বাংলা" : "EN"}</span>
                <svg className="lang-btn__chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="lang-dropdown__menu">
                <button
                  onClick={() => changeLanguage("en")}
                  className={`lang-dropdown__item ${language === "en" ? "active" : ""}`}
                >
                  <span>🇺🇸</span> English (EN)
                </button>
                <button
                  onClick={() => changeLanguage("bn")}
                  className={`lang-dropdown__item ${language === "bn" ? "active" : ""}`}
                >
                  <span>🇧🇩</span> বাংলা (BN)
                </button>
              </div>
            </div>

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
                {t.nav.resume}
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
                  {t.nav.view}
                </a>
                <a
                  href="https://docs.google.com/document/d/1uKyIuKQpeRYfjg9jcU8ATSlvuI6xTzJ7K6GWFDwwnAI/export?format=pdf"
                  download="Mohammed_Asraf_Uddin_Resume.pdf"
                  className="resume-dropdown__item"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  {t.nav.download}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
