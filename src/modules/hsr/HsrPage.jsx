import React, { useEffect } from 'react';

const HsrPage = () => {
  useEffect(() => {
    document.title = "Honkai: Star Rail";
    
    return () => {
      document.title = "Gacha Calculator";
    };
  }, []);
  return (
    <div className="hsr-page">
      <h1>Honkai: Star Rail Calculator</h1>
      {/* Add HSR specific content here */}
    </div>
  );
};

export default HsrPage; 