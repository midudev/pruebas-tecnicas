import { BookList } from "./BookList";
import React, { useContext } from "react";
import { BooksContext } from "../Context/BooksContext";

export const BookListContainer = () => {
  const {
    filterType,
    books,
    filteredByGenre,
    filteredByPages,
    handleReadingList,
  } = useContext(BooksContext);

  return (
    <section className="books-list-container">
      {!filterType || filterType === "nofilter"
        ? books &&
          books.map((book) => (
            <BookList
              book={book}
              key={book.book.ISBN}
              handleReadingList={handleReadingList}
            />
          ))
        : filteredByGenre && filterType === "filterbygenre"
        ? filteredByGenre.map((book) => (
            <BookList
              book={book}
              key={book.book.ISBN}
              handleReadingList={handleReadingList}
            />
          ))
        : filteredByPages &&
          filteredByPages.map((book) => (
            <BookList
              book={book}
              key={book.book.ISBN}
              handleReadingList={handleReadingList}
            />
          ))}
    </section>
  );
};
