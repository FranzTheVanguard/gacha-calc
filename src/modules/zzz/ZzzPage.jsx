import React, { useState, useEffect } from 'react';
import './ZzzPage.css';
import PolyIcon from '../../assets/zzz_currency_poly.png';
import MonoIcon from '../../assets/zzz_currency_mono.png';
import MasterTapeIcon from '../../assets/zzz_currency_mastertape.png';
import EncryptedTapeIcon from '../../assets/zzz_currency_encryptedtape.png';

const ZzzPage = () => {
	useEffect(() => {
		document.title = "Zenless Zone Zero";
		return () => {
			document.title = "Gacha Calculator";
		};
	}, []);

	const [polychromes, setPolychromes] = useState(() => localStorage.getItem('zzz_polychromes') || '0');
	const [monochromes, setMonochromes] = useState(() => localStorage.getItem('zzz_monochromes') || '0');
	const [masterTapes, setMasterTapes] = useState(() => localStorage.getItem('zzz_master_tapes') || '0');
	const [encryptedTapes, setEncryptedTapes] = useState(() => localStorage.getItem('zzz_encrypted_tapes') || '0');
	const [totalSignalSearches, setTotalSignalSearches] = useState(0);
	const [guarantees, setGuarantees] = useState("0");

	useEffect(() => {
		localStorage.setItem('zzz_polychromes', polychromes);
		localStorage.setItem('zzz_monochromes', monochromes);
		localStorage.setItem('zzz_master_tapes', masterTapes);
		localStorage.setItem('zzz_encrypted_tapes', encryptedTapes);
	}, [polychromes, monochromes, masterTapes, encryptedTapes]);

	useEffect(() => {
		const totalPoly = (parseInt(polychromes) || 0) + (parseInt(monochromes) || 0);
		const polyRolls = Math.floor(totalPoly / 160);
		const encryptedTapeRolls = parseInt(encryptedTapes) || 0;
		// Standard tapes (masterTapes) should not count towards limited guarantees

		const limitedSearches = polyRolls + encryptedTapeRolls;
		setTotalSignalSearches(limitedSearches);

		// ZZZ pity is 90 for limited
		setGuarantees((limitedSearches / 90).toFixed(2));
	}, [polychromes, monochromes, masterTapes, encryptedTapes]);

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
		<div className="zzz-v2-page">
			<div className="zzz-v2-dashboard">
				<h1 className="zzz-v2-title">Signal Search Dashboard</h1>

				<div className="zzz-v2-cards-container">
					{/* Main Currency Card */}
					<div className="zzz-v2-card zzz-v2-card-primary">
						<h2 className="zzz-v2-card-title">New Eridu Resources</h2>

						<div className="zzz-v2-input-group">
							<label className="zzz-v2-input-label">Polychrome</label>
							<div className="zzz-v2-input-wrapper">
								<img src={PolyIcon} alt="Polychrome" className="zzz-v2-icon" />
								<input
									type="number"
									className="zzz-v2-input"
									value={polychromes}
									onChange={(e) => handleInputChange(e, setPolychromes)}
									onFocus={handleFocus}
									min="0"
								/>
							</div>
						</div>

						<div className="zzz-v2-input-group">
							<label className="zzz-v2-input-label">Monochrome</label>
							<div className="zzz-v2-input-wrapper">
								<img src={MonoIcon} alt="Monochrome" className="zzz-v2-icon" />
								<input
									type="number"
									className="zzz-v2-input"
									value={monochromes}
									onChange={(e) => handleInputChange(e, setMonochromes)}
									onFocus={handleFocus}
									min="0"
								/>
							</div>
						</div>

						<div className="zzz-v2-passes-container">
							<div className="zzz-v2-input-group zzz-v2-half-width">
								<label className="zzz-v2-input-label">Master Tape</label>
								<div className="zzz-v2-input-wrapper">
									<img src={MasterTapeIcon} alt="Master Tape" className="zzz-v2-icon" />
									<input
										type="number"
										className="zzz-v2-input"
										value={masterTapes}
										onChange={(e) => handleInputChange(e, setMasterTapes)}
										onFocus={handleFocus}
										min="0"
									/>
								</div>
							</div>

							<div className="zzz-v2-input-group zzz-v2-half-width">
								<label className="zzz-v2-input-label">Encrypted Tape</label>
								<div className="zzz-v2-input-wrapper">
									<img src={EncryptedTapeIcon} alt="Encrypted Tape" className="zzz-v2-icon" />
									<input
										type="number"
										className="zzz-v2-input zzz-v2-special"
										value={encryptedTapes}
										onChange={(e) => handleInputChange(e, setEncryptedTapes)}
										onFocus={handleFocus}
										min="0"
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Results Card */}
					<div className="zzz-v2-card zzz-v2-card-results">
						<h2 className="zzz-v2-card-title">Signal Search Calculations</h2>

						<div className="zzz-v2-result-box">
							<span className="zzz-v2-result-label">Limited Searches</span>
							<span className="zzz-v2-result-value zzz-v2-jumps-highlight">{totalSignalSearches}</span>
						</div>

						<div className="zzz-v2-result-box">
							<span className="zzz-v2-result-label">Limited S-Rank Guarantees</span>
							<span className="zzz-v2-result-value zzz-v2-guarantee-highlight">{guarantees}</span>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default ZzzPage;