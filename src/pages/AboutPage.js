import React from 'react';
import './../styles/AboutPage.css';
import { useTheme } from '../context/ThemeContext';

const AboutPage = () => {
  const { theme } = useTheme();

  return (
    <div className={`about-container ${theme}`}>
      <div className="about-content">
        <div className="text-section">
          <h1>👋 About Me</h1>
          <p>
            Hi, I'm <strong>Ujash Jogani</strong>, a passionate React Native Developer with over 3 years of experience
            building high-performance cross-platform mobile applications.
            I specialize in creating scalable, intuitive, and visually appealing apps for both iOS and Android platforms.
          </p>
          <p>
            I’ve successfully delivered 5+ real-world mobile apps for clients across various industries.
            I'm currently exploring opportunities in product-based companies where I can help shape products end-to-end.
          </p>

          <h2>📱 Featured Projects</h2>

          <div className="project-block">
            <h3>LOCOVERY</h3>
            <ul>
              <li>Developed chat functionality with audio/video calling.</li>
              <li>Integrated OneSignal notifications.</li>
              <li>Used Redux Saga for efficient state management.</li>
            </ul>
          </div>

          <div className="project-block">
            <h3>FOODJA</h3>
            <ul>
              <li>Built a food delivery application with Google Maps integration for driver navigation.</li>
              <li>Implemented order management, client ratings, offline app handling, and push notifications.</li>
            </ul>
          </div>

          <div className="project-block">
            <h3>UPKEEP</h3>
            <ul>
              <li>Developed an online beauty treatment booking app.</li>
              <li>Integrated Stripe payments, map clustering, and social login authentication.</li>
              <li>Used Redux Toolkit for scalable data management.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
