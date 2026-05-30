import { render, screen } from '@testing-library/react';
import Navigation from './components/Navigation';
import Drawer from './components/Drawer';
import HsrPage from './modules/hsr/HsrPage';

jest.mock('react-router-dom', () => ({
	Link: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
	NavLink: ({ to, children, className, end, ...props }) => (
		<a href={to} className={typeof className === 'function' ? className({ isActive: false }) : className} {...props}>
			{children}
		</a>
	),
}), { virtual: true });

test('navigation exposes a readable dark mode toggle label', () => {
	render(
		<Navigation
			theme="light"
			toggleTheme={() => {}}
			setIsDrawerOpen={() => {}}
			getNavLinkClass={() => ''}
			navLinks={[{ to: '/', label: 'Home' }]}
		/>
	);

	expect(screen.getByRole('button', { name: /switch to dark mode/i })).toBeInTheDocument();
});

test('drawer exposes a readable close control and theme label', () => {
	render(
		<Drawer
			isOpen
			onClose={() => {}}
			theme="light"
			onThemeToggle={() => {}}
		/>
	);

	expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();
	expect(screen.getByRole('button', { name: /switch to dark mode/i })).toBeInTheDocument();
});

test('hsr page shows the 5-star guarantee label with readable text', () => {
	render(<HsrPage />);

	expect(screen.getByText(/limited 5-star guarantees/i)).toBeInTheDocument();
});
