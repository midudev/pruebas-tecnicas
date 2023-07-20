import React, { useContext, useEffect } from 'react';
import { FilterContext } from '../../context/FilterContext';

const Status = () => {

  const { booklist, displayedBooks } = useContext( FilterContext );
  const books = booklist.length;


  return(
    <div style={{ border: '5px solid #55ff96' }}>
      <h2>Status</h2>
      <p>Libros disponibles: <b>{booklist.length}</b></p>
      <p>Libros mostrados: <b>{displayedBooks.length}</b></p>
    </div>
  );
};

export default Status;