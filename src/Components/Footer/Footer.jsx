import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css'; // for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-title">Silambarasan Portfolio</h3>

        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/Project">Projects</a></li>
          <li><a href="/Gallery">Achievements</a></li>
          <li><a href="/Gallery">Certifications</a></li>
          <li><a href="/internships">Internships</a></li>
          <li><a href="/Gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/silambarasan-s-556b89277/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/silambucse26" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.youtube.com/@DesignersCode-b2q" target="_blank" rel="noreferrer"><FaYoutube /></a>
          <a href="https://www.instagram.com/silambu__001_" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>

        <p className="footer-copy">&copy; 2025 Silambarasan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
