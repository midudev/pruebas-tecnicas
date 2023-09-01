import { useContext, useRef, useState } from "react";
import { FiltersContext } from "../context/contextFiltersProvider";
import { SearchIcon, CloseIcon } from "./Icons";
import { SavedBooksIcon } from "./Icons";
import FlipCounter from "./FlipCounter";
import { ReadListContext } from "../context/contextUserListProvider";
import Brand from "./Brand";

export default function Header({ showSidebar, toggleSidebar, children }) {
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
      <header
        className={`fixed w-full md:w-screen md:mx-auto md:max-w-[1440px] z-50 bg-background ${
          !showSidebar ? "overflow-hidden" : ""}`}
      >
        <div className="w-full grid md:grid-cols-[20%,1fr] justify-between items-center">
          <div className="pl-4 absolute left-0 hidden 3xs:block md:relative">
            <Brand />
          </div>

          <div className="w-screen md:w-full flex items-center justify-end md:justify-center py-6 px-4 md:px-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className={`absolute md:relative w-full px-3 left-0 items-center justify-center ${
                showSearch ? "md:flex z-50" : "hidden md:flex"
              }`}
              onBlur={() => setShowSearch(!showSearch)}
            >
              <div className="relative px-2 py-6 md:px-0 md:py-0 md:w-max bg-background">
                <input
                  type="text"
                  placeholder="¿En qué libro estás pensando?"
                  className="w-full md:w-[400px] px-5 pr-10 py-2 rounded-full text-sm md:text-base"
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
              <button
                className={`relative md:hidden md:absolute md:right-9 md:top-1/2 md:translate-y-[-50%] ${
                  showSearch ? "" : "md:hidden"
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

        {children}
      </header>
    </>
  );
}
