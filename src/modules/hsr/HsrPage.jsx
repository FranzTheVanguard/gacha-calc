import React, { useState, useEffect } from 'react';
import './HsrPage.css';
// import BackgroundImage from './components/BackgroundImage'; // Removed
import StellarJadeIcon from '../../assets/hsr_currency_stellarjade.png';
import PassIcon from '../../assets/hsr_currency_pass.png';
import SpecialPassIcon from '../../assets/hsr_currency_specialpass.png';

const HsrPage = () => {
  useEffect(() => {
    document.title = "Honkai: Star Rail";
    return () => {
      document.title = "Gacha Calculator";
    };
  }, []);

  const [stellarJades, setStellarJades] = useState(() => localStorage.getItem('hsr_stellar_jades') || '0');
  const [singleTickets, setSingleTickets] = useState(() => localStorage.getItem('hsr_single_tickets') || '0');
  const [specialPasses, setSpecialPasses] = useState(() => localStorage.getItem('hsr_special_passes') || '0');
  const [totalLimitedWarps, setTotalLimitedWarps] = useState(0);
  const [warpsToPity, setWarpsToPity] = useState(90);

  // localStorage
  useEffect(() => {
    localStorage.setItem('hsr_stellar_jades', stellarJades);
    localStorage.setItem('hsr_single_tickets', singleTickets);
    localStorage.setItem('hsr_special_passes', specialPasses);
  }, [stellarJades, singleTickets, specialPasses]);

  useEffect(() => {
    const jadeRolls = Math.floor((parseInt(stellarJades) || 0) / 160);
    const specialPassRolls = parseInt(specialPasses) || 0;
    
    const limitedWarps = jadeRolls + specialPassRolls;
    setTotalLimitedWarps(limitedWarps);

    setWarpsToPity(Math.max(0, 90 - limitedWarps));

  }, [stellarJades, specialPasses]);

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    if (value === '' || parseInt(value, 10) < 0) {
        setter('0');
    } else {
        const cleanValue = String(parseInt(value, 10));
        setter(cleanValue);
    }
  };

  return (
    <div className="hsr-page">
      <div className="hsr-calculator">
        <h1 className="hsr-title">Honkai: Star Rail Warp Calculator</h1>
        
        <div className="hsr-input-group-top-center">
          <label className="hsr-input-label">Stellar Jade</label>
          <div className="hsr-input-with-icon">
            <img src={StellarJadeIcon} alt="Stellar Jade" className="hsr-currency-icon" />
            <input
              type="number"
              className="hsr-input-field"
              value={stellarJades}
              onChange={(e) => handleInputChange(e, setStellarJades)}
              onFocus={handleFocus}
              min="0"
            />
          </div>
        </div>

        <div className="hsr-calculator-content-bottom">
          <div className="hsr-input-group-bottom-left">
            <label className="hsr-input-label">Star Rail Pass</label>
            <div className="hsr-input-with-icon">
              <img src={PassIcon} alt="Star Rail Pass" className="hsr-currency-icon" />
              <input
                type="number"
                className="hsr-input-field"
                value={singleTickets}
                onChange={(e) => handleInputChange(e, setSingleTickets)}
                onFocus={handleFocus}
                min="0"
              />
            </div>
          </div>

          <div className="hsr-separator-line"></div>

          <div className="hsr-input-group-bottom-right">
            <label className="hsr-input-label">Star Rail Special Pass</label>
            <div className="hsr-input-with-icon">
              <img src={SpecialPassIcon} alt="Star Rail Special Pass" className="hsr-currency-icon" />
              <input
                type="number"
                className="hsr-input-field"
                value={specialPasses}
                onChange={(e) => handleInputChange(e, setSpecialPasses)}
                onFocus={handleFocus}
                min="0"
              />
            </div>
          </div>
        </div>
        
        <div className="hsr-results-container">
          <div className="hsr-result-item">
            <span className="hsr-result-label">Total Limited Warps</span>
            <span className="hsr-result-value">{totalLimitedWarps}</span>
          </div>
          <div className="hsr-result-item">
            <span className="hsr-result-label">Warps to 5* Pity</span>
            <span className="hsr-result-value">{warpsToPity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HsrPage; 