import { useStore } from "../store";
import { ReadingBook } from "./ReadingBook";

export const ReadingList = () => {
  const books = useStore((state) => state.readingList);
  return (
    <>
      <div className="grid gap-4 grid-cols-images">
        {books.map((book) => (
          <ReadingBook key={book.title} book={book} />
        ))}
      </div>
    </>
  );
};
