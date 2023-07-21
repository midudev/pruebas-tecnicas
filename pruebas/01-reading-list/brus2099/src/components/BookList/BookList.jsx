import React, { useContext, useEffect } from 'react';
import Book from '../Book/Book';
import { FilterContext } from '../../context/FilterContext';

const BookList = () => {

  const { booklist, selectedGenre, setDisplayedBooks } = useContext(FilterContext);

  const displayedBooks = booklist.filter(({ book }) => selectedGenre === 'Todos' || selectedGenre === book.genre);

  useEffect(() => {
    setDisplayedBooks(displayedBooks);
  }, [selectedGenre, booklist]);

  return (
    <div style={{ border: '5px solid #ffff55' }}>
      <h2>Book List</h2>
      {
        booklist.length > 0 ? (

          booklist.map(({ book }) => {
            if (selectedGenre === 'Todos' || selectedGenre === book.genre) {
              return <Book
                key={book.ISBN}
                entireBook={book}
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
