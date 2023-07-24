import { useId } from "react";
import { useBooks } from "../hooks/useBooks";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const { genres } = useBooks()
  const { filters, setFilters } = useFilters()
  const pageId = useId()

  function handleRangeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilters({ ...filters, pages: Number(e.target.value) })
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilters({ ...filters, genre: e.target.value })
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-2 w-[160px]">
        <label htmlFor={pageId} className="flex justify-between text-xs font-pop">
          <span>Maximo de Paginas:</span>
          <span> {filters.pages}</span>
        </label>
        <input
          type="range"
          id={pageId}
          min='0'
          max='2000'
          onChange={handleRangeChange}
          value={filters.pages}
        />
      </div>
      <select
        value={filters.genre}
        onChange={handleSelectChange}
        className="border border-background-light bg-secondary text-sm rounded-lg block w-full p-2.5 text-primary self-start font-pop"
      >
        <option value="all">All Genres</option>
        {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
      </select>
    </section>
  );
}