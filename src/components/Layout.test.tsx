/* eslint-disable react/no-children-prop */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

test('renders Layout Component', () => {
  render(<Layout children={<div />} />);
  const linkElement = screen.getByTestId(/WrapperLayout/i);
  expect(linkElement).toBeInTheDocument();
});
