import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Book = ({ entireBook, title, author, isbn, cover }) => {

  const { lectureList, setLectureList, booklist, setBooklist } = useContext(DataContext);

  const lectureListChange = () => {
    const formatedBook = { book: entireBook };
    setLectureList([...lectureList, formatedBook]);
    setBooklist(booklist.filter(({ book }) => book.ISBN !== isbn));
  };

  const bookListChange = () => {
    const formatedBook = { book: entireBook };
    setBooklist([...booklist, formatedBook]);
    setLectureList(lectureList.filter(({ book }) => book.ISBN !== isbn));
  };

  return (
    <div style={{ border: '5px solid #b5b5b5' }}>
      <h3>Book</h3>
      <img src={cover} alt={title}
        style={{
          width: '100px',
        }}
      />
      <p>ISBN: {isbn}</p>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      {
        lectureList.find(({ book }) => book.ISBN === isbn) ? (
          <button onClick={bookListChange}>Cambiar a lista de libros</button>
        ) : (
          <button onClick={lectureListChange}>Cambiar a lista de lectura</button>
        )
      }
    </div>
  );
};

export default Book;