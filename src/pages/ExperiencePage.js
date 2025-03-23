import React from 'react';
import './../styles/ExperiencePage.css';

const ExperiencePage = () => {
  return (
    <div className="experience-container">
      <div className="experience-content">
        <h1>💼 Work Experience</h1>

        <div className="experience-block">
          <h2>Applaunch.io</h2>
          <span className="role">React Native Developer</span>
          <span className="duration">Sep 2024 – Present</span>
          <ul>
            <li>Developed, managed, and deployed 4 React Native apps to Play Store & App Store.</li>
            <li>Maintained on-time QA delivery with minimal bugs and error-free production submissions.</li>
          </ul>
        </div>

        <div className="experience-block">
          <h2>Qodors Technologies</h2>
          <span className="role">Assistant Project Lead & React Native Developer</span>
          <span className="duration">Jul 2022 – Aug 2024</span>
          <ul>
            <li>Led product planning with 7+ developers and UI/UX teams resulting in 3 app launches.</li>
            <li>Built a local business management system with real-time chat using React Native.</li>
            <li>Created a US-based beauty treatment booking app (React Native + Expo + Stripe).</li>
          </ul>
        </div>

        <div className="experience-block">
          <h2>Qodors Technologies</h2>
          <span className="role">React Native Developer (Full-Time Intern)</span>
          <span className="duration">Dec 2021 – Jun 2022</span>
          <ul>
            <li>Developed 15+ user screens and 20+ dynamic components with reusable layouts.</li>
          </ul>
        </div>

        <div className="experience-block">
          <h2>🔧 Tech Stack Highlights</h2>
          <p>
            React Native, Google Auth, Firebase, Stripe, Redux Toolkit, MMKV Storage, Expo, Socket.io, Axios
          </p>
          <h3>Notable Projects</h3>
          <ul>
            <li>Locovery – Business management with client chat & support</li>
            <li>Foodja – Real-time delivery tracking & orders</li>
            <li>Upkeep – Stripe-based beauty appointment booking</li>
            <li>Tradefoox – Multilingual social app</li>
            <li>My Sport Friend – Sports networking app with chat</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
