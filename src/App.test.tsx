import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders List Kelas', () => {
  render(<App />);
  const linkElement = screen.getByText(/List Kelas/i);
  expect(linkElement).toBeInTheDocument();
});
