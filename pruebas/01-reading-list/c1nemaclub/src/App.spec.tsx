import { screen, render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render the app', () => {
    expect(render(<App />)).toBeTruthy();
  });
});
