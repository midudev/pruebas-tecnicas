import React from 'react';

function AvailableBooksCount({ books, selectedGenre, minPages, readingList }) {
  return (
    <div className='text-lg md:text-xl m-4 md:mb-4 text-gray-900 dark:text-gray-300'>
      Libros disponibles:{' '}
      {
        books.filter(
          (book) =>
            (!selectedGenre || book.book.genre === selectedGenre) &&
            book.book.pages >= minPages &&
            !readingList.some((b) => b.ISBN === book.book.ISBN)
        ).length
      }
    </div>
  );
}

export default AvailableBooksCount;
