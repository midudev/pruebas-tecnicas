import React, { useContext } from 'react';
import { FilterContext } from '../../context/FilterContext';
import Book from '../Book/Book';

const LectureList = () => {

  const { lectureList } = useContext(FilterContext);

  return (
    <div style={{ border: '5px solid #f55' }}>
      <h2>Lecture List</h2>
      <p>Libros en lista: <b>{lectureList.length}</b></p>
      {
        lectureList.length > 0 ? (
          lectureList.map(({ book }) => {
            return <Book
            key={book.ISBN}
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