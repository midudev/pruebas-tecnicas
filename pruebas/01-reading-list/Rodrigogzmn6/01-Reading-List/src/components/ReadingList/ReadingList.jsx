import { useContext } from "react";
import { ReadingBook } from "../ReadingBook/ReadingBook";
import { BooksContext } from "../../contexts/BooksContext";

export const ReadingList = ({ handleOnBookClick }) => {
  const { readingList } = useContext(BooksContext);
  return (
    <div className="flex flex-col gap-6 items-center px-12">
      <h2>Lista de lectura</h2>
      {readingList.map((book, index) => (
        <ReadingBook
          key={book.book.ISBN}
          book={book.book}
          index={index}
          onClick={handleOnBookClick}
        />
      ))}
    </div>
  );
};
