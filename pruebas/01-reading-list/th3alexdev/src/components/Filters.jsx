import { useContext, useRef } from "react";
import { FiltersContext } from "../context/contextFiltersProvider";
import { FilterIcon } from "./Icons";
import { useFilters } from "../hooks/useFilters";
import Brand from "./Brand";

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

  return (
    <section className="relative px-4 flex flex-nowrap flex-col gap-8 pt-8">
      <div className="fixed flex flex-col gap-8">
        <Brand />
        <div>
          <form onSubmit={(e) => e.preventDefault}>
            <h3 className="w-4/5 font-semibold text-lg leading-6 mb-2 line-clamp-2">
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
                onClick={() => removeRange()}
                title="Quitar filtro"
                aria-label="Quitar filtro"
              >
                <FilterIcon />
              </button>
            </div>
          </form>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Por género</h3>
          <ul className="flex flex-nowrap flex-col gap-[0.3rem]">
            {filters.genres.map((genre) => (
              <li key={genre}>
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
    </section>
  );
}
