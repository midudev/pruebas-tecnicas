import { useEffect } from "react";
import { Card } from "../components/Card";
import { getBooksByFilter } from "../helpers/getBooksByFilter";
import { bookStore } from "../state/bookStore";
import { Filters } from "../components/Filters";

export const Books = () => {
  const { books, fetchBooks, readingList, selectedGenre, searchBook } =
    bookStore();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const isBookInReadingList = (ISBN) => {
    return readingList.some((b) => b.book.ISBN === ISBN);
  };

  const filteredBooks = getBooksByFilter(books, selectedGenre, searchBook);

  return (
    <div className="flex flex-col m-10 gap gap-5">
      <Filters />

      <div className="mb-10 grid gap-5 grid-cols-1 xl:grid-cols-4">
        {filteredBooks.map(({ book }) => (
          <Card
            key={book.ISBN}
            inReadingList={isBookInReadingList(book.ISBN)}
            title={book.title}
            pages={book.pages}
            genre={book.genre}
            synopsis={book.synopsis}
            cover={book.cover}
            ISBN={book.ISBN}
          />
        ))}
      </div>
    </div>
  );
};
