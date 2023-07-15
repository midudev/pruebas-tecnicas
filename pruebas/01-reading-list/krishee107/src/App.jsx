import React, { useEffect, useState } from 'react'
import books from '../../books.json';
import { BookGridComponent } from './components/BookGridComponent/BookGridComponent';
import { RandomBookComponent } from './components/RandomBookComponent/RandomBookComponent';
import { ReadingListComponent } from './components/ReadingListComponent/ReadingListComponent';
import { NavComponent } from './components/NavComponent/NavComponent';

export const App = () => {
  const [bookList, setBookList] = useState(books['library']);
  const [readingListVisible, setReadingListVisible] = useState(false);
  //Libros de la lista de lectura. Recogemos del local storage y si no hay nada, inicializamos a un array vacío
  const [selectedBooks, setSelectedBooks] = useState(JSON.parse(localStorage.getItem('selectedBooks')) || []);

  // Actualizamos la lista de libros cada vez que cambia la lista de lectura
  useEffect(() => {
    localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
  }, [selectedBooks]);

  //Mostramos la lista de lectura o la ocultamos
  const handleReadingList = () => {
    setReadingListVisible(!readingListVisible);
  }


  return (

    <div className="padre">
      <NavComponent handleReadingList={handleReadingList} selectedBooks={selectedBooks} />
      <ReadingListComponent readingListVisible={readingListVisible} handleReadingList={handleReadingList} selectedBooks={selectedBooks} setSelectedBooks={setSelectedBooks} />
      <div className="content">

        <RandomBookComponent bookList={bookList} />
        <BookGridComponent bookList={bookList} selectedBooks={selectedBooks} setSelectedBooks={setSelectedBooks} />
      </div>
    </div>

  )
}
