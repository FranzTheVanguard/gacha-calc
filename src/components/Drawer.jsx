import React from 'react';
import { Link } from 'react-router-dom';
import './Drawer.css';

const Drawer = ({ isOpen, onClose, theme, onThemeToggle }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`drawer-backdrop ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h2>Menu</h2>
          <button className="drawer-close" onClick={onClose}>×</button>
        </div>
        
        <nav className="drawer-content">
          <Link to="/gbf" onClick={onClose}>Granblue Fantasy</Link>
          <Link to="/gfl2" onClick={onClose}>Girls' Frontline 2</Link>
          <Link to="/nikke" onClick={onClose}>Nikke</Link>
          <Link to="/hsr" onClick={onClose}>Honkai: Star Rail</Link>
          <Link to="/zzz" onClick={onClose}>Zenless Zone Zero</Link>
        </nav>
        
        <div className="drawer-footer">
          <button className="theme-toggle-drawer" onClick={onThemeToggle}>
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Drawer; 