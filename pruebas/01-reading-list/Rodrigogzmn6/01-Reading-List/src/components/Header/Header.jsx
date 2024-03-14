import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";

export const Header = () => {
  const { books, readingList } = useContext(BooksContext);
  return (
    <div>
      <header className="flex flex-col gap-2 text-center">
        <h1 className="font-bold text-2xl sm:text-3xl">
          {books.length} libros disponibles
        </h1>
        <h3 className="text-xl sm:text-2xl">
          {readingList.length} libros en la lista de lectura
        </h3>
      </header>
    </div>
  );
};
