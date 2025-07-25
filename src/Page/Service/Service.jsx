import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
import Navbar from '../../Components/Navbar/Navbar';

const services = [
  {
    title: 'Web Developer',
    image: 'web developer.jpg',
    p: "I have developed multiple dynamic websites during my internships at Chimertech Pvt Ltd and Edvedha, including responsive portfolios, dashboards, and business landing pages using React, Node.js, and MongoDB. My focus is on performance, scalability, and clean backend integration."
  },
  {
    title: 'Web Design',
    image: 'web designer.jpg',
    p: "I design modern, responsive websites using HTML5, CSS3, and Bootstrap. My design philosophy is to make clean and minimal layouts that enhance user experience and brand identity."
  },
  {
    title: 'UI/UX Designer',
    image: 'ui.jpg',
    p: "I craft intuitive and user-friendly interfaces based on user research and design systems. I follow a design-thinking approach and have worked on real client projects during internships."
  },
  {
    title: 'Figma Developer',
    image: 'figma.jpg',
    p: "I create high-fidelity UI designs and interactive prototypes in Figma. My designs bridge the gap between user expectations and developer execution with pixel-perfect precision."
  },
  {
    title: 'Digital Marketing',
    image: 'digital_marketing.avif',
    p: "I help brands increase their digital presence through SEO-optimized design, social media strategy, and landing pages that convert visitors into leads."
  },
  {
    title: 'Machine Learning',
    image: 'machime learing.png',
    p: "I have applied ML in projects like AI-based cattle disease detection. I'm passionate about integrating AI into real-world solutions that make daily life smarter and safer."
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleContact = (serviceName) => {
    navigate('/contact', { state: { selectedService: serviceName } });
  };

  return (
    <div>
      <Navbar />
      <section className="services-section">
        <h2>My Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} className="service-img" />
              <h3>{service.title}</h3>
              <p className="service-desc">{service.p}</p>
              <button
                className="contact-btn"
                onClick={() => handleContact(service.title)}
              >
                Contact My Service
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
