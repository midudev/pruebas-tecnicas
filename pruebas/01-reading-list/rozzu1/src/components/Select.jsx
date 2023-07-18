import { useCallback, useMemo } from "react";
import { bookStore } from "../state/bookStore";

export const Select = () => {
  const { books, selectedGenre, setSelectedGenre } = bookStore();

  const uniqueGenres = useMemo(() => {
    const genres = new Set();
    return books.reduce((uniqueGenres, { book }) => {
      if (!genres.has(book.genre)) {
        genres.add(book.genre);
        uniqueGenres.push(book.genre);
      }
      return uniqueGenres;
    }, []);
  }, [books]);

  const handleGenreChange = useCallback(
    (event) => {
      setSelectedGenre(event.target.value);
    },
    [setSelectedGenre]
  );

  const renderGenreOptions = () => {
    return (
      <>
        <option value="">All Genres</option>
        {uniqueGenres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </>
    );
  };

  return (
    <div className="">
      <p className="text-base">Filter by Genre</p>
      <select
        value={selectedGenre}
        className="select w-full max-w-xs border border-neutral"
        onChange={handleGenreChange}
      >
        {renderGenreOptions()}
      </select>
    </div>
  );
};
