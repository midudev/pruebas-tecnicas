import React, { useContext } from "react";
import { LibraryContext } from "../../context/LibraryContext";
import Book from "./Book";
import { BookCount } from "./BookCount";

export const ReadingList = () => {
  const { readingList, removeFromReadingList } = useContext(LibraryContext);
  return (
    <section className="px-4 rounded-lg">
      <h3 className="text-center text-3xl text-slate-800">Lista de lectura</h3>

      {readingList?.length === 0 && <NoBooks />}
      {readingList?.length > 0 && <BookCount>{readingList?.length}</BookCount>}

      <ul className="flex flex-col gap-4 justify-center items-center">
        {readingList?.map((book, index) => {
          return (
            <li key={book.title}>
              <Book book={book} handleRemove={removeFromReadingList} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const NoBooks = () => (
  <p className="text-md text-left">No hay libros en tu lista 😢</p>
);

export default ReadingList;
