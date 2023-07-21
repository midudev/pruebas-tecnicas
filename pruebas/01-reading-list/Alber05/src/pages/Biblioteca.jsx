import { useState, useEffect } from "react";
import { useFilteredBooks } from "../hooks/useFilteredBooks";
import { BookCard } from "../components/books/BookCard";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { Main } from "../components/main/Main";
import { EmptyLibrary } from "../components/emptyLibrary/EmptyLibrary";

export const Biblioteca = () => {
  // Obtener los datos y funciones del contexto
  const { libraryBooks, search, selectedCategory, selectedPageRange } =
    useContext(DataContext);

  const booksToDisplay = useFilteredBooks(
    search,
    libraryBooks,
    selectedCategory,
    selectedPageRange
  );

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
