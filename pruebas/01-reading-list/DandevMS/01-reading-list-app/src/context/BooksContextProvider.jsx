import { createContext, useState, useEffect } from "react";
import data from "../data/books.json";

export const BooksContext = createContext({});

export const BooksProvider = ({ children }) => { //eslint-disable-line
  const [books, setBooks] = useState(data.library);
  const [genres, setGenres] = useState([]); //eslint-disable-line
  const [readingList, setReadingList] = useState([]);
  const [avaliableBooks, setAvailableBooks] = useState([]);
  const [avaliableBooksReading, setAvailableBooksReading] = useState([]);


  // obtener los generos de los libros
  useEffect(() => {
    const uniqueGenres = [...new Set(data.library.map((book) => book.book.genre))];
    setGenres(uniqueGenres);
  }, []);

 // Filtrar libros por género
 const filterBooksByGenre = (genre) => {
  const filteredBooks = data.library.filter((book) => book.book.genre === genre || genre === "todos" );
  setBooks(filteredBooks);
};

// Eliminar un libro de la lista de lectura y actualizar el localStorage
const removeBook = (book) => {
  setReadingList((prevReadingList) => prevReadingList.filter((b) => b !== book));

  // obtener la data actualizada del localStorage
  const updateReadingList = readingList.filter((b) => b !== book);

  localStorage.setItem(
    "readingList",
    JSON.stringify(updateReadingList)
  );

  // eliminamos completamente el libro de la lista de libros
  localStorage.removeItem(book);
};

/**
 * @description obtener la cantidad de libros disponibles
 */
useEffect(() => {
  setAvailableBooks(books.length);
}, [books]);

/**
 * @description obtener la cantidad de libros en la lista de lectura
 */

useEffect(() => {
  setAvailableBooksReading(readingList.length);

}, [readingList])


  const contextValue = {
    books,
    setBooks,
    readingList,
    setReadingList,
    genres,
    setGenres,
    filterBooksByGenre,
    removeBook,
    avaliableBooks,
    avaliableBooksReading,
  }

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  )
}