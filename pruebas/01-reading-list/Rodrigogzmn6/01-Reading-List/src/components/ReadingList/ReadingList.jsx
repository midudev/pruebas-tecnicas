import { useContext } from "react";
import { ReadingBook } from "../ReadingBook/ReadingBook";
import { BooksContext } from "../../contexts/BooksContext";
import "./ReadingList.css";

export const ReadingList = ({ handleOnBookClick }) => {
  const { readingList } = useContext(BooksContext);
  return (
    <div className="reading-list flex flex-col gap-6 items-center px-12 flex-grow">
      <h2 className="text-2xl border-b border-primary-text">
        Lista de lectura
      </h2>
      <div className="reading-list-books flex flex-col items-center">
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
