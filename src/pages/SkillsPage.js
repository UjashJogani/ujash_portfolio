import React from 'react';
import './../styles/SkillsPage.css';
import { useTheme } from '../context/ThemeContext';

const skills = {
  "Mobile Development": [
    { name: "React Native", level: 90 },
    { name: "iOS/Android", level: 85 },
    { name: "TypeScript", level: 88 },
  ],
  "State Management & Backend": [
    { name: "Redux / Redux Toolkit", level: 85 },
    { name: "Firebase", level: 82 },
    { name: "REST APIs", level: 88 },
  ],
  "Development Tools": [
    { name: "Git & GitHub", level: 90 },
    { name: "CI/CD", level: 85 },
    { name: "Figma", level: 80 },
  ],
};

const SkillsPage = () => {
  const { theme } = useTheme();

  return (
    <div className={`skills-container ${theme}`}>
      <h1>💡 Technical Expertise</h1>
      <p>Specialized in mobile app development with React Native and modern JavaScript tooling.</p>

      <div className="skills-section">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="skill-block">
            <h2>{category}</h2>
            {list.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <span>{skill.name}</span>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${skill.level}%` }} />
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
