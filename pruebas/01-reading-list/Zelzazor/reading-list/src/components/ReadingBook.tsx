import { useState } from "react";
import { useStore } from "../store";
import { type Book } from "../types";

interface ReadingBookProps {
  book: Book;
}

export const ReadingBook = ({ book }: ReadingBookProps) => {
  const removeFromReadingList = useStore(
    (state) => state.removeFromReadingList
  );
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex justify-center"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <img src={book.cover} alt={book.title} className="w-52 h-80" />
      {isHovered && (
        <button
          onClick={() => {
            removeFromReadingList(book);
          }}
          className="absolute top-0 left-0 justify-self-start  bg-blue-500 text-white px-2 py-1 rounded-[50%] hover:bg-blue-800"
        >
          &times;
        </button>
      )}
    </div>
  );
};
