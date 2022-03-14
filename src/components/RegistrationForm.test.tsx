import React from 'react';
import { render, screen } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';

test('renders RegistrationForm Component', () => {
  render(<RegistrationForm classId="1" setClose={() => {}} />);
  const linkElement = screen.getByTestId(/FormWrapper/i);
  expect(linkElement).toBeInTheDocument();
});
