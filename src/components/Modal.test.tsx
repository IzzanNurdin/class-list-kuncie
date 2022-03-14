import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

test('renders Modal Component', () => {
  render(<Modal show title="Kelas 1" content={<div />} setClose={() => {}} />);
  const linkElement = screen.getByTestId(/OverlayModal/i);
  expect(linkElement).toBeInTheDocument();
});
