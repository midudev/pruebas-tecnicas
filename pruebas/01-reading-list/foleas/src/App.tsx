import { useState, useEffect } from "react";
import { useStore } from "./store/store";
import BookCard from "./components/BookCard";
import PageFilter from "./components/PageFilter";
import GenreFilter from "./components/GenreFilter";
import { UseGetData } from "./hooks/useGetData";
import SearchFilter from "./components/SearchFilter";
import { Book } from "./types";
import ColorThemeSwitch from "./components/ColorThemeSwitch";
import { textColorAnimationClass } from "./utils/tailwind";

function App() {
  const {
    page,
    perPage,
    books,
    search,
    currentGenre,
    filteredBooks,
    setFilteredBooks,
    selectedBooks,
    setSelectedBooks,
  } = useStore();

  const { loading } = UseGetData("./books.json");

  const [lastBookClicked, setLastBookClicked] = useState<string>("");

  useEffect(() => {
    setFilteredBooks(
      books
        ?.filter(({ book: { genre } }) =>
          currentGenre !== "" ? genre === currentGenre : true
        )
        .filter(({ book: { title } }) =>
          title.toLowerCase().includes(search.toLowerCase())
        )
        .filter(({ book: { ISBN } }) => !selectedBooks.includes(ISBN))
        .map(({ book: { ISBN } }) => ISBN)
    );
  }, [currentGenre, search, books, selectedBooks]);

  return (
    <main className="p-5 box-border md:flex flex-wrap w-screen min-h-screen md:h-screen overflow-hidden gap-5 transition-bg-color duration-300 ease-in-out dark:bg-slate-900">
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
          <div className="relative box-border p-10 pt-0 available-books-wrapper md:w-8/12 xl:w-9/12 overflow-y-auto max-h-full">
            <ColorThemeSwitch />
            <h1
              className={`text-3xl font-bold mb-5 ${textColorAnimationClass}`}
            >{`${books.length - selectedBooks.length} libros disponibles`}</h1>

            {selectedBooks.length > 0 && (
              <h3
                className={`text-1xl font-bold mb-5 ${textColorAnimationClass}`}
              >{`${selectedBooks.length} en la lista de lectura`}</h3>
            )}

            <div className="filters-wrapper mb-5 flex gap-10 align-center">
              <PageFilter />
              <GenreFilter />
              <SearchFilter />
            </div>

            <div className="grid grid-cols-4 gap-10">
              {books
                ?.filter(({ book: { ISBN } }) => filteredBooks.includes(ISBN))
                .slice(perPage * (page - 1), perPage * page)
                .map(({ book: { title, cover, ISBN } }, i) => {
                  return (
                    <BookCard
                      key={ISBN}
                      index={lastBookClicked === ISBN ? 0 : i}
                      title={title}
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
          <div
            className={`lecture-books-wrapper flex-1 overflow-y-auto max-h-full ${
              selectedBooks.length &&
              "transition duration-300 border-black border bg-gray-300 dark:border-white dark:bg-gray-800 rounded-md"
            }`}
          >
            {selectedBooks.length > 0 && (
              <div className="box-border p-5 h-full lecture-books">
                <h2
                  className={`text-3xl font-bold mb-5 ${textColorAnimationClass}`}
                >
                  Lista de Lectura
                </h2>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-2 gap-10 pb-4">
                  {selectedBooks.map((v, i) => {
                    const selectedBook = books.find(
                      ({ book: { ISBN } }) => ISBN === v
                    ) as Book;
                    if (!selectedBook) return false;
                    const { ISBN, title, cover } = selectedBook.book;
                    return (
                      <BookCard
                        key={ISBN}
                        index={lastBookClicked === ISBN ? 0 : i}
                        title={title}
                        imageUrl={cover}
                        withRemoveBnt={true}
                        onClickHandler={() => {
                          setLastBookClicked(ISBN);
                          setSelectedBooks(
                            selectedBooks.filter((v) => v !== ISBN)
                          );
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </main>
  );
}

export default App;
