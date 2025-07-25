// src/components/Paper.jsx
import React from 'react';
import './Paperpublish.css';
import Navbar from '../../Components/Navbar/Navbar';

const Paper = () => {
  return (
    <div>
      <Navbar />
      <div className="paper-wrapper">
        {/* Page Heading */}
        <h2 className="page-title">Published Research Paper</h2>

        <div className="paper-card">
          <img src="paper.png" alt="Paper Preview" className="paper-img" />

          <div className="paper-info">
            <h1>Food Waste Management Using Web Application</h1>
            <p>
              This paper proposes a smart solution to reduce food waste by redistributing
              leftover food from events, homes, and restaurants to NGOs or people in need using
              location-based AI technology.
            </p>

            <a
              href="FoodBridge_Project_Paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="view-paper-btn"
            >
              View My Paper
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paper;
