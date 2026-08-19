import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders the portfolio introduction and featured work', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /useful software/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /nasa mission control/i })).toBeInTheDocument();
});
