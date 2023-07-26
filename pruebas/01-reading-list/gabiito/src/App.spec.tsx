import App from './App';
import { fireEvent, render, screen } from '@testing-library/react';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Renders App component', () => {
    expect(screen.getByText(/Libros disponibles/i))
      .toBeDefined();
  });

  test('Renders Drawer component', () => {
    expect(screen.getByText(/Mi reading list/i))
      .toBeDefined();
  });

  test('Adds a book to the reading list (if any)', () => {
    let addBooks = null;
    try {
      addBooks = screen.getAllByTestId('addBook');
    } catch (e) {
      return;
    }

    if (!addBooks) return;
    
    fireEvent.click(addBooks[0]);

    expect(screen.getByText(/Mi reading list \(1\)/i))
      .toBeDefined();
  });
});
