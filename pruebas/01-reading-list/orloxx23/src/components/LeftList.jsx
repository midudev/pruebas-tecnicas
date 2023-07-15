import React, { useContext } from "react";
import { BooksContext } from "@/context/BooksContext";
import Book from "./Book";

/**
 * Componente LeftList
 * @returns {JSX.Element} - Elemento JSX que representa la lista de libros en la barra lateral.
 */
export default function LeftList() {
  const { list } = useContext(BooksContext);

  return (
    <>
      <div className="w-full h-3/6 pb-16 p-4 md:pb-8 flex flex-col gap-4 overflow-y-auto">
        {list?.map((book) => (
          <Book key={book.ISBN} book={book} inList={true} />
        ))}
      </div>
    </>
  );
}
