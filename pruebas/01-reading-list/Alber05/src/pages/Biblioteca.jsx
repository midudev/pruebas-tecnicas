import { useState, useEffect } from "react";
import { BookCard } from "../components/books/BookCard";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { Main } from "../components/main/Main";
import { EmptyLibrary } from "../components/emptyLibrary/EmptyLibrary";

export const Biblioteca = () => {
  // Obtener los datos y funciones del contexto
  const {
    libraryBooks,
    search,
    handleSearchedBooks,
    selectedCategory,
    selectedPageRange,
  } = useContext(DataContext);

  // Estado para almacenar los libros a mostrar en la página
  const [booksToDisplay, setBooksToDisplay] = useState(libraryBooks);

  // Utilizar el efecto para actualizar la lista de libros a mostrar cuando cambian los valores de allBooks, search o selectedCategory
  useEffect(() => {
    handleSearchedBooks(
      search,
      libraryBooks,
      setBooksToDisplay,
      selectedCategory,
      selectedPageRange
    );
  }, [libraryBooks, search, selectedCategory, selectedPageRange]);

  return (
    <>
      {booksToDisplay.length === 0 ? (
        <EmptyLibrary />
      ) : (
        <Main>
          <BookCard added={true} booksToDisplay={booksToDisplay} />
        </Main>
      )}
    </>
  );
};
