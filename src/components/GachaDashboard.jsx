import React from 'react';
import './GachaDashboard.css';

export const GachaLayout = ({ themeClass, children }) => {
	return (
		<div className={`gacha-page ${themeClass}`}>
			<div className="gacha-dashboard">
				<div className="gacha-cards-container">
					{children}
				</div>
			</div>
		</div>
	);
};

export const GachaCard = ({ title, isPrimary, isResults, children }) => {
	let cardClass = 'gacha-card';
	if (isPrimary) cardClass += ' gacha-card-primary';
	if (isResults) cardClass += ' gacha-card-results';

	return (
		<div className={cardClass}>
			<h2 className="gacha-card-title">{title}</h2>
			{children}
		</div>
	);
};

export const CurrencyInput = ({ label, iconSrc, value, onChange, onFocus, isSpecial, inPassContainer }) => {
	const content = (
		<>
			<label className="gacha-input-label">{label}</label>
			<div className={`gacha-input-wrapper ${isSpecial ? 'is-special' : ''}`}>
				<img src={iconSrc} alt={label} className="gacha-icon" />
				<input
					type="number"
					className="gacha-input"
					value={value}
					onChange={onChange}
					onFocus={onFocus}
					min="0"
				/>
			</div>
		</>
	);

	if (inPassContainer) {
		return <div className="gacha-input-group gacha-half-width">{content}</div>;
	}
	return <div className="gacha-input-group">{content}</div>;
};

export const DoublePassContainer = ({ children }) => {
	return <div className="gacha-passes-container">{children}</div>;
};

export const ResultBox = ({ label, value, highlightType = 'primary' }) => {
	return (
		<div className="gacha-result-box">
			<span className="gacha-result-label">{label}</span>
			<span className={`gacha-result-value gacha-highlight-${highlightType}`}>{value}</span>
		</div>
	);
};
