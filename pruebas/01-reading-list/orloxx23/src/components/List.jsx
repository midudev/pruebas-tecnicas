import { BooksContext } from "@/context/BooksContext";
import React, { useContext } from "react";
import { Book } from ".";

/**
 * Componente List
 * @returns {JSX.Element} - Elemento JSX que representa la lista de libros.
 */
export default function List() {
  const { books } = useContext(BooksContext);

  return (
    <div className="w-full p-4 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {/* Renderizado de libros */}
      {books.map((book) => (
        <Book key={book.ISBN} book={book} />
      ))}
    </div>
  );
}
