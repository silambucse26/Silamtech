import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Navbar from '../../Components/Navbar/Navbar';

const Contact = () => {
  const form = useRef();
  const location = useLocation();
  const selectedService = location.state?.selectedService || '';

  const services = [
    'Web Development',
    'UI/UX Design',
    'Mobile App Development',
    'SEO Optimization',
    'Graphic Design',
    'Digital Marketing',
    'Content Writing',
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dzb2dsp',      // ✅ Your EmailJS Service ID
        'template_0fwhpjn',     // ✅ Your EmailJS Template ID
        form.current,
        'gRgKGnP5jcdAnNGfD'     // ✅ Your EmailJS Public Key
      )
      .then(
        (result) => {
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('Email send error:', error);
          alert('❌ Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <div>
      <Navbar />
      <section className="contact-section">
        <h2>Contact Me</h2>
        <p className="subtitle">
          Let’s connect! Whether you’re looking to hire me for a service like{' '}
          <strong>{selectedService || 'Web Development'}</strong> or have a question, I’m here to help.
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="user_name">Full Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="user_email">Email Address</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Service Interested In</label>
            <select id="service" name="service" defaultValue={selectedService}>
              <option value="">-- Select a service --</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
