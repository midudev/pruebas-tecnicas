import React from 'react';

import Book from './Book';

function BookList({ books, onAddToReadingList }) {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6'>
      {books.map((book) => (
        <Book
          key={book.book.ISBN}
          book={book.book}
          onAddToReadingList={onAddToReadingList}
        />
      ))}
    </section>
  );
}

export default BookList;
