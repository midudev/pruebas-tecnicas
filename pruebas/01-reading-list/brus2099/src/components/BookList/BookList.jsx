import React, { useContext } from 'react';
import Book from '../Book/Book';
import { FilterContext } from '../../context/FilterContext';

const BookList = () => {

  const { books } = useContext( FilterContext );

  return (
    <div style={{ border: '5px solid #ffff55' }}>
      <h2>BookList</h2>
      {
        books.length > 0 ? (
          books.map( ({ book }) =>
            <Book
              key={book.ISBN}
              isbn={book.ISBN}
              title={book.title}
              author={book.author.name}
            />)
        ) : (
          <p>No hay libros 😢</p>
        )
      }
    </div>
  );
};

export default BookList;
