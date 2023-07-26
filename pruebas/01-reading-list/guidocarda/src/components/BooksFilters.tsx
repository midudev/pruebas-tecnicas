import { SetStateAction } from "react";

interface BooksFiltersProps {
  pagesCount: number;
  setPagesCount: React.Dispatch<SetStateAction<number>>;
  genre: string;
  setGenre: React.Dispatch<SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<SetStateAction<string>>;
  bookGenres: string[];
}

function BooksFilters(props: BooksFiltersProps) {
  const {
    pagesCount,
    setPagesCount,
    genre,
    setGenre,
    searchQuery,
    setSearchQuery,
    bookGenres,
  } = props;

  return (
    <div className="filters">
      <div className="filter-group">
        <label htmlFor="pages-range">Cantidad de paginas</label>
        <input
          type="range"
          name="pages-range"
          className="range"
          value={pagesCount}
          min={0}
          max={1000}
          onChange={(e) => setPagesCount(Number(e.target.value))}
          step={100}
        />
        <span className="pages-count">
          {pagesCount === 0 ? "" : `< ${pagesCount}`}
        </span>
      </div>
      <div className="filter-group">
        <label htmlFor="genre-filter">Filtrar por género</label>
        <select
          name="genre"
          className="genre-filter"
          id="genre-filter"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value={""}>Todos</option>
          {bookGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="search">Buscar</label>
        <input
          type="text"
          name="search"
          className="search-input"
          id="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default BooksFilters;
