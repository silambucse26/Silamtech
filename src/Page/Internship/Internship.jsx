import React from 'react';
import './Intership.css';
import Navbar from '../../Components/Navbar/Navbar';

const internships = [
  {
    company: 'Chimertech Pvt Ltd',
    role: 'Web Developer & UI/UX Designer',
    duration: '30 Days Internship',
    description:
      'Built multiple projects in web development and UI/UX design. Worked closely with the Co-Founder & CEO on real-time applications.',
    logo: 'Chimertech.jpg',
  },
  {
    company: 'Edvedha Technologies',
    role: 'Web Developer Intern',
    duration: '3 Months Internship',
    description:
      'Focused on web development fundamentals and real-time projects. Gained hands-on experience with frontend and backend development.',
    logo: 'edvedha.jpg',
  },
];

const Internship = () => {
  return (
    <>
      <Navbar />
      <section className="internship-section">
        <h2>My Internships</h2>
        <div className="internship-container">
          {internships.map((item, index) => (
            <div className="internship-card" key={index}>
              <img src={item.logo} alt={item.company} className="internship-logo" />
              <h3>{item.company}</h3>
              <p><strong>Role:</strong> {item.role}</p>
              <p><strong>Duration:</strong> {item.duration}</p>
              <p className="intern-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Internship;
