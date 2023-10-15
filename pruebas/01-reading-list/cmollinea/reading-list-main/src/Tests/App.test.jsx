import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { ReadingListProvider } from '../Context/ReadingListProvider';
import books from '../mocks/books.json';

const titles = books.library.map((book) => book.book.title);

const filteredBooksByTerrorGenre = books.library.filter(
  (book) => book.book.genre === 'Terror'
);

const filteredBooksByPages = books.library.filter(
  (book) => book.book.pages > 1000
);

const addBooks = () => {
  const addButtons = screen.getAllByRole('add-button');
  addButtons.forEach((button) => fireEvent.click(button));
};

const showFilters = () => {
  const button = screen.getByText(/mostrar filtros/i);
  fireEvent.click(button);
};

describe('App Test', () => {
  beforeEach(() =>
    render(
      <ReadingListProvider>
        <App />
      </ReadingListProvider>
    )
  );
  afterEach(() => {
    cleanup();
  });

  it('should show header', () => {
    screen.getByText(/Catálogo de Libros./i);
  });

  it('should render an image for each book', () => {
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(titles.length);
  });

  it('should add a book when click', () => {
    addBooks();
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(titles.length * 2);
    window.localStorage.clear();
  });

  it('should remove the book from list when click remove button', () => {
    addBooks();
    const removeButtons = screen.getAllByRole('remove-button');
    removeButtons.forEach((button) => fireEvent.click(button));
    expect(removeButtons).toHaveLength(titles.length);
  });

  it('should filter by genre', () => {
    showFilters();
    const select = screen.getByRole('genre-filter');
    fireEvent.change(select, { target: { value: 'Terror' } });
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(filteredBooksByTerrorGenre.length);
  });

  it('should filter by minimun pages', () => {
    showFilters();
    const range = screen.getByRole('pages-filter');
    fireEvent.change(range, { target: { value: 1000 } });
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(filteredBooksByPages.length);
  });

  it('should filter by title', () => {
    showFilters();
    const search = screen.getByRole('title-filter');
    fireEvent.change(search, { target: { value: 'harry potter' } });
    const searchButton = screen.getByRole('search');
    fireEvent.click(searchButton);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(1);
  });
});
