import React from "react";
import "./About.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        {/* Text Section */}
        <div className="about-text">
          <h1>
            Hi, I am a <br />
            <span className="highlight">WEB DEVELOPER AND UI/UX</span> designer.
          </h1>
          <p>
            I’m Silambarasan, a passionate Full Stack Web Developer and UI/UX Designer currently pursuing my B.E. in Computer Science Engineering at Er. Perumal Manimekalai College of Engineering. With hands-on experience in developing dynamic web applications using the MERN stack and designing user-centric interfaces in Figma, I bridge the gap between functionality and design.
          </p>

          

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://www.instagram.com/silambu__001_" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/silambarasan-s-556b89277/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/@DesignersCode-b2q" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://github.com/silambucse26" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="about-image">
          <img src="profile.jpg" alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
