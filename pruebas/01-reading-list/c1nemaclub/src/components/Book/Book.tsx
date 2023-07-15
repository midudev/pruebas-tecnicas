import React from 'react';
import { TBook } from '../../store/books/types';

type BookProps = {
  book: TBook;
  handleClick: (book: TBook) => void;
};

function Book({ book, handleClick }: BookProps) {
  return (
    <div className='book' onClick={() => handleClick(book)}>
      {book.book.title}
      {book.book.genre}
    </div>
  );
}

export default Book;
