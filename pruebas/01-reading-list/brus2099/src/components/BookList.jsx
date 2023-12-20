import React, { useContext, useEffect } from 'react';
import Book from './Book';
import { DataContext } from '../context/DataContext';

const BookList = () => {

  const { booklist, selectedGenre, setDisplayedBooks } = useContext(DataContext);

  const displayedBooks = booklist.filter(({ book }) => selectedGenre === 'Todos' || selectedGenre === book.genre);

  useEffect(() => {
    setDisplayedBooks(displayedBooks);
  }, [selectedGenre, booklist]);

  return (
    <div>
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
