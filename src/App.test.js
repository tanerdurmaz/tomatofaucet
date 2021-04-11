import { render, screen } from '@testing-library/react';
import TomatoFaucet from './TomatoFaucet';

test('renders title', () => {
    render(<TomatoFaucet />);
    const linkElement = screen.getByText(/A TOMATO FAUCET/i);
    expect(linkElement).toBeInTheDocument();
});
