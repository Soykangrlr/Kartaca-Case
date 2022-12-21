import { render, screen } from '@testing-library/react';
import HomePage from './pages/homePage';
test('renders Homepage', () => {
 render(<HomePage />);
 screen.debug()

});
