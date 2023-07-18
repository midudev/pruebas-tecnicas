import React, { useState, useEffect, useContext } from 'react';
import { library } from '../../assets/books.json';
import Book from '../Book/Book';
import { FilterContext } from '../../context/filterContext';

const BookList = () => {

  const { books } = useContext(FilterContext);

  return (
    <div style={{ border: '5px solid #ffff55' }}>
      <h2>BookList</h2>
      {
        books.length > 0 ? (
          books.map(book =>
            <Book
              key={book.book.ISBN}
              isbn={book.book.ISBN}
              title={book.book.title}
              author={book.book.author.name}
            />)
        ) : (
          <p>No hay libros 😢</p>
        )
      }
    </div>
  );
};

export default BookList;
