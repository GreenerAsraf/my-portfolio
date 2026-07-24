"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-inner container">

                {/* Brand + tagline */}
                <div className="footer-brand">
                    <span className="footer-logo">&lt;Asraf.dev /&gt;</span>
                    <p className="footer-tagline">
                        Building scalable, high-performance web applications<br />
                        with modern JavaScript ecosystems.
                    </p>
                </div>

                {/* Quick links */}
                <nav className="footer-links" aria-label="Footer navigation">
                    <Link href="/" className="footer-link">Home</Link>
                    <Link href="/about" className="footer-link">About</Link>
                    <Link href="/portfolio" className="footer-link">Portfolio</Link>
                    <Link href="/blog" className="footer-link">Blog</Link>
                    <Link href="/contact" className="footer-link">Contact</Link>
                </nav>

                {/* Social icons */}
                <div className="footer-socials">
                    <a href="https://github.com/GreenerAsraf" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/mohammed-asraf-uddin/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://medium.com/@asraf.uddin4407" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Medium">
                        <FontAwesomeIcon icon={faMedium} />
                    </a>
                </div>

                {/* Bottom bar */}
                <div className="footer-bottom">
                    <span className="footer-divider" />
                    <p className="footer-copy">
                        © {new Date().getFullYear()} Mohammed Asraf Uddin — Designed &amp; built with ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;