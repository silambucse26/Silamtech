import React from 'react';
import './Project.css';
import Navbar from '../../Components/Navbar/Navbar';

const projects = [
  {
    title: 'Chimertech Official Website (Intership Project)',
    description: 'Created a responsive portfolio website for Chimertech Pvt Ltd. Showcases biotechnology and AI innovation.',
    image: 'Chimertech.png',
    link: 'https://www.chimertech.com/',
  },
  {
    title: 'Nusaternaku Cattle Website(Intership Project)',
    description: 'Developed for an Indonesian cattle company. Portfolio site connecting with global partners.',
    image: 'Nusaternaku.png',
    link: 'https://www.nusaternaku.com/',
  },
  {
    title: 'My intern Ceo Portfolio Website(Internship Project)',
    description: 'I developed this project during my internship for my mentor, the Co-Founder and CEO of Chimertech Pvt Ltd.',
    image: 'Ragul portfolio (1).png',
    link: 'https://www.ragul.phd/',
  },
  {
    title: 'Smart Grocery Delivery',
    description: 'A location-based smart app that connects customers to nearby supermarkets for grocery delivery.',
    image: 'SMART.png',
    link: '#',
  },
  {
    title: 'Pizza Delivery App',
    description: 'Frontend pizza ordering app using React. Clean UI for easy selection and ordering.',
    image: 'PIZZ.png',
    link: 'https://github.com/silambucse26/Pizza-delivery',
  },
  {
    title: 'Restaurant Menu UI/UX (Figma)',
    description: 'Designed in Figma to digitally order menu items from restaurant tables.',
    image: 'cafe.png',
    link: '#',
  },
];

const Project = () => {
  return (
    <>
      <Navbar />
      <section className="project-section">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <img src={proj.image} alt={proj.title} className="project-image" />
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
