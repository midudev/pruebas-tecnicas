import { useCallback } from "react";
import { bookStore } from "../state/bookStore";
import { GenreOptions } from "./GenreOptions";

export const Select = () => {
  const { books, selectedGenre, setSelectedGenre } = bookStore();

  const uniqueGenres = new Set(books.map(({ book }) => book.genre));

  const handleGenreChange = useCallback(
    (event) => {
      setSelectedGenre(event.target.value);
    },
    [setSelectedGenre]
  );

  return (
    <div className="">
      <p className="text-base">Filter by Genre</p>
      <select
        value={selectedGenre}
        className="select w-full max-w-xs border border-neutral"
        onChange={handleGenreChange}
      >
        <GenreOptions uniqueGenres={uniqueGenres} />
      </select>
    </div>
  );
};
