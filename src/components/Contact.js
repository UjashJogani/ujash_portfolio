import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email integration logic here (EmailJS)
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-section glass-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>joganiujash@gmail.com</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p>+91 XXXXXXXXXX</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Gujarat, India</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i>
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 