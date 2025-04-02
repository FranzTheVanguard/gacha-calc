import React, { useEffect } from 'react';
import './NikkePage.css';

const NikkePage = () => {
  useEffect(() => {
    document.title = "Nikke";
    
    return () => {
      document.title = "Gacha Calculator";
    };
  }, []);

  return (
    <div className="nikke-page">
      <div className="nikke-content">
        <h1>Nikke Calculator</h1>
        {/* Add Nikke specific content here */}
      </div>
    </div>
  );
};

export default NikkePage; 