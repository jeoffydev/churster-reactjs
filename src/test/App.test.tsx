import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './../App';
test('renders App content', () => {
  render(
        <App />
  );
  const linkElement = screen.getByText(/Contractor/i);
  expect(linkElement).toBeInTheDocument();
});
