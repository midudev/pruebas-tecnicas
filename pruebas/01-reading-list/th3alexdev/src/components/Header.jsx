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
      <header className="fixed md:mx-auto md:max-w-[1440px] md:w-full z-50 bg-background">
        <div className="w-full grid sm:grid-cols-[20%,1fr] justify-between items-center">
          <div className="pl-4">
            <Brand />
          </div>

          <div className={`w-full flex items-center justify-center py-6`}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              // className={`sm:absolute z-50 ${
              className={` ${showSearch ? "md:flex" : "hidden sm:block"}`}
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

            <div className="flex gap-3">
              {/* <button
                className={`relative sm:hidden md:absolute md:right-9 md:top-1/2 md:translate-y-[-50%] ${
                  showSearch ? "" : "sm:hidden"
                }`}
                onClick={() => setShowSearch(!showSearch)}
              >
                <span className="block">
                  <SearchIcon />
                </span>
              </button> */}

              <button
                className="absolute md:right-9 md:top-1/2 md:translate-y-[-50%]"
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
