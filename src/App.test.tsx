import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add something to do button', () => {
  render(<App />);
  expect(screen.getByText(/Add something to do/i)).toBeInTheDocument();
});
