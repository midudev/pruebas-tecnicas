import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Book = ({ entireBook, title, author, isbn, cover }) => {

  const { lecturelist, setLecturelist, booklist, setBooklist,
    addElementToLocalStorageItem, removeElementFromLocalStorageItem,
    updateTabsWithBroadcastChannel } = useContext(DataContext);

  const lectureListChange = () => {
    const formatedBook = { book: entireBook };
    setLecturelist([formatedBook, ...lecturelist,]);
    setBooklist(booklist.filter(({ book }) => book.ISBN !== isbn));
    removeElementFromLocalStorageItem(isbn, 'booklist');
    addElementToLocalStorageItem(isbn, 'lecturelist');
    updateTabsWithBroadcastChannel();
  };

  const bookListChange = () => {
    const formatedBook = { book: entireBook };
    setBooklist([formatedBook, ...booklist,]);
    setLecturelist(lecturelist.filter(({ book }) => book.ISBN !== isbn));
    removeElementFromLocalStorageItem(isbn, 'lecturelist');
    addElementToLocalStorageItem(isbn, 'booklist');
    updateTabsWithBroadcastChannel();
  };

  return (
    <div>
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
        lecturelist.find(({ book }) => book.ISBN === isbn) ? (
          <button onClick={bookListChange}>Cambiar a lista de libros</button>
        ) : (
          <button onClick={lectureListChange}>Cambiar a lista de lectura</button>
        )
      }
    </div>
  );
};

export default Book;