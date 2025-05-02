import React, { useEffect } from 'react';
import './HsrPage.css';

const HsrPage = () => {
  useEffect(() => {
    document.title = "Honkai: Star Rail";
    
    return () => {
      document.title = "Gacha Calculator";
    };
  }, []);

  return (
    <div className="hsr-page">
      <div className="hsr-content">
        <h1>Honkai: Star Rail Warp Calculator</h1>
        
      </div>
    </div>
  );
};

export default HsrPage; 