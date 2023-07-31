import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Book from './Book';
import styled from 'styled-components';

const LectureList = () => {

  const { lecturelist } = useContext(DataContext);

  const WraperLectureList = styled.div`
  background-color: #ddf;
    border-radius: 10px;
    padding: 10px;
    font-size: 1.2rem;
    `;

  return (
    <div>
      {
        true ? (
          <WraperLectureList>🔖</WraperLectureList>
        ) : (
          null
        )
      }
      {/* <h2>Lecture List</h2>
      <p>Libros en lista: <b>{lecturelist.length}</b></p>
      {
        lecturelist.length > 0 ? (
          lecturelist.map(({ book }) => {
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
      } */}
    </div>
  );
};

export default LectureList;