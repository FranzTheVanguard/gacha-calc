import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css'; // We will create this CSS file next

const Navigation = ({ theme, toggleTheme, isDrawerOpen, setIsDrawerOpen, getNavLinkClass, navLinks }) => {
  return (
    <nav className="nav-menu">
      {/* Mobile navigation */}
      <div className="mobile-nav">
        <button className="menu-button" onClick={() => setIsDrawerOpen(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
        </button>
        <Link to="/" className="home-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </Link>
      </div>

      {/* Desktop navigation */}
      <ul className="desktop-nav">
        {navLinks.map(link => (
          <li key={link.to}>
            <NavLink to={link.to} className={getNavLinkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      
      {/* Desktop theme toggle */}
      <button className="theme-toggle desktop-only" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navigation; 