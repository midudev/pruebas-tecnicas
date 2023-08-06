import React, { useState, useEffect } from "react";
import booksData from "../../books.json";
import BookCard from "./components/BookCard";
import { LibraryItem } from "./types";
import Sidebar from "./components/SideBar";

const App: React.FC = () => {
  const storedFavorites = localStorage.getItem("favorites");
  const initialFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

  const [favorites, setFavorites] = useState<string[]>(initialFavorites);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (title: string) => {
    const updatedFavorites = favorites.includes(title)
      ? favorites.filter((item) => item !== title)
      : [...favorites, title];
    setFavorites(updatedFavorites);
  };

  const removeFavorite = (title: string) => {
    setFavorites(favorites.filter((item) => item !== title));
  };

  const favoriteContent = (
    <ul className="bg-white">
      {favorites.map((title, index) => (
        <li key={index} className="mb-2 flex justify-between items-baseline">
          <span>{title}</span>
          <button
            onClick={() => removeFavorite(title)}
            className="ml-2 text-black bg-white hover:bg-gradient-to-r from-orange-300 to-red-500 animate-gradient-x hover:text-white"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className="relative m-12 ">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-black text-white px-4 h-16 py-2 rounded-full fixed top-3 right-3 m-2 flex items-center"
        >
          <span>Leyendo</span>
        </button>
        <div className="w-full  pr-4">
          <h1 className="text-5xl font-bold mb-4 text-black flex justify-center">
            Libros
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-[2em]">
            {booksData.library.map((item: LibraryItem, index: number) => (
              <BookCard
                key={index}
                book={item.book}
                isFavorite={favorites.includes(item.book.title)}
                toggleFavorite={() => toggleFavorite(item.book.title)}
              />
            ))}
          </div>
        </div>

        <Sidebar isOpen={sidebarOpen} favoriteContent={favoriteContent} />
      </div>
    </>
  );
};

export default App;
