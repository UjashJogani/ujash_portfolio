import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header';

import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import GithubPage from './pages/GithubPage';

import { ThemeProvider, useTheme } from './context/ThemeContext';

// 🔥 AppBody component to apply data-theme
const AppBody = () => {
  const { theme } = useTheme();

  return (
    <div data-theme={theme}>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/github" element={<GithubPage />} />
        </Routes>
      </>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppBody />
    </ThemeProvider>
  );
}

export default App;
