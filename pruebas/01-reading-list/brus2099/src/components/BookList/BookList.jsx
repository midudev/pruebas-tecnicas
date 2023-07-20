import React, { useContext } from 'react';
import Book from '../Book/Book';
import { FilterContext } from '../../context/FilterContext';

const BookList = () => {

  const { books, selectedGenre } = useContext( FilterContext );

  return (
    <div style={{ border: '5px solid #ffff55' }}>
      <h2>Book List</h2>
      {
        books.length > 0 ? (
          books.map( ({ book }) =>
            selectedGenre === 'Todos' || selectedGenre === book.genre ? (
              <Book key={book.ISBN} title={book.title} isbn={book.ISBN} author={book.author.name} cover={book.cover} />
            ) : (
              null
            )
            )
        ) : (
          <p>No hay libros 😢</p>
        )
      }
    </div>
  );
};

export default BookList;
