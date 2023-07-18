import { useContext, useEffect } from "react";
import { FilteredBooksContext } from "../context/FilteredBooksContext";
import { ReadListContext } from "../context/ReadListContext";
import useLocalStorage from "../hooks/useLocalStorage";

export function FilterByGenre() {
  const { books, setFilteredBooks } = useContext(FilteredBooksContext)
  const { readList } = useContext(ReadListContext)
  const [filterByGenre, setFilterByGenre] = useLocalStorage('filter-by-genre', '')

  useEffect(() => {
    if (filterByGenre !== "") {
      const filteredByGenre = books.filter(book => book.genre === filterByGenre)
      const filteredBooks = filteredByGenre.filter(book => !readList.some(b => b.ISBN === book.ISBN))
      setFilteredBooks(filteredBooks)
    } else {
      setFilteredBooks(books.filter(book => !readList.some(b => b.ISBN === book.ISBN)))
    }
  }, [books, setFilteredBooks, filterByGenre, readList])

  const uniqueGenres = [...new Set(books.map(book => book.genre))]

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterByGenre(e.target.value);
  };

  return (
    <select className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 self-start font-pop" value={filterByGenre} onChange={handleSelectChange}>
      <option value="">All Genres</option>
      {uniqueGenres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
    </select>
  );
}