import { useEffect, useMemo } from "react";
import { getBooksByFilter } from "../helpers/getBooksByFilter";
import { bookStore } from "../state/bookStore";
import { Filters } from "../components/Filters";
import { BookList } from "../components/BookList";

export const Books = () => {
  const { books, fetchBooks, readingList, selectedGenre, searchBook } =
    bookStore();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const filteredBooks = useMemo(
    () => getBooksByFilter(books, selectedGenre, searchBook),
    [books, selectedGenre, searchBook]
  );

  return (
    <div className="flex flex-col m-10 gap gap-5">
      <Filters />
      <BookList books={filteredBooks} readingList={readingList} />
    </div>
  );
};
