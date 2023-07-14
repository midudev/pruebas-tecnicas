import React, { useState, useEffect } from 'react';
import { library } from '../../assets/books.json';
import Book from '../Book/Book';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(library);
    console.log(library);
  });


  return (
    <div style={{ border: '5px solid #ffff55' }}>
      <h2>BookList</h2>
      {
        library.length > 0 ? (
          library.map(book =>
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
