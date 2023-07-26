import React, { useState, useEffect } from "react";
import { useLibrary } from "../contexts/library.context";

type GenreCountMap = {
  [genre: string]: number;
};

const AsideMenu: React.FC = () => {
  const { books, setFilteredBooks } = useLibrary();
  const [searchedBook, setSearchedBook] = useState<string>("");

  const genreCountMap: GenreCountMap = books.reduce((acc, book) => {
    const genre = book.book.genre;
    acc[genre] = (acc[genre] || 0) + 1;
    return acc;
  }, {} as GenreCountMap);

  const filterBooksByGenre = (genre: string) => {
    const booksByGenre = books.filter((book) => book.book.genre === genre);
    setFilteredBooks(booksByGenre);
  };

  const handleSearcher = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedBook(e.target.value);
  };

  useEffect(() => {
    const searchedBooks = books.filter((book) => {
      const title = book.book.title
        .toLowerCase()
        .includes(searchedBook.toLowerCase());
      const author = book.book.author.name
        .toLowerCase()
        .includes(searchedBook.toLowerCase());
      return title || author;
    });

    setFilteredBooks(searchedBooks);
  }, [searchedBook, books]);

  return (
    <aside className="w-1/6 bg-stone-100 text-stone-800 shadow-xl">
      <div className="sticky top-0 left-0 flex flex-col gap-8 p-8">
        <h3 className="font-bold text-xl">Libroteca</h3>
        <div>
          <h4 className="font-medium text-lg">Catálogo</h4>
          <ul className="flex flex-col gap-6">
            <li className="flex flex-col gap-2 text-sm">
              <div className="font-medium">Disponibles ({books.length})</div>
            </li>
            <li className="flex flex-col gap-2 text-sm">
              <div className="font-medium">Buscar</div>
              <input
                type="text"
                className="px-2 py-1 rounded border border-stone-300 bg-stone-100 text-stone-800"
                placeholder="Título, autor..."
                defaultValue={searchedBook}
                onChange={handleSearcher}
                data-cy="search-by-title-or-author"
              />
            </li>
            <li className="flex flex-col gap-2 text-sm">
              <div className="font-medium">Géneros</div>
              <ul data-cy="search-by-genre">
                {Object.entries(genreCountMap).map(([genre, count]) => {
                  return (
                    <li
                      key={genre}
                      className="cursor-pointer"
                      onClick={() => filterBooksByGenre(genre)}
                    >
                      {genre} ({count})
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default AsideMenu;
