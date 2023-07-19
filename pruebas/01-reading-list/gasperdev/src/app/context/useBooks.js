"use client";
import { createContext, useContext, useEffect, useState } from "react";
// Importación del conjunto inicial de libros
import bookData from "../../../books.json";
// Importación de la función hook para filtrar los libros.
import { filters } from "../hook/useFilteredBooks";

// Creación del contexto BooksContext. Este será el medio por el cual pasaremos
// estado y funciones relacionadas al resto de nuestra aplicación.
export const BooksContext = createContext(null);

// Hook para utilizar el contexto en cualquier lugar de la aplicación.
export const useBooksData = () => {
  const context = useContext(BooksContext);
  return context;
};

// Proveedor del contexto de BooksContext. Este rodeará a todos nuestros componentes que
// necesiten acceso a las propiedades y funciones que proporciona.
export default function BooksContextProvider({ children }) {
  // Declaración de varios estados que serán necesarios.
  const [allBooks, setAllBooks] = useState([]);
  const [pagesAllBooks, setPagesAllBooks] = useState(2);
  const [searchBooks, setSearchBooks] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [isLoading, setIsLoading] = useState(true);

  // UseEffect que establecerá el estado inicial de allBooks y establecerá
  // isLoading como false una vez la data se haya cargado. Se ejecuta
  // en el primer renderizado.
  useEffect(() => {
    setAllBooks(bookData.library);
    setIsLoading(false);
  }, []);

  // Se filtran los libros según varios criterios establecidos.
  const filteredBooks = filters(
    allBooks,
    selectedGenre,
    pagesAllBooks,
    searchBooks
  );

  // Creación de un array de géneros únicos a partir de allBooks.
  const uniqueGenre = [...new Set(allBooks.map((res) => res.book.genre))];
  if (!uniqueGenre.includes("Todos")) {
    uniqueGenre.unshift("Todos");
  }

  // Los children (componentes envueltos) tendrán acceso a los valores
  // proporcionados aquí.
  return (
    <BooksContext.Provider
      value={{
        allBooks: filteredBooks,
        selectedGenre,
        setSelectedGenre,
        searchBooks,
        setSearchBooks,
        isLoading,
        uniqueGenre,
        setPagesAllBooks,
        pagesAllBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
