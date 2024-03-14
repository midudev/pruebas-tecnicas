import { useContext } from "react";
import { ReadingBook } from "../ReadingBook/ReadingBook";
import { BooksContext } from "../../contexts/BooksContext";
import "./ReadingList.css";

export const ReadingList = ({ handleOnBookClick }) => {
  const { readingList } = useContext(BooksContext);
  const dots = [1, 2, 3, 4, 5, 6];
  return (
    <div className="reading-list flex flex-col gap-4 items-center px-6 flex-grow sm:gap-6">
      <h2 className="border-primary-text text-xl sm:text-3xl lg:text-center">
        Lista de lectura
      </h2>
      <div className="flex gap-4 sm:gap-6">
        {dots.map((dot) => (
          <div
            key={dot}
            className="h-1 w-1 rounded-full bg-primary-text sm:h-2 sm:w-2"
          ></div>
        ))}
      </div>
      <div className="reading-list-books flex flex-col text-center sm:inline-block sm:w-full sm:whitespace-nowrap sm:overflow-x-auto lg:flex lg:flex-col lg:whitespace-normal lg:gap-4 lg:items-center">
        {readingList.map((book, index) => (
          <ReadingBook
            key={book.book.ISBN}
            book={book.book}
            index={index}
            onClick={handleOnBookClick}
          />
        ))}
      </div>
    </div>
  );
};
