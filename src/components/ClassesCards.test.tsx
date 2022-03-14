import React from 'react';
import { render, screen } from '@testing-library/react';
import ClassesCards from './ClassesCards';

test('renders ClassesCards Component', () => {
  render(<ClassesCards data={{ items: [{ id: 1, name: 'Kelas 1' }] }} />);
  const linkElement = screen.getByTestId(/CardsContainer/i);
  expect(linkElement).toBeInTheDocument();
});
