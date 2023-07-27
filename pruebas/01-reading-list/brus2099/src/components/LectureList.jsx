import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Book from './Book';

const LectureList = () => {

  const { lectureList } = useContext(DataContext);

  return (
    <div style={{ border: '5px solid #f55' }}>
      <h2>Lecture List</h2>
      <p>Libros en lista: <b>{lectureList.length}</b></p>
      {
        lectureList.length > 0 ? (
          lectureList.map(({ book }) => {
            return <Book
            key={book.ISBN}
            entireBook={book}
            title={book.title}
            isbn={book.ISBN}
            author={book.author.name}
            cover={book.cover} />
          })
        ) : (
          <p>No hay libros 😢</p>
        )
      }
    </div>
  );
};

export default LectureList;