import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Books App heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Books App/i);
  expect(headingElement).toBeInTheDocument();
});
