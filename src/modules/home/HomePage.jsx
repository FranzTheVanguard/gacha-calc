import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  useEffect(() => {
    document.title = "Gacha Calculator";
    // No need for cleanup function since this is the default title
  }, []);

  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Gacha Calculator</h1>
        <p>All of your rolls, in one place.</p>
        
        <div className="game-cards">
          <Link to="/gbf" className="game-card-link">
            <div className="game-card">
              <h2>Granblue Fantasy</h2>
              <p>Spark Calculator</p>
            </div>
          </Link>
          
          <Link to="/gfl2" className="game-card-link">
            <div className="game-card not-ready">
              <h2>Girls' Frontline 2</h2>
              <p>Coming soon...</p>
            </div>
          </Link>
          
          <Link to="/nikke" className="game-card-link">
            <div className="game-card not-ready">
              <h2>Nikke</h2>
              <p>Coming soon...</p>
            </div>
          </Link>
          
          <Link to="/hsr" className="game-card-link">
            <div className="game-card">
              <h2>Honkai: Star Rail</h2>
              <p>Warp Calculator</p>
            </div>
          </Link>
          
          <Link to="/zzz" className="game-card-link">
            <div className="game-card not-ready">
              <h2>Zenless Zone Zero</h2>
              <p>Coming soon...</p>
            </div>
          </Link>

          <Link to="/ba" className="game-card-link">
            <div className="game-card">
              <h2>Blue Archive</h2>
              <p>Spark Calculator</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 