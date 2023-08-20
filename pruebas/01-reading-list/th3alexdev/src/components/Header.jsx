import { useContext, useRef } from "react";
import { FiltersContext } from "../context/contextFiltersProvider";
import { SearchIcon, CloseIcon } from "./Icons";
import { SavedBooksIconRegular, SavedBooksIconSolid } from "./Icons";
import FlipCounter from "./FlipCounter";

export default function Header({ showSidebar, toggleSidebar }) {
  const searchInputRef = useRef();
  const { filters, setFilters } = useContext(FiltersContext);

  const { sortByTitle } = filters;

  const removeSortByTitle = () => {
    setFilters({ ...filters, sortByTitle: "" });
    searchInputRef.current.value = "";
  };

  return (
    <>
      <header className="absolute right-0 w-4/5 flex flex-col items-center py-6 z-50">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="¿En qué libro estás pensando?"
              className="w-[400px] px-5 pr-10 py-2 rounded-full"
              onInput={(e) => {
                setFilters({ ...filters, sortByTitle: e.target.value });
              }}
              ref={searchInputRef}
            />
            <button
              className={`absolute top-1/2 right-4 translate-y-[-50%] ${
                sortByTitle ? "" : "pointer-events-none"
              }`}
            >
              {sortByTitle ? (
                <span onClick={removeSortByTitle}>
                  <CloseIcon />
                </span>
              ) : (
                <SearchIcon />
              )}
            </button>
          </div>
        </form>
        <button
          className="absolute right-9 top-1/2 translate-y-[-50%]"
          onClick={toggleSidebar}
        >
          <FlipCounter />
          <span className="block relative rotate-[30deg] p-2 z-10">
            <span className="relative z-50">
              {showSidebar ? (
                <SavedBooksIconSolid />
              ) : (
                <SavedBooksIconRegular />
              )}
            </span>
          </span>
        </button>
      </header>
    </>
  );
}
