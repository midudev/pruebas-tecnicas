import { createContext, useState, useEffect } from "react";
import data from "../data/books.json";

export const BooksContext = createContext({});

export const BooksProvider = ({ children }) => { //eslint-disable-line
  const [books, setBooks] = useState(data.library);
  const [genres, setGenres] = useState([]); //eslint-disable-line
  const [readingList, setReadingList] = useState([]);


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
  localStorage.setItem(
    "readingList",
    JSON.stringify(readingList.filter((b) => b !== book))
  );
}


  const contextValue = {
    books,
    setBooks,
    readingList,
    setReadingList,
    genres,
    setGenres,
    filterBooksByGenre,
    removeBook,
  }

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  )
}