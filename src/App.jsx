import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Drawer from './components/Drawer';
import {
  HomePage,
  GbfPage,
  Gfl2Page,
  NikkePage,
  HsrPage,
  ZzzPage,
  BaPage
} from './modules/index.jsx';
import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // Dispatch custom event for theme change
    window.dispatchEvent(new Event('themeChange'));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="App">
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gbf">GBF</Link></li>
            <li><Link to="/gfl2">GFL2</Link></li>
            <li><Link to="/nikke">Nikke</Link></li>
            <li><Link to="/hsr">HSR</Link></li>
            <li><Link to="/zzz">ZZZ</Link></li>
            <li><Link to="/ba">BA</Link></li>
          </ul>
          
          {/* Desktop theme toggle */}
          <button className="theme-toggle desktop-only" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>

        {/* Mobile Drawer */}
        <Drawer 
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          theme={theme}
          onThemeToggle={toggleTheme}
        />

        <Routes>
          <Route path="/gbf" element={<GbfPage />} />
          <Route path="/gfl2" element={<Gfl2Page />} />
          <Route path="/nikke" element={<NikkePage />} />
          <Route path="/hsr" element={<HsrPage />} />
          <Route path="/zzz" element={<ZzzPage />} />
          <Route path="/ba" element={<BaPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
