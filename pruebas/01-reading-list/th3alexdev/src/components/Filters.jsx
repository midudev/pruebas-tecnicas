import { useContext, useRef, useEffect } from "react";
import { FiltersContext } from "../context/contextFiltersProvider";
import { FilterIcon } from "./Icons";
import { useFilters } from "../hooks/useFilters";

export default function Filters() {
  const numOfPagesInput = useRef();
  const numOfPagesRange = useRef();

  const { filters, setFilters } = useContext(FiltersContext);

  const { maxPosiblePages, sortByPages, pages } = filters;
  const { minPages, maxPages } = pages;

  const [handleChangeRange, handleSetRange, removeRange] = useFilters({
    numOfPagesInput,
    numOfPagesRange,
  });

  useEffect(() => {
    numOfPagesRange.current.value = maxPosiblePages
  }, [maxPosiblePages]);

  return (
    <div className="w-full xl:w-screen xl:max-w-[255px] relative px-4 flex flex-col 4xs:flex-row gap-8 md:flex-col">
      <div className="basis-1/2">
        <form onSubmit={(e) => e.preventDefault}>
          <h3 className="font-semibold text-lg leading-6 mb-2 line-clamp-2 sm:text-balance">
            <label className="cursor-auto">Por cantidad de páginas</label>
          </h3>
          <input
            aria-valuemin={minPages}
            aria-valuemax={maxPosiblePages}
            type="range"
            min={minPages}
            max={maxPosiblePages}
            step="1"
            className="p-0 whitespace-nowrap w-full h-max mb-4"
            onChange={(e) => handleChangeRange(e)}
            ref={numOfPagesRange}
          />
          <div
            className={`flex gap-2 items-center ${
              sortByPages ? "opacity-100" : "opacity-60"
            }`}
          >
            <label htmlFor="pages" className="uppercase text-sm">
              Max.
            </label>
            <input
              type="number"
              value={maxPages}
              id="pages"
              min={10}
              max={maxPosiblePages}
              className="h-[16px] w-10 bg-transparent cursor-default outline-none"
              onChange={(e) => handleSetRange(e)}
              ref={numOfPagesInput}
            />

            <button
              className={`${
                sortByPages ? "pointer-events-auto" : "pointer-events-none"
              }`}
              onClick={(e) => removeRange(e)}
              title="Quitar filtro"
              aria-label="Quitar filtro"
            >
              <FilterIcon />
            </button>
          </div>
        </form>
      </div>
      <div className="basis-1/2">
        <h3 className="font-semibold text-lg mb-2">Por género</h3>
        <ul className="flex flex-wrap md:flex-nowrap md:flex-col gap-[0.3rem]">
          {filters.genres.map((genre) => (
            <li key={genre} className="whitespace-nowrap">
              <button
                data-value={genre}
                onClick={(e) =>
                  genre === filters.genre
                    ? setFilters({ ...filters, genre: "" })
                    : setFilters({ ...filters, genre })
                }
              >
                <span
                  className={`filter-pill ${
                    filters.genre === genre
                      ? "bg-primary text-white opacity-100"
                      : null
                  }`}
                >
                  {genre}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
