import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

const mockRender = () => {
  return render(<App />);
};

describe('testing renders', () => {
  it('should render the app', () => {
    mockRender();
    const section = screen.getByRole('main');
    expect(section).toBeInTheDocument();
  });

  it('should render the header', () => {
    mockRender();
    const header = screen.getByRole('main').querySelector('header');
    expect(header).toBeInTheDocument();
  });

  it('should render a aside bar', () => {
    mockRender();
    const aside = screen.getByRole('main').querySelector('aside');
    expect(aside).toBeInTheDocument();
  });
});
