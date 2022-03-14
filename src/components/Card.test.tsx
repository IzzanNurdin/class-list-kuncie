import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders Card Component', () => {
  render(<Card title="Kelas 1" onClick={() => {}} />);
  const linkElement = screen.getByText(/Kelas 1/i);
  expect(linkElement).toBeInTheDocument();
});
