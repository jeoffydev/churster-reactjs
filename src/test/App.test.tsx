import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './../App';
test('renders App and footer content', () => {
  render(
        <App />
  );
  const linkElement = screen.getByText(/Roster Management System/i);
  expect(linkElement).toBeInTheDocument();
});
