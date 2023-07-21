import React from "react";
import { IBook } from "../types/books";

interface Props {
  book: IBook;
}
const Book: React.FC<Props> = ({ book }) => {
  const { title, ISBN, author, cover, genre, pages, synopsis, year } =
    book.book;
  return (
    <article className="relative">
      <div className="w-full h-full object-cover">
        <img src={cover} alt={title} className="w-full h-full" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-80 bg-stone-50">
        <div className="flex flex-col gap-4 text-stone-800">
          <h4>{title}</h4>
          <p>{author.name}</p>
        </div>
      </div>
    </article>
  );
};

export default Book;
