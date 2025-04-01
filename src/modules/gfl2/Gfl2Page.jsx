import React, { useEffect } from 'react';

const Gfl2Page = () => {
  useEffect(() => {
    document.title = "Girls' Frontline 2";
    
    return () => {
      document.title = "Gacha Calculator";
    };
  }, []);
  return (
    <div className="gfl2-page">
      <h1>Girls' Frontline 2 Calculator</h1>
      {/* Add GFL2 specific content here */}
    </div>
  );
};

export default Gfl2Page; 