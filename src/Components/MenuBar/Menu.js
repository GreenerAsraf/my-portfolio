"use client";

import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Menu.css";

const Menu = () => {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <header className="mt-3 container-fluid">
      <Navbar expand="md" className="navbar-dark px-0">
        <Link href="/" className="navbar-brand logo light__white__color">
          Sparkle Zone
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
            <a
              href="https://drive.google.com/file/d/1dGvygIl8YzuTfzAveymmQnuiiEcM2EYo/view"
              target="_blank"
              rel="noopener noreferrer"
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
