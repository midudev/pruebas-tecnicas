import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";

export const Header = () => {
  const { books, readingList } = useContext(BooksContext);
  return (
    <div>
      <header className="gap-4 grid">
        <h1 className="text-3xl font-bold">
          {books.length} libros disponibles
        </h1>
        <h3 className="text-xl">
          {readingList.length} libros en la lista de lectura
        </h3>
      </header>
    </div>
  );
};
