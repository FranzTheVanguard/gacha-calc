import React, { useEffect } from 'react';
import './WuwaPage.css';

const WuwaPage = () => {
	useEffect(() => {
		document.title = "Wuthering Waves";

		return () => {
			document.title = "Gacha Calculator";
		};
	}, []);

	return (
		<div className="wuwa-page">
			<div className="wuwa-content">
				<h1>Wuthering Waves Calculator</h1>
				{/* Add Wuwa specific content here */}
			</div>
		</div>
	);
};

export default WuwaPage; 