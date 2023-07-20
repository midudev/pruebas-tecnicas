import React, { useContext, useEffect } from 'react';
import Book from '../Book/Book';
import { FilterContext } from '../../context/FilterContext';

const BookList = () => {

  const { booklist, selectedGenre, setDisplayedBooks } = useContext(FilterContext);

  const displayedBooks = [];
  const updateDisplayedBooks = () => {
    booklist.forEach(({ book }) => {
      if (selectedGenre === 'Todos' || selectedGenre === book.genre) {
        displayedBooks.push(book);
      }
    });
  };

  useEffect(() => {
    updateDisplayedBooks();
    setDisplayedBooks(displayedBooks);
    console.log(displayedBooks);
  }, [selectedGenre]);

  return (
    <div style={{ border: '5px solid #ffff55' }}>
      <h2>Book List</h2>
      {
        booklist.length > 0 ? (
          booklist.map(({ book }) => {
            if (selectedGenre === 'Todos' || selectedGenre === book.genre) {
              return <Book
                key={book.ISBN}
                title={book.title}
                isbn={book.ISBN}
                author={book.author.name}
                cover={book.cover} />
            } else {
              return null;
            }
          })
        ) : (
          <p>No hay libros 😢</p>
        )
      }
    </div>
  );
};

export default BookList;
