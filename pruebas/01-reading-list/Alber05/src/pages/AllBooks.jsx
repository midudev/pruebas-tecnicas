import { useState, useEffect } from "react";
import { BookCard } from "../components/books/BookCard";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { Main } from "../components/main/Main";
import { EmptyBooks } from "../components/emptyBooks/EmptyBooks";

export const AllBooks = () => {
  // Obtener los datos y funciones del contexto
  const {
    allBooks,
    search,
    handleSearchedBooks,
    selectedCategory,
    selectedPageRange,
  } = useContext(DataContext);

  // Estado para almacenar los libros a mostrar en la página
  const [booksToDisplay, setBooksToDisplay] = useState(allBooks);

  // Utilizar el efecto para actualizar la lista de libros a mostrar cuando cambian los valores de allBooks, search o selectedCategory
  useEffect(() => {
    handleSearchedBooks(
      search,
      allBooks,
      setBooksToDisplay,
      selectedCategory,
      selectedPageRange
    );
  }, [allBooks, search, selectedCategory, selectedPageRange]);

  return (
    <>
      {booksToDisplay.length === 0 ? (
        <EmptyBooks />
      ) : (
        <Main>
          <BookCard added={false} booksToDisplay={booksToDisplay} />
        </Main>
      )}
    </>
  );
};
