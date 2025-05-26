import React, { useState, useEffect } from 'react';
import './NikkePage.css';
import GemIcon from '../../assets/nikke_currency_gem.png';
import VoucherIcon from '../../assets/nikke_currency_voucher.png';
import AdvancedVoucherIcon from '../../assets/nikke_currency_advvoucher.png';

const NikkePage = () => {
  useEffect(() => {
    document.title = "Nikke";
    return () => {
      document.title = "Gacha Calculator";
    };
  }, []);

  const [gems, setGems] = useState(() => localStorage.getItem('nikke_gems') || '0');
  const [vouchers, setVouchers] = useState(() => localStorage.getItem('nikke_vouchers') || '0');
  const [advancedVouchers, setAdvancedVouchers] = useState(() => localStorage.getItem('nikke_advanced_vouchers') || '0');
  const [totalPulls, setTotalPulls] = useState(0);

  // localStorage
  useEffect(() => {
    localStorage.setItem('nikke_gems', gems);
    localStorage.setItem('nikke_vouchers', vouchers);
    localStorage.setItem('nikke_advanced_vouchers', advancedVouchers);
  }, [gems, vouchers, advancedVouchers]);

  useEffect(() => {
    const gemRolls = Math.floor((parseInt(gems) || 0) / 300); // Assuming 300 gems per pull
    const advancedVoucherRolls = parseInt(advancedVouchers) || 0;
    
    const calculatedTotalPulls = gemRolls + advancedVoucherRolls;
    setTotalPulls(calculatedTotalPulls);

  }, [gems, advancedVouchers]);

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
    <div className="nikke-page">
      <div className="nikke-calculator">
        <h1 className="nikke-title">Nikke Pulls Calculator</h1>
        
        <div className="nikke-input-group-top-center">
          <label className="nikke-input-label">Gems</label>
          <div className="nikke-input-with-icon">
            <img src={GemIcon} alt="Gems" className="nikke-currency-icon gem-icon" />
            <input
              type="number"
              className="nikke-input-field"
              value={gems}
              onChange={(e) => handleInputChange(e, setGems)}
              onFocus={handleFocus}
              min="0"
            />
          </div>
        </div>

        <div className="nikke-calculator-content-bottom">
          <div className="nikke-input-group-bottom-left">
            <label className="nikke-input-label">Voucher</label>
            <div className="nikke-input-with-icon">
              <img src={VoucherIcon} alt="Voucher" className="nikke-currency-icon" />
              <input
                type="number"
                className="nikke-input-field"
                value={vouchers}
                onChange={(e) => handleInputChange(e, setVouchers)}
                onFocus={handleFocus}
                min="0"
              />
            </div>
          </div>

          <div className="nikke-separator-line"></div>

          <div className="nikke-input-group-bottom-right">
            <label className="nikke-input-label">Advanced Voucher</label>
            <div className="nikke-input-with-icon">
              <img src={AdvancedVoucherIcon} alt="Advanced Voucher" className="nikke-currency-icon" />
              <input
                type="number"
                className="nikke-input-field"
                value={advancedVouchers}
                onChange={(e) => handleInputChange(e, setAdvancedVouchers)}
                onFocus={handleFocus}
                min="0"
              />
            </div>
          </div>
        </div>
        
        <div className="nikke-results-container">
          <div className="nikke-result-item">
            <span className="nikke-result-label">Total Pulls (Limited Banner)</span>
            <span className="nikke-result-value">{totalPulls}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NikkePage; 