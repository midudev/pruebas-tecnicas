import React, { useState, useEffect, useMemo } from "react";
import booksData from "../../books.json";
import BookCard from "./components/BookCard";
import { LibraryItem } from "./types";
import Sidebar from "./components/SideBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type PageInputValues = {
  [key: number]: number | undefined;
};

const App: React.FC = () => {
  const storedFavorites = localStorage.getItem("favorites");
  const initialFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

  const storedPageInputValues = localStorage.getItem("pageInputValues");
  const initialPageInputValues = storedPageInputValues
    ? JSON.parse(storedPageInputValues)
    : {};

  const [favorites, setFavorites] = useState<string[]>(initialFavorites);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [genreFilter, setGenreFilter] = useState<string | null>(null);
  const [pageFilter, setPageFilter] = useState<number | null>(null);
  const initialPageFilter = 150;
  // Cargar el estado pageInputValues desde el almacenamiento local
  const [pageInputValues, setPageInputValues] = useState<PageInputValues>(
    initialPageInputValues
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    localStorage.setItem("pageInputValues", JSON.stringify(pageInputValues));
  }, [favorites, pageInputValues]);

  const toggleFavorite = (title: string) => {
    const updatedFavorites = favorites.includes(title)
      ? favorites.filter((item) => item !== title)
      : [...favorites, title];
    setFavorites(updatedFavorites);
  };

  const removeFavorite = (title: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item !== title)
    );
  };

  const filteredBooks = useMemo(() => {
    const filtered = booksData.library.filter((item: LibraryItem) => {
      const passesGenreFilter = !genreFilter || item.book.genre === genreFilter;
      const passesPageFilter =
        pageFilter === null || item.book.pages >= pageFilter;
      return passesGenreFilter && passesPageFilter;
    });

    return filtered.sort((a, b) => b.book.title.localeCompare(a.book.title));
  }, [genreFilter, pageFilter]);

  const noBooksMessage = filteredBooks.length === 0 && (
    <p className="text-center text-gray-500">
      No hay libros con tantas páginas disponibles para este género.
    </p>
  );

  return (
    <div className="relative md:m-12">
      <div className="right-20 fixed top-[2em] flex">
        <button
          className="flex flex-col h-12 w-12 border-2 border-white rounded justify-center fixed items-center top-3 group bg-opacity-60 backdrop-blur-md"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <div
            className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
              sidebarOpen
                ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            } text-white p-4`}
          />
          <div
            className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
              sidebarOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            } text-white`}
          />
          <div
            className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
              sidebarOpen
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            } text-white`}
          />
        </button>
      </div>

      <div className="w-full mt-[6em]">
        <section className="flex flex-col md:flex-row justify-center gap-12">
          <div className="flex items-center justify-center md:w-1/2 mb-4 md:mb-0">
            <select
              onChange={(e) => setGenreFilter(e.target.value)}
              className="w-[1/2] appearance-none text-white px-4 py-2 border rounded-lg bg-black focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="">Todos los géneros</option>
              {[
                ...new Set(
                  booksData.library.map((item: LibraryItem) => item.book.genre)
                ),
              ].map((genre: string, index: number) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-[20em] m-auto px-[2em] space-y-2 p-2 ">
            <input
              type="range"
              className="w-full"
              min="1"
              max={Math.max(
                ...booksData.library.map((item: LibraryItem) => item.book.pages)
              )}
              step="1"
              value={pageFilter !== null ? pageFilter : initialPageFilter}
              onChange={(e) =>
                setPageFilter(
                  e.target.value !== "" ? parseInt(e.target.value) : null
                )
              }
            />
            <ul className="flex justify-between w-full px-[10px]">
              <li className="flex justify-center relative">
                <span className="absolute">0</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">600</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">1200</span>
              </li>
            </ul>
          </div>
        </section>

        <h1 className="text-5xl font-bold mb-4 text-black flex justify-center">
          Libros
        </h1>
        <div className="mt-[1.3em] text-2xl">{noBooksMessage}</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-[2em]">
          {filteredBooks.map((item: LibraryItem, index: number) => (
            <BookCard
              key={index}
              book={item.book}
              isFavorite={favorites.includes(item.book.title)}
              toggleFavorite={() => toggleFavorite(item.book.title)}
            />
          ))}
        </div>
      </div>

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(!sidebarOpen)}
        favoriteContent={
          <Slider
            infinite
            slidesToShow={4}
            slidesToScroll={2}
            vertical
            verticalSwiping
            arrows={false}
          >
            {favorites.map((title, index) => {
              const book = booksData.library.find(
                (item: LibraryItem) => item.book.title === title
              );

              const maxPages = book ? book.book.pages : 0;

              return (
                <li
                  key={index}
                  className="mb-2 flex flex-col md:flex-row justify-between items-center md:items-baseline"
                >
                  <div className="flex gap-3 my-4 flex-col justify-evenly md:flex-row items-center w-full">
                    <img
                      src={book?.book.cover}
                      alt={title}
                      className="object-cover rounded-md h-[5em] w-[5em]"
                    />
                    <div className="truncate w-full md:w-40 md:mr-2 mb-2 md:mb-0">
                      <span>{title}</span>
                    </div>
                    <input
                      type="number"
                      className="border outline-none decoration-none text-black bg-white rounded-md px-2 py-1 md:w-20 mr-2"
                      placeholder="Página"
                      max={maxPages}
                      value={
                        pageInputValues[index] !== undefined
                          ? pageInputValues[index]
                          : ""
                      }
                      onChange={(e) => {
                        const newValue =
                          e.target.value === ""
                            ? undefined
                            : parseInt(e.target.value);
                        if (
                          newValue === undefined ||
                          (!isNaN(newValue) && newValue <= maxPages)
                        ) {
                          setPageInputValues((prevValues) => ({
                            ...prevValues,
                            [index]:
                              newValue !== undefined ? newValue : undefined,
                          }));
                        }
                      }}
                    />

                    <button
                      onClick={() => removeFavorite(title)}
                      className="text-black bg-white hover:bg-gradient-to-tl from-red-500 to-red-700  hover:text-white px-3 py-1 rounded-md"
                    >
                      X
                    </button>
                  </div>
                </li>
              );
            })}
          </Slider>
        }
      />
    </div>
  );
};

export default App;
