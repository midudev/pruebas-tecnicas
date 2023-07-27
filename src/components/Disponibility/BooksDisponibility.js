// BooksDisponibility.js

import React from "react";
import Book from "../Book/Book";
import "./BooksDisponibility.modules.css";
import FilterGenre from "../filterGenre/FilterGenre";
import { useSelector } from "react-redux";
import FilterPages from "../FilterPages/FilterPages";

function BooksDisponibility({ books }) {
  // Utilizamos useSelector para obtener datos del estado global de Redux
  const { counterDisp, toRead, pages } = useSelector((state) => state);

  // Filtrar los libros que no están en la lista de lectura
  const availableBooks = books.filter(
    (book) =>
      !toRead.some((item) => item.ISBN === book.ISBN) &&
      pages <= book.pages &&
      book.pages < 1500
  );

  return (
    <div className="container">
      <div className="header">
        <h1>Libros Disponibles</h1>
        <h2>{counterDisp} en disponibles</h2>
        <FilterGenre />
        <FilterPages />
      </div>
      {/* Renderizamos cada libro disponible utilizando el componente Book */}
      {availableBooks.map((book) => (
        <Book key={book.ISBN} book={book} />
      ))}
    </div>
  );
}

export default BooksDisponibility;
