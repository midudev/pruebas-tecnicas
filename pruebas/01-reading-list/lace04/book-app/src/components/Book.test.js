import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Book from './Book';

test('renders book title and cover', () => {
  const book = {
    ISBN: '123',
    title: 'Test Book',
    cover: 'test-cover.jpg',
  };

  render(<Book book={book} />);

  const titleElement = screen.getByText(/Test Book/i);
  expect(titleElement).toBeInTheDocument();

  const coverElement = screen.getByAltText(/Test Book/i);
  expect(coverElement).toBeInTheDocument();
  expect(coverElement).toHaveAttribute('src', 'test-cover.jpg');
});
