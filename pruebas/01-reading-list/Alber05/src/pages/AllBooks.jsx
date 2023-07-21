import { useState, useEffect } from "react";
import { useFilteredBooks } from "../hooks/useFilteredBooks";
import { BookCard } from "../components/books/BookCard";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { Main } from "../components/main/Main";
import { EmptyLibrary } from "../components/emptyLibrary/EmptyLibrary";

export const AllBooks = () => {
  // // Obtener los datos y funciones del contexto
  const { allBooks, search, selectedCategory, selectedPageRange } =
    useContext(DataContext);

  const booksToDisplay = useFilteredBooks(
    search,
    allBooks,
    selectedCategory,
    selectedPageRange
  );

  return (
    <>
      {booksToDisplay.length === 0 ? (
        <EmptyLibrary />
      ) : (
        <Main>
          <BookCard added={false} booksToDisplay={booksToDisplay} />
        </Main>
      )}
    </>
  );
};
