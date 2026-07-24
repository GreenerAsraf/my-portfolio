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

  // Add glass class once user scrolls past hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`menu-header container-fluid ${scrolled ? "menu-header--scrolled" : ""}`}>
      <Navbar expand="md" className="navbar-dark px-0">
        <Link href="/" className="navbar-brand logo">
          &lt;Asraf.dev /&gt;
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
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

            <a
              href="https://docs.google.com/document/d/1uKyIuKQpeRYfjg9jcU8ATSlvuI6xTzJ7K6GWFDwwnAI/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-md-3"
            >
              <Button variant="outline-success">Resume</Button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Menu;
