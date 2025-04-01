import React, { useEffect } from 'react';

const NikkePage = () => {
  useEffect(() => {
    document.title = "Nikke: Goddess of Victory";
    
    return () => {
      document.title = "Gacha Calculator";
    };
  }, []);
  return (
    <div className="nikke-page">
      <h1>Goddess of Victory: Nikke Calculator</h1>
      {/* Add Nikke specific content here */}
    </div>
  );
};

export default NikkePage; 