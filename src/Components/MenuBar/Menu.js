"use client";

import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import "./Menu.css";

const Menu = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const isActive = (href) => pathname === href;

  return (
    <header className="mt-3 container-fluid">
      <Navbar expand="md" className="navbar-dark px-0">
        <Link href="/" className="navbar-brand logo light__white__color">
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
              className={`nav-link ${isActive("/about") || isActive("/about") ? "active" : ""}`}
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
              href="https://drive.google.com/file/d/1dGvygIl8YzuTfzAveymmQnuiiEcM2EYo/view"
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
