// src/components/Gallery.jsx
import React from 'react';
import './Gallery.css';
import Navbar from '../../Components/Navbar/Navbar';

const achievements = [
  { title: 'Web Craft Winner', description: '1st Prize at Christ College Symposium' },
  { title: 'AI Workshop', description: 'Completed AI Workshop Program' },
  { title: 'UI/UX Certification', description: 'Certified by Le Wagon' },
  { title: 'Full Stack Certification', description: 'GreakStack' },
];

const galleryImages = [
  { src: 'WhatsApp Image 2025-07-24 at 19.55.12_325d6a1e.jpg', alt: 'Internship Day 1' },
  { src: 'WhatsApp Image 2025-07-24 at 19.55.12_d7548ae9.jpg', alt: 'Tech Meetup' },
  { src: 'WhatsApp Image 2025-07-24 at 19.55.14_02b00525.jpg', alt: 'Meetup At Infosys' },
  { src: 'WhatsApp Image 2025-07-24 at 19.55.15_9c4041cc.jpg', alt: 'Won First Prize' },
  { src: 'WhatsApp Image 2025-07-24 at 19.55.15_add2c681.jpg', alt: 'Won First Prize' },
  { src: 'WhatsApp Image 2025-07-24 at 19.55.16_483db857.jpg', alt: 'Meetup At Microsoft' },
  { src: 'WhatsApp Image 2025-07-24 at 19.55.16_1136914d.jpg', alt: 'Meetup At Microsoft' },
  { src: 'WhatsApp Image 2025-07-24 at 19.55.17_b6ae5582.jpg', alt: 'Won First Prize' },
  
];

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="gallery-wrapper">
        {/* Achievements List */}
        <section className="section">
          <h2 className="section-title">Achievements & Certificates</h2>
          <ul className="achievement-list">
            {achievements.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </section>

        {/* Certificate Previews */}
        <section className="section">
          <h3 className="sub-title">Certificate Previews</h3>
          <div className="card-grid">
            {achievements.map((item, index) => (
              <div className="card" key={index}>
                <h3 className="card-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Responsive Image Gallery without Slider */}
        <section className="section">
          <h2 className="section-title">My Gallery</h2>
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div className="gallery-item" key={index}>
                <img src={img.src} alt={img.alt} className="gallery-img" />
                <p className="image-caption">{img.alt}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;
