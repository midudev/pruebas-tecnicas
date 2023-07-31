import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import styled from 'styled-components';

const Status = () => {

  const { booklist, displayedBooks } = useContext( DataContext );

  const PageDescription = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    margin: 20px 0;
    font-family: 'Playfair Display', serif;
    `;

  return(
    <div>
      <PageDescription>
        Busca entre una lista selecta de libros <br />
        Guarda tus favoritos en tu lista de lectura
      </PageDescription>
      <p>Libros disponibles: <b>{booklist.length}</b></p>
      <p>Libros mostrados: <b>{displayedBooks.length}</b></p>
    </div>
  );
};

export default Status;