import React, { useEffect, useState } from "react";
import { useLibrary } from "../../hooks/useLibrary";
import Book from "./Book";

export const AvailableBooks = () => {
  const [search, setSearch] = useState("");
  const { availableBooks } = useLibrary();

  useEffect(() => {
    const books = availableBooks.filter(({ book }) => {
      return book.title.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  return (
    <aside className="col-span-3">
      <h3 className="text-left text-3xl text-slate-800">Libros disponibles</h3>
      <p className="text-left">{availableBooks.length} libro(s)</p>
      <section className="m-4">
        <div className="flex flex-row">
          <select
            onChange={(e) => setGenre(e.target.value)}
            name="genre"
            id="genreFilter"
            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="">Seleccionar Genero</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
          </select>

          <select
            onChange={(e) => setPages(e.target.value)}
            name="genre"
            id="genreFilter"
            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="">Seleccionar Paginas</option>
            <option value={100}>Hasta 100</option>
            <option value={200}>Entre 100 y 200</option>
            <option value={300}>entre 200 y 300</option>
            <option value={301}>Mas de 300</option>
          </select>
        </div>
      </section>
      <input
        type="text"
        placeholder="Buscar libro"
        className="border border-gray-300 rounded-lg p-2 mt-2 w-full m-2"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {availableBooks.map(({ book }) => {
          return (
            <li key={book.title}>
              <Book book={book} addToReadingList={() => null} />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default AvailableBooks;
