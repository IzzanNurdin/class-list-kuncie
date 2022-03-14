import React from 'react';
import { render, screen } from '@testing-library/react';
import ClassDetail from './ClassDetail';

test('renders Class Detail', () => {
  render(<ClassDetail
    selectedClass={{
      id: '1', name: 'Kelas 1', description: 'Ini kelas 1', mentors: [{ id: '1', name: 'Adi', description: 'Mentor Inggris' }],
    }}
    setClose={() => {}}
  />);
  const linkElement = screen.getByText(/Ini Kelas 1/i);
  expect(linkElement).toBeInTheDocument();
});
