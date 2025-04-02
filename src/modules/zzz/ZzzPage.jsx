import React, { useEffect } from 'react';
import './ZzzPage.css';

const ZzzPage = () => {
  useEffect(() => {
    document.title = "Zenless Zone Zero";
    
    return () => {
      document.title = "Gacha Calculator";
    };
  }, []);

  return (
    <div className="zzz-page">
      <div className="zzz-content">
        <h1>Zenless Zone Zero Calculator</h1>
        {/* Add ZZZ specific content here */}
      </div>
    </div>
  );
};

export default ZzzPage; 