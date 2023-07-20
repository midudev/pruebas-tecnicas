import { render, screen } from '@testing-library/react';
import Book from './Book';

const book = {
  book: {
    title: 'El Señor de los Anillos',
    pages: 1200,
    genre: 'Fantasía',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
    synopsis:
      'Una aventura épica en un mundo de fantasía llamado la Tierra Media.',
    year: 1954,
    ISBN: '978-0618640157',
    author: {
      name: 'J.R.R. Tolkien',
      otherBooks: ['El Hobbit', 'El Silmarillion'],
    },
  },
};

describe('Book', () => {
  it('should render the book', () => {
    expect(render(<Book book={book} handleClick={() => {}} />)).toBeTruthy();
  });

  it('should have appear in the document', () => {
    render(<Book book={book} handleClick={() => {}} />);
    expect(screen.getByAltText(book.book.title)).toBeTruthy();
  });

  it('Should call handleClick with the book when clicked', () => {
    const handleClick = vi.fn();
    render(<Book book={book} handleClick={handleClick} />);
    screen.getByAltText(book.book.title).click();
    expect(handleClick).toHaveBeenCalledWith(book);
  });
});
