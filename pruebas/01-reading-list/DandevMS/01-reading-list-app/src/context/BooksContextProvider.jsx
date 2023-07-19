import { createContext, useState, useEffect } from "react";
import data from "../data/books.json";

export const BooksContext = createContext({});

export const BooksProvider = ({ children }) => { //eslint-disable-line
  const [books, setBooks] = useState(data.library);
  const [genres, setGenres] = useState([]); //eslint-disable-line
  const [readingList, setReadingList] = useState([]);


  // carga los datos almacenados en el localStorage al montar el componente
  useEffect(() => {
    const storedReadingList = localStorage.getItem("readingList");
    if (storedReadingList) {
      setReadingList(JSON.parse(storedReadingList));
    }
}, []);

  // obtener los generos de los libros
  useEffect(() => {
    const uniqueGenres = [...new Set(data.library.map((book) => book.book.genre))];
    setGenres(uniqueGenres);
  }, []);

 // Filtrar libros por género
 const filterBooksByGenre = (genre) => {
  const filteredBooks = data.library.filter((book) => book.book.genre === genre);
  setBooks(filteredBooks);
};



  // remove book list render
  const removeFromReadingList  = (book) => {
    setReadingList((prevReadingList) => prevReadingList.filter((item) => item.id !== book.id));
  }

  // update localStorage with change list render
  // useEffect(() => {
  //   localStorage.setItem("readingList", JSON.stringify(readingList));
  // }, [readingList]);


  const contextValue = {
    books,
    setBooks,
    readingList,
    setReadingList,
    removeFromReadingList,
    genres,
    setGenres,
    filterBooksByGenre,
  }

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  )
}