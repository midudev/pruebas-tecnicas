import { useContext } from "react";
import { Book } from "../Book/Book";
import { BooksContext } from "../../contexts/BooksContext";

export const BooksLibrary = ({ handleOnBookClick, handleFilter }) => {
  const { genders, books, filter } = useContext(BooksContext);
  return (
    <div className="books-library flex flex-col gap-2">
      <div className="flex flex-col gap-1 sm:text-xl">
        <h4>Filtrar por género</h4>
        <select
          className="max-w-min bg-main-bg"
          onChange={(e) => handleFilter(e.target.value)}
        >
          {genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>
      <div className="gap-4 grid grid-cols-2 place-items-center sm:grid-cols-4 sm:gap-8 xl:grid-cols-6 xl:gap-16">
        {books.map((book) => (
          <Book
            key={book.book.ISBN}
            book={book.book}
            onClick={handleOnBookClick}
            filter={filter}
          />
        ))}
      </div>
    </div>
  );
};
