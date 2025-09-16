import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Silambarasan Portfolio</h1>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a><Link to="/">About</Link></a></li>
        <li><a><Link to="/Skills">Skills</Link></a></li>
        <li><a><Link to="/Project">Projects</Link></a></li>
        <li><a><Link to="/internships">Internships</Link></a></li>
        <li><a><Link to="/services">Services</Link></a></li>
        <li><a><Link to="/Paper">View My Publication</Link></a></li>
        <li><a><Link to="/Gallery">Gallery</Link></a></li>
         <li><a><Link to="/contact">Contact Me</Link></a></li>
        <button onClick={() => window.open('/Silambarasan_Resume_Web Development.pdf', '_blank')}>
  Resume
</button>

      </ul>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
