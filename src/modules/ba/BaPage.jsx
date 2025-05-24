import React, { useState, useEffect } from 'react';
import './BaPage.css';
import BackgroundImage from './components/BackgroundImage';
import PyroxeneIcon from '../../assets/ba_currency_pyroxene.png';

const BaPage = () => {
  useEffect(() => {
    document.title = "Blue Archive";
    return () => {
      document.title = "Gacha Calculator";
    };
  }, []);

  const [pyroxenes, setPyroxenes] = useState(() => localStorage.getItem('ba_pyroxenes') || '0');
  const [singleTickets, setSingleTickets] = useState(() => localStorage.getItem('ba_single_tickets') || '0');
  const [tenTickets, setTenTickets] = useState(() => localStorage.getItem('ba_ten_tickets') || '0');
  const [totalRolls, setTotalRolls] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [percentageColor, setPercentageColor] = useState('#ff0000');

  const interpolateColor = (start, end, percent) => {
    const startRGB = {
      r: parseInt(start.slice(1, 3), 16),
      g: parseInt(start.slice(3, 5), 16),
      b: parseInt(start.slice(5, 7), 16)
    };
    const endRGB = {
      r: parseInt(end.slice(1, 3), 16),
      g: parseInt(end.slice(3, 5), 16),
      b: parseInt(end.slice(5, 7), 16)
    };

    const r = Math.round(startRGB.r + (endRGB.r - startRGB.r) * percent);
    const g = Math.round(startRGB.g + (endRGB.g - startRGB.g) * percent);
    const b = Math.round(startRGB.b + (endRGB.b - startRGB.b) * percent);

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  // localStorage
  useEffect(() => {
    localStorage.setItem('ba_pyroxenes', pyroxenes);
    localStorage.setItem('ba_single_tickets', singleTickets);
    localStorage.setItem('ba_ten_tickets', tenTickets);
  }, [pyroxenes, singleTickets, tenTickets]);

  useEffect(() => {
    const pyroxeneRolls = Math.floor((parseInt(pyroxenes) || 0) / 120); // 120 pyroxenes per roll
    const singleRolls = parseInt(singleTickets) || 0;
    const tenRolls = (parseInt(tenTickets) || 0) * 10;
    
    const total = pyroxeneRolls + singleRolls + tenRolls;
    setTotalRolls(total);
    
    const percent = Math.floor((total / 200) * 100); // 200 rolls for spark
    setPercentage(percent);

    // Color based on percentage - using blue/purple gradient
    const colorPercent = Math.min(percent / 100, 1);
    const color = interpolateColor('#ff0000', '#00ff00', colorPercent); // End color is BlueViolet
	console.log(color);
    setPercentageColor(color);
  }, [pyroxenes, singleTickets, tenTickets]);

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    if (value === '') {
      setter('0');
    } else {
      setter(value);
    }
  };

  return (
    <div className="ba-page">
      <BackgroundImage />
      <div className="ba-calculator">
        <h1 className="ba-title">Blue Archive Spark Calculator</h1>
        
        <div className="calculator-content">
          <div className="calculator-column">
            <div className="input-group">
              <label className="input-label">Pyroxenes</label>
              <div className="input-with-icon">
                <img src={PyroxeneIcon} alt="Pyroxene" className="currency-icon" />
                <input
                  type="number"
                  className="input-field"
                  value={pyroxenes}
                  onChange={(e) => handleInputChange(e, setPyroxenes)}
                  onFocus={handleFocus}
                  min="0"
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Single Tickets</label>
              <input
                type="number"
                className="input-field"
                value={singleTickets}
                onChange={(e) => handleInputChange(e, setSingleTickets)}
                onFocus={handleFocus}
                min="0"
              />
            </div>

            <div className="input-group">
              <label className="input-label">10x Tickets</label>
              <input
                type="number"
                className="input-field"
                value={tenTickets}
                onChange={(e) => handleInputChange(e, setTenTickets)}
                onFocus={handleFocus}
                min="0"
              />
            </div>
          </div>

          <div className="calculator-column">
            <div className="results-container">
              <div className="result-item">
                <span className="result-label">Total Rolls</span>
                <span className="result-value">{totalRolls}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Spark Percentage</span>
                <span className="percentage">
                  <span className={percentage >= 100 ? 'blue-violet' : ''} style={{ color: percentage >= 100 ? undefined : percentageColor }}>
                    {percentage}%
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaPage; 