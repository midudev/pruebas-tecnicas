import React from 'react';
import { render } from '@testing-library/react';
import { BooksProvider } from '../src/bookContext';

describe('BooksProvider', () => {
  it('renders without crashing', () => {
    render(
      <BooksProvider>
        <div>Test</div>
      </BooksProvider>
    );
  });
});