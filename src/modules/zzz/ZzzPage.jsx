import React, { useEffect } from 'react';

const ZzzPage = () => {
  useEffect(() => {
    document.title = "Zenless Zone Zero";
    
    return () => {
      document.title = "Gacha Calculator";
    };
  }, []);
  return (
    <div className="zzz-page">
      <h1>Zenless Zone Zero Calculator</h1>
      {/* Add ZZZ specific content here */}
    </div>
  );
};

export default ZzzPage; 