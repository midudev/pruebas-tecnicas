import { useContext } from "react";
import { Book } from "../Book/Book";
import { BooksContext } from "../../contexts/BooksContext";

export const BooksLibrary = ({ handleOnBookClick, handleFilter }) => {
  const { genders, books, filter } = useContext(BooksContext);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h4>Filtrar por género</h4>
        <select onChange={(e) => handleFilter(e.target.value)}>
          {genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>
      <div className="gap-8 grid grid-cols-4 place-items-center">
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
