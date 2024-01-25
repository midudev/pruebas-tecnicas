"use client";
import { useBooksData } from "../context/useBooks";
import { SearchIcon } from "../utils/Icons";

export default function SearchBooks() {
  // `nos permite haser buesquedas en el array de libros.
  const { searchBooks, setSearchBooks } = useBooksData();

  return (
    <div className="w-full">
      <div className="relative w-full md:w-64">
        <input
          onChange={(e) => setSearchBooks(e.target.value)}
          value={searchBooks}
          type="search"
          id="search-dropdown"
          className="block rounded-l-lg p-2.5 w-full  z-20 text-sm text-gray-900 bg-slate-200 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
          placeholder="Una aventura épica,Juego de Tronos"
          required
        />
        <button
          type="button"
          className="absolute top-0 right-0 p-2.5 text-sm font-medium text-gray-900 bg-slate-200 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
        >
          <SearchIcon />
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  );
}
