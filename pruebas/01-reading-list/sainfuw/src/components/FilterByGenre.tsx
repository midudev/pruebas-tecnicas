import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import useLocalStorage from "../hooks/useLocalStorage";

export function FilterByGenre() {
  const { books, setFilteredBooks } = useContext(AppContext)
  const [filterByGenre, setFilterByGenre] = useLocalStorage('filter-by-genre', '')

  useEffect(() => {
    filterByGenre
      ? setFilteredBooks(books.filter(book => book.genre === filterByGenre))
      : setFilteredBooks(books)
  }, [books, setFilteredBooks, filterByGenre])

  const uniqueGenres = [...new Set(books.map(book => book.genre))]

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterByGenre(e.target.value);
  };

  return (
    <div>
      <select value={filterByGenre} onChange={handleSelectChange}>
        <option value="">All Genres</option>
        {uniqueGenres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
      </select>
    </div>
  );
}