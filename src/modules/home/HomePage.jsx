import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
	useEffect(() => {
		document.title = "Gacha Calculator";
	}, []);

	const gameCards = [
		{
			to: '/gbf',
			title: 'Granblue Fantasy',
			subtitle: 'Spark Calculator',
			description: 'Track crystals and tickets against the 300-roll spark target.',
		},
		{
			to: '/nikke',
			title: 'Nikke',
			subtitle: 'Limited Pull Calculator',
			description: 'Convert gems and advanced vouchers into limited-banner pulls.',
		},
		{
			to: '/hsr',
			title: 'Honkai: Star Rail',
			subtitle: 'Warp Calculator',
			description: 'Estimate limited pulls and 90-warp 5-star pity coverage.',
		},
		{
			to: '/zzz',
			title: 'Zenless Zone Zero',
			subtitle: 'Signal Search Calculator',
			description: 'Convert film and tapes into limited searches and pity progress.',
		},
		{
			to: '/ba',
			title: 'Blue Archive',
			subtitle: 'Spark Calculator',
			description: 'Track pyroxenes and tickets against the 200-roll spark target.',
		},
		{
			to: '/wuwa',
			title: 'Wuthering Waves',
			subtitle: 'Calculator Route',
			description: 'Open the Wuthering Waves page and track future calculator support there.',
		},
	];

	return (
		<div className="home-page">
			<section className="home-hero">
				<div className="home-hero-copy">
					<p className="home-eyebrow">Resource tracker</p>
					<h1>Gacha Calculator</h1>
					<p className="home-subtitle">
						Convert saved currency into pulls, spark progress, and limited-banner pity coverage.
					</p>
				</div>
			</section>

			<section className="home-grid" aria-label="Supported calculators">
				{gameCards.map((game) => (
					<Link key={game.title} to={game.to} className="game-card-link">
						<div className="game-card">
								<div className="game-card-header">
									<div>
										<h2>{game.title}</h2>
										<p className="game-card-subtitle">{game.subtitle}</p>
									</div>
								</div>
								<p className="game-card-description">{game.description}</p>
						</div>
					</Link>
				))}
			</section>
		</div>
	);
};

export default HomePage; 
