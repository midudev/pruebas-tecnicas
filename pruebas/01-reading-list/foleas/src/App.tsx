import { useState, useEffect } from "react";
import { useStore } from "./store/store";
import BookCard from "./components/common/BookCard";
import PageRangeFilter from "./components/PageRangeFilter";
import GenreFilter from "./components/GenreFilter";
import { UseGetData } from "./hooks/useGetData";
import SearchFilter from "./components/SearchFilter";
import ColorThemeSwitch from "./components/ColorThemeSwitch";
import { stickyTop, textColorAnimationClass } from "./utils/tailwind";
import Paginator from "./components/Paginator";
import { getMaxPage } from "./utils/books";
import PerPageFilter from "./components/PerPageFilter";
import SelectedBooksSidebar from "./components/SelectedBooksSidebar";

function App() {
  const {
    page,
    pagesRange,
    setMaxPage,
    perPage,
    books,
    search,
    currentGenre,
    filteredBooks,
    setFilteredBooks,
    selectedBooks,
    setSelectedBooks,
    lastBookClicked,
    setLastBookClicked,
  } = useStore();

  const { loading } = UseGetData("./books.json");

  useEffect(() => {
    if (!loading) {
      setFilteredBooks(
        books
          ?.filter(({ book: { genre } }) =>
            currentGenre !== "" ? genre === currentGenre : true
          )
          .filter(({ book: { title } }) =>
            title.toLowerCase().includes(search.toLowerCase())
          )
          .filter(
            ({ book: { pages } }) =>
              pagesRange && pages >= pagesRange.min && pages <= pagesRange.max
          )
          .filter(({ book: { ISBN } }) => !selectedBooks.includes(ISBN))
          .map(({ book: { ISBN } }) => ISBN)
      );
    }
  }, [loading, currentGenre, search, books, selectedBooks, pagesRange]);

  useEffect(() => {
    if (!loading) {
      setMaxPage(getMaxPage(filteredBooks.length, perPage));
    }
  }, [loading, filteredBooks, perPage]);

  return (
    <main className="box-border md:flex flex-wrap w-screen min-h-screen md:h-screen overflow-hidden gap-5 transition-bg-color duration-300 ease-in-out bg-white dark:bg-slate-900">
      {loading ? (
        <div className="flex flex-wrap justify-center self-center w-screen">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className="relative box-border available-books-wrapper md:w-8/12 xl:w-9/12 overflow-y-auto max-h-full">
            <header
              className={`p-10 pt-5 pb-5 border-r border-l bg-gray-100 ${stickyTop}`}
            >
              <ColorThemeSwitch />
              <h1
                className={`text-3xl font-bold mb-5 ${textColorAnimationClass}`}
              >{`${
                books.length - selectedBooks.length
              } libros disponibles`}</h1>
              {selectedBooks.length > 0 && (
                <h3
                  className={`text-1xl font-bold mb-5 ${textColorAnimationClass}`}
                >{`${selectedBooks.length} en la lista de lectura`}</h3>
              )}
              <div className="filters-wrapper mb-5 flex flex-wrap gap-5 lg:gap-10 align-center">
                <PageRangeFilter />
                <Paginator />
                <PerPageFilter />
                <GenreFilter />
                <SearchFilter />
              </div>
            </header>

            <div className="grid p-10 grid-cols-4 gap-10">
              {books
                ?.filter(({ book: { ISBN } }) => filteredBooks.includes(ISBN))
                .slice(perPage * (page - 1), perPage * page)
                .map(({ book }, i) => {
                  const { title, year, pages, genre, cover, ISBN } = book;
                  return (
                    <BookCard
                      key={ISBN}
                      index={lastBookClicked === ISBN ? 0 : i}
                      title={title}
                      year={year}
                      pages={pages}
                      genre={genre}
                      imageUrl={cover}
                      onClickHandler={() => {
                        setLastBookClicked(ISBN);
                        setSelectedBooks([...selectedBooks, ISBN]);
                      }}
                    />
                  );
                })}
            </div>
          </div>
          <SelectedBooksSidebar />
        </>
      )}
    </main>
  );
}

export default App;
