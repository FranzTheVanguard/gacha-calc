import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import Navigation from './components/Navigation';
import {
	HomePage,
	GbfPage,
	WuwaPage,
	NikkePage,
	HsrPage,
	ZzzPage,
	BaPage
} from './modules/index.jsx';
import './App.css';

function App() {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
		// Dispatch custom event for theme change
		window.dispatchEvent(new Event('themeChange'));
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	// Define a function to add className for active NavLink
	const getNavLinkClass = ({ isActive }) => isActive ? 'active-link' : '';

	const navLinks = [
		{ to: '/', label: 'Home' },
		{ to: '/gbf', label: 'GBF' },
		{ to: '/wuwa', label: 'Wuwa' },
		{ to: '/nikke', label: 'Nikke' },
		{ to: '/hsr', label: 'HSR' },
		{ to: '/zzz', label: 'ZZZ' },
		{ to: '/ba', label: 'BA' },
	];

	return (
		<Router>
			<div className="App">
				<Navigation
					theme={theme}
					toggleTheme={toggleTheme}
					isDrawerOpen={isDrawerOpen}
					setIsDrawerOpen={setIsDrawerOpen}
					getNavLinkClass={getNavLinkClass}
					navLinks={navLinks}
				/>
				<Drawer
					isOpen={isDrawerOpen}
					onClose={() => setIsDrawerOpen(false)}
					theme={theme}
					onThemeToggle={toggleTheme}
					getNavLinkClass={getNavLinkClass}
					navLinks={navLinks}
				/>

				<Routes>
					<Route path="/gbf" element={<GbfPage />} />
					<Route path="/wuwa" element={<WuwaPage />} />
					<Route path="/nikke" element={<NikkePage />} />
					<Route path="/hsr" element={<HsrPage />} />
					<Route path="/zzz" element={<ZzzPage />} />
					<Route path="/ba" element={<BaPage />} />
					<Route path="/" element={<HomePage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
