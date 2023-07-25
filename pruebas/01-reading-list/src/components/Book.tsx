import React from "react";
import { IBook } from "../types/books";

interface Props {
  book: IBook;
  isInMyList: boolean;
  addToMyList: (book: IBook) => void;
  removeFromMyList: (book: IBook) => void;
}
const Book: React.FC<Props> = ({
  book,
  isInMyList,
  addToMyList,
  removeFromMyList,
}) => {
  const { title, ISBN, author, cover, genre, pages, synopsis, year } =
    book.book;

  return (
    <article className="mb-4">
      <div className="object-cover">
        <img src={cover} alt={title} className="w-full h-full" />
      </div>
      <div className="bg-stone-50">
        <div className="flex flex-col gap-4 text-stone-800">
          <h4>{title}</h4>
          <p>{author.name}</p>
        </div>
      </div>
      <div>
        {isInMyList ? (
          <button
            className="bg-stone-100 px-4 py-1 rounded border border-stone-300"
            onClick={() => removeFromMyList(book)}
          >
            Remove
          </button>
        ) : (
          <button
            className="bg-stone-100 px-4 py-1 rounded border border-stone-300"
            onClick={() => addToMyList(book)}
          >
            Add
          </button>
        )}
      </div>
    </article>
  );
};

export default Book;
