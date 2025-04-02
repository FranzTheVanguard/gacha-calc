import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  HomePage,
  GbfPage,
  Gfl2Page,
  NikkePage,
  HsrPage,
  ZzzPage
} from './modules/index.jsx';
import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  
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
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gbf">GBF</Link></li>
            <li><Link to="/gfl2">GFL2</Link></li>
            <li><Link to="/nikke">Nikke</Link></li>
            <li><Link to="/hsr">HSR</Link></li>
            <li><Link to="/zzz">ZZZ</Link></li>
          </ul>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>

        <Routes>
          <Route path="/gbf" element={<GbfPage />} />
          <Route path="/gfl2" element={<Gfl2Page />} />
          <Route path="/nikke" element={<NikkePage />} />
          <Route path="/hsr" element={<HsrPage />} />
          <Route path="/zzz" element={<ZzzPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
