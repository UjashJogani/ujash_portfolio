import React from 'react';
import './../styles/ResumePage.css';
import resumeFile from '../assets/Ujash_Jogani_React_Native_Resume.pdf';

const ResumePage = () => {
  return (
    <div className="resume-container">
      <div className="resume-content">
        <h1>📄 Resume</h1>

        <a href={resumeFile} download="Ujash_Jogani_React_Native_Resume.pdf" className="download-btn">
          ⬇️ Download Resume (PDF)
        </a>

        <section>
          <h2>🎓 Education</h2>
          <ul>
            <li><strong>MCA</strong>, Dharmsinh Desai University, Gujarat – 7.90 CGPA</li>
            <li><strong>BCA</strong>, Shri S. V. Patel College – 7.80 CGPA</li>
            <li>GSHEB 12th – 78%</li>
            <li>GSHEB 10th – 76%</li>
          </ul>
        </section>

        <section>
          <h2>💻 Skills</h2>
          <p><strong>Mobile:</strong> React Native, Android Studio, Xcode</p>
          <p><strong>Web:</strong> ReactJS, JavaScript, TypeScript, HTML, CSS</p>
          <p><strong>State Management:</strong> Redux, Redux Toolkit, RTK Query, Redux Saga</p>
          <p><strong>Tools:</strong> Firebase, Stripe, Postman, Swagger, CI/CD, Agile, Jira</p>
          <p><strong>Soft Skills:</strong> Project Management, Leadership, Communication</p>
        </section>

        <section>
          <h2>📜 Certifications</h2>
          <ul>
            <li>React Native – Udemy</li>
            <li>ReactJS – Udemy</li>
            <li>Git & GitHub – Udemy</li>
          </ul>
        </section>

        <section>
          <h2>🌐 Languages</h2>
          <p>English (Professional), Hindi (Fluent), Gujarati (Native)</p>
        </section>

        <section>
          <h2>🎯 Hobbies</h2>
          <p>Reading, Travelling, Music</p>
        </section>
      </div>
    </div>
  );
};

export default ResumePage;
