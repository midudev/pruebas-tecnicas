import { createContext, useState, useEffect } from "react";
import data from "../data/books.json";

export const BooksContext = createContext({});

export const BooksProvider = ({ children }) => { //eslint-disable-line
  // estado para almacenar los libros
  const [books, setBooks] = useState(data.library);

  // estado para almacenar la lista de libros para leer
  const [readingList, setReadingList] = useState([]);

  // estado para almacenar la categoria selecionada
  const [selectedGenre, setSelectedGenre] = useState("all");

  const [avaliableBooks, setAvailableBooks] = useState([]);
  const [avaliableBooksReading, setAvailableBooksReading] = useState([]);

    // funcionar para agrergar un libro a la lista de lectura
    const addToRedingList = (isbn) => {
      // obtener el libro seleccionado
      const bookAdd = books.find((book) => book.book.ISBN === isbn);
  
      // almacenar el libro en el estado
      setReadingList((prevReadingList) => [...prevReadingList, bookAdd]);
  
      // almacenar el libro en el localStorage
      localStorage.setItem(
        "readingList",
        JSON.stringify([...readingList, bookAdd])
      );
  
    }


// Eliminar un libro de la lista de lectura y actualizar el localStorage
const removeBook = (isbn) => {
  // obtener el libro seleccionado
 const deleteBook = readingList.find((book) => book.book.ISBN === isbn);

 // actualizar el estado de la lista de libros
 setBooks(prevBooks => [...prevBooks, deleteBook])

 // actualizar el estado de la lista de lectura
 setReadingList(prevReadingList => prevReadingList.filter((book) => book.book.ISBN !== isbn))

};

// efecto para actualizar el localStorage 
useEffect(() => {
  const storedReadingList = localStorage.getItem("readingList");
  if (storedReadingList) {
    setReadingList(JSON.parse(storedReadingList));
  }
}, []);



  // obtener la cantidad de libros disponibles
  useEffect(() => {
    setAvailableBooks(books.length);
  }, [books]);


  // obtener la cantidad de libros disponibles para leer
  useEffect(() => {
    setAvailableBooksReading(readingList.length);
  }, [readingList])


  const contextValue = {
    books,
    addToRedingList,
    readingList,
    removeBook,
    avaliableBooks,
    avaliableBooksReading,
    selectedGenre,
    setSelectedGenre,
  }

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  )
}