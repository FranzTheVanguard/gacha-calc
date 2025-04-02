import React, { useEffect } from 'react';
import './Gfl2Page.css';

const Gfl2Page = () => {
  useEffect(() => {
    document.title = "Girls' Frontline 2";
    
    return () => {
      document.title = "Gacha Calculator";
    };
  }, []);

  return (
    <div className="gfl2-page">
      <div className="gfl2-content">
        <h1>Girls' Frontline 2 Calculator</h1>
        {/* Add GFL2 specific content here */}
      </div>
    </div>
  );
};

export default Gfl2Page; 