import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function FilterByGenre() {
  const { books, filterByGenre, setFilterByGenre } = useContext(AppContext)

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