import React from 'react';
import './../styles/ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1>🚀 Professional Projects</h1>

        <div className="project-block">
          <h2>LOCOVERY</h2>
          <ul>
            <li>Developed chat functionality with audio/video calling</li>
            <li>Integrated OneSignal push notifications</li>
            <li>Used Redux Saga for efficient state management</li>
          </ul>
        </div>

        <div className="project-block">
          <h2>FOODJA</h2>
          <ul>
            <li>Built a food delivery app with Google Maps for driver navigation</li>
            <li>Implemented order mgmt, client ratings, offline handling, and notifications</li>
          </ul>
        </div>

        <div className="project-block">
          <h2>UPKEEP</h2>
          <ul>
            <li>Online beauty appointment booking app</li>
            <li>Integrated Stripe payments, social auth, and map clustering</li>
            <li>Used Redux Toolkit for managing state</li>
          </ul>
        </div>

        <div className="project-block">
          <h2>TRADEFOOX</h2>
          <ul>
            <li>Added a reel-like video section with background upload & download services</li>
            <li>Users can like, comment, save, and share videos</li>
          </ul>
        </div>

        <div className="project-block">
          <h2>MY SPORT FRIEND</h2>
          <ul>
            <li>Built complete app from scratch including real-time chat (Socket.io)</li>
            <li>Created match scheduling and match group chats</li>
            <li>Implemented in-app subscription and RTK Query for APIs</li>
          </ul>
        </div>

        <h1>🧪 Personal Projects</h1>

        <div className="project-block">
          <h2>E-commerce App</h2>
          <p>A cross-platform e-commerce app built with React Native and Redux.</p>
        </div>

        <div className="project-block">
          <h2>Fitness Tracker</h2>
          <p>A fitness tracking app with real-time analytics and workout plans.</p>
        </div>

        <div className="project-block">
          <h2>Social Media App</h2>
          <p>A social media app with features like posts, comments, and likes.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
