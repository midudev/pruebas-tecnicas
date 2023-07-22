import { useMemo } from "react";
import { useStore } from "../store";

export const BookList = () => {
  const books = useStore((state) => state.library);
  const selectedGenre = useStore((state) => state.filterGenre);
  const addToReadingList = useStore((state) => state.addToReadingList);

  const filteredBooks = useMemo(() => {
    if (selectedGenre === "all") {
      return books;
    } else {
      return books.filter((book) => book.genre === selectedGenre);
    }
  }, [books, selectedGenre]);

  return (
    <>
      <div className="grid place-items-center gap-4 grid-cols-images">
        {filteredBooks.map((book) => (
          <div
            key={book.title}
            className="cursor-pointer"
            onClick={() => {
              addToReadingList(book);
            }}
          >
            <img src={book.cover} alt={book.title} className="w-52 h-80" />
          </div>
        ))}
      </div>
    </>
  );
};
