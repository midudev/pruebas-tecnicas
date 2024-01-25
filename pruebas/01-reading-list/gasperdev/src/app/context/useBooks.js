"use client";
import { createContext, useContext, useEffect, useState } from "react";
// Importación del conjunto inicial de libros
import bookData from "../../../books.json";
// Importación de la función hook para filtrar los libros.
import { filters } from "../hook/useFilteredBooks";
import { useUniqueGenre } from "../hook/useUniqueGenre";
import { useBooksMaxPages } from "../hook/useBooksMaxPages";

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

  useEffect(() => {
    //  bookData es la lista de objetos de libros
    setAllBooks(bookData.library);
    setIsLoading(false);
    // Usamos hook personalizado para encontrar el libro con más páginas
  }, [allBooks]);

  const maxPagesCount = useBooksMaxPages(allBooks);
  // Se filtran los libros según varios criterios establecidos.
  const filteredBooks = filters(
    allBooks,
    selectedGenre,
    pagesAllBooks,
    searchBooks
  );

  // Creación de un array de géneros únicos a partir de allBooks.
  const uniqueGenre = useUniqueGenre(allBooks);

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
        maxPagesCount,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
