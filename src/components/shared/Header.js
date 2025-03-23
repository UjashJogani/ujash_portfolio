import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import '../../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'GitHub', path: '/github' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div data-theme={theme}>
      <header className="header">
        <div className="logo">Ujash Jogani</div>
        <nav className="nav">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </header>
    </div>
  );
};

export default Header;
