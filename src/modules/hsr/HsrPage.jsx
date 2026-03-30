import React, { useState, useEffect } from 'react';
import './HsrPage.css';
import StellarJadeIcon from '../../assets/hsr_currency_stellarjade.png';
import OneiricShardIcon from '../../assets/hsr_currency_oneiricshard.png';
import PassIcon from '../../assets/hsr_currency_pass.png';
import SpecialPassIcon from '../../assets/hsr_currency_specialpass.png';
import { GachaLayout, GachaCard, CurrencyInput, DoublePassContainer, ResultBox } from '../../components/GachaDashboard.jsx';

const HsrPage = () => {
	useEffect(() => {
		document.title = "Honkai: Star Rail";
		return () => {
			document.title = "Gacha Calculator";
		};
	}, []);

	const [stellarJades, setStellarJades] = useState(() => localStorage.getItem('hsr_stellar_jades') || '0');
	const [oneiricShards, setOneiricShards] = useState(() => localStorage.getItem('hsr_oneiric_shards') || '0');
	const [singleTickets, setSingleTickets] = useState(() => localStorage.getItem('hsr_single_tickets') || '0');
	const [specialPasses, setSpecialPasses] = useState(() => localStorage.getItem('hsr_special_passes') || '0');
	const [totalLimitedWarps, setTotalLimitedWarps] = useState(0);
	const [guarantees, setGuarantees] = useState("0");

	useEffect(() => {
		localStorage.setItem('hsr_stellar_jades', stellarJades);
		localStorage.setItem('hsr_oneiric_shards', oneiricShards);
		localStorage.setItem('hsr_single_tickets', singleTickets);
		localStorage.setItem('hsr_special_passes', specialPasses);
	}, [stellarJades, oneiricShards, singleTickets, specialPasses]);

	useEffect(() => {
		const totalJades = (parseInt(stellarJades) || 0) + (parseInt(oneiricShards) || 0);
		const jadeRolls = Math.floor(totalJades / 160);
		const specialPassRolls = parseInt(specialPasses) || 0;
		// Standard tickets (singleTickets) should not count towards limited guarantees

		const limitedWarps = jadeRolls + specialPassRolls;
		setTotalLimitedWarps(limitedWarps);

		setGuarantees((limitedWarps / 90).toFixed(2));
	}, [stellarJades, oneiricShards, singleTickets, specialPasses]);

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
		<GachaLayout themeClass="theme-hsr">
			<GachaCard title="Astral Express Resources" isPrimary>
				<CurrencyInput
					label="Stellar Jade"
					iconSrc={StellarJadeIcon}
					value={stellarJades}
					onChange={(e) => handleInputChange(e, setStellarJades)}
					onFocus={handleFocus}
				/>
				<CurrencyInput
					label="Oneiric Shard"
					iconSrc={OneiricShardIcon}
					value={oneiricShards}
					onChange={(e) => handleInputChange(e, setOneiricShards)}
					onFocus={handleFocus}
				/>

				<DoublePassContainer>
					<CurrencyInput
						label="Star Rail Pass"
						iconSrc={PassIcon}
						value={singleTickets}
						onChange={(e) => handleInputChange(e, setSingleTickets)}
						onFocus={handleFocus}
						inPassContainer
					/>
					<CurrencyInput
						label="Special Pass"
						iconSrc={SpecialPassIcon}
						value={specialPasses}
						onChange={(e) => handleInputChange(e, setSpecialPasses)}
						onFocus={handleFocus}
						inPassContainer
						isSpecial
					/>
				</DoublePassContainer>
			</GachaCard>

			<GachaCard title="Limited Warps Calculations" isResults>
				<ResultBox label="Limited Pulls" value={totalLimitedWarps} />
				<ResultBox label="Limited 5★ Guarantees" value={guarantees} highlightType="secondary" />
			</GachaCard>
		</GachaLayout>
	);
};

export default HsrPage;
