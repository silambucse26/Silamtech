import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';
import Navbar from '../../Components/Navbar/Navbar';

const Education = () => {
  return (
    <>
      <Navbar />

  <section className="education-section">
  <h2>My Education</h2>

  <div className="education-cards">
    <div className="education-card">
      <FaGraduationCap className="edu-icon" />
      <h3>B.E. Computer Science</h3>
      <p>Er.Perumal Manimekalai College of Engineering Tech | CGPA: 8.3</p>
    </div>

    <div className="education-card">
      <FaGraduationCap className="edu-icon" />
      <h3>12th Standard</h3>
      <p>Model Higher Secondary School, Oldpet, Krishnagiri | 86%</p>
    </div>
  </div>
</section>

    </>
  );
};

export default Education;
