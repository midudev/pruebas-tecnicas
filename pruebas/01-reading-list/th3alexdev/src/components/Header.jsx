import { useContext, useRef, useState } from "react";
import { FiltersContext } from "../context/contextFiltersProvider";
import { SearchIcon, CloseIcon } from "./Icons";
import { SavedBooksIcon } from "./Icons";
import FlipCounter from "./FlipCounter";
import { ReadListContext } from "../context/contextUserListProvider";
import Brand from "./Brand";

export default function Header({ showSidebar, toggleSidebar }) {
  const [showSearch, setShowSearch] = useState(false);

  const { savedBooks } = useContext(ReadListContext);

  const searchInputRef = useRef();

  const { filters, setFilters } = useContext(FiltersContext);

  const { sortByTitle } = filters;

  const removeSortByTitle = () => {
    setFilters({ ...filters, sortByTitle: "" });
    searchInputRef.current.value = "";
  };

  return (
    <>
      <header className="fixed right-0 w-full md:w-4/5 z-50 bg-background">
        <div className="relative flex sm:flex-col px-2 md:px-0 py-6 justify-center items-center">
          <div
            className={`absolute sm:relative w-full max-w-sm ${showSearch ? "z-50" : ""}`}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className={`sm:absolute z-50 ${
                showSearch ? "md:flex" : "hidden sm:block"
              }`}
              onBlur={() => setShowSearch(!showSearch)}
            >
              <div className="relative px-2 py-6 sm:px-0 sm:py-0 bg-background">
                <input
                  type="text"
                  placeholder="¿En qué libro estás pensando?"
                  className="w-full sm:w-[400px] px-5 pr-10 py-2 rounded-full text-sm sm:text-base"
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
          </div>

          <div className="w-full flex justify-between items-center px-2 h-10">
            <div className="md:hidden">
              <Brand />
            </div>
            <div className="flex gap-3">
              <button
                className={`relative sm:hidden md:absolute md:right-9 md:top-1/2 md:translate-y-[-50%] ${
                  showSearch ? "" : "sm:hidden"
                }`}
                onClick={() => setShowSearch(!showSearch)}
              >
                <span className="block">
                  <SearchIcon />
                </span>
              </button>

              <button
                className="relative md:absolute md:right-9 md:top-1/2 md:translate-y-[-50%]"
                onClick={toggleSidebar}
              >
                <FlipCounter total={savedBooks.length} />
                <span className="block relative rotate-[30deg] p-2 z-10">
                  <span className="relative z-50">
                    <SavedBooksIcon />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
