import React, { useEffect, useMemo, useState } from "react";
import { useLibrary } from "../../hooks/useLibrary";
import Book from "./Book";
import { BookCount } from "./BookCount";
import { Filters } from "./Filters";

export const AvailableBooks = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [pages, setPages] = useState(0);
  const { availableBooks, addToReadingList } = useLibrary();

  const filteredBooksByGenre = useMemo(() => {
    return genre.length > 0
      ? availableBooks.filter(({ book }) => book.genre === genre)
      : availableBooks;
  }, [availableBooks, genre]);

  const filteredBooksByPages = useMemo(() => {
    return pages > 0
      ? filteredBooksByGenre.filter(({ book }) => book.pages <= pages)
      : filteredBooksByGenre;
  }, [availableBooks, pages, filteredBooksByGenre]);

  const filteredBooksBySearch = useMemo(() => {
    return search.length > 0
      ? filteredBooksByPages.filter(({ book }) => {
          return book.title.toLowerCase().includes(search.toLowerCase());
        })
      : filteredBooksByPages;
  }, [filteredBooksByPages, search]);

  const bookCount = filteredBooksBySearch?.length;

  return (
    <section className="col-span-3">
      <input
        type="text"
        placeholder="Buscar libro"
        className="rounded-full p-3 pl-4 my-5 w-full sm:text-sm bg-slate-200 focus:outline-none focus:border-sky-500 focus:ring"
        onChange={(e) => setSearch(e.target.value)}
      />

      <Filters handleClick={setGenre} />

      <div className="flex flex-row items-center gap-3">
        <h1 className="text-left text-2xl text-slate-800">Disponibles</h1>
        <BookCount>{bookCount}</BookCount>
      </div>

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-5 items-center">
        {filteredBooksBySearch.map(({ book }) => {
          return (
            <li key={book.title}>
              <Book book={book} handleAdd={addToReadingList} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AvailableBooks;
