import { ReadingBook } from "../ReadingBook/ReadingBook";

export const ReadingList = ({ readingListBooks, handleOnBookClick }) => {
  return (
    <div className="flex flex-col gap-6 items-center px-12">
      <h2>Lista de lectura</h2>
      {readingListBooks.map((book, index) => (
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
