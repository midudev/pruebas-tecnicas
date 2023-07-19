import { Fragment, useEffect, useRef, useState } from "react";
import books from "./mocks/books.json";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { genreOptions } from "./constants";

function App() {
  const [listOfBooks, setlistOfBooks] = useState(books.library);
  const [readList, setReadList] = useState([]);

  const handleAddedBookToReadList = (ISBN) => {
    const selectBook = listOfBooks.find((item) => item.book.ISBN === ISBN);
    const NewBook = listOfBooks.filter((item) => item.book.ISBN !== ISBN);
    setlistOfBooks(NewBook);
    setReadList([...readList, selectBook]);
  };

  const handleRemoveFromReadList = (ISBN) => {
    const selectBook = readList.find((item) => item.book.ISBN === ISBN);
    const newReadList = readList.filter((item) => item.book.ISBN !== ISBN);
    setReadList(newReadList);
    setlistOfBooks([...listOfBooks, selectBook]);
  };

  // state pages
  const progressPages = useRef(null);
  const [minPages, setMinPages] = useState(0);
  const [maxPages, setMaxPages] = useState(1500);

  const handlePages = (setState) => (e) => {
    setState(e.target.value);
  };

  // state genre
  const [genre, setgenre] = useState(genreOptions[0]);

  const applyFilters = () => {
    let updatedBooks = books.library;

    // filter genre
    if (genre.title !== "todos") {
      updatedBooks = updatedBooks.filter(
        (item) => item.book.genre.toLowerCase() === genre.value
      );
    }

    // filter for pages
    updatedBooks = updatedBooks.filter(
      (item) => item.book.pages >= minPages && item.book.pages <= maxPages
    );

    progressPages.current.style.left = (minPages / 1500) * 100 + "%";
    progressPages.current.style.right = 100 - (maxPages / 1500) * 100 + "%";

    setlistOfBooks(updatedBooks);
  };

  useEffect(() => {
    applyFilters();
  }, [minPages, maxPages, genre]);
  console.log("readList", readList)

  return (
    <div className="flexCenter flex-col py-20 gap-8 container m-auto px-3">
      <h1 className="text-5xl font-bold">Lista de libros</h1>
      {/* Filters */}
      <header className="flex flex-wrap justify-center gap-6 sm:justify-between items-center w-full ">
        {/* Pages range */}
        <section className="flex flex-col justify-center gap-4 ">
          <span>Cantidad de páginas</span>
          <div className="w-[200px] relative">
            <div className="h-2 rounded bg-slate-400 relative">
              <div
                ref={progressPages}
                className="h-2 absolute rounded-md bg-amber-200"
              />
            </div>
            <div className="relative">
              <input
                value={minPages}
                onChange={handlePages(setMinPages)}
                type="range"
                min="0"
                max="1500"
                className="absolute top-[-5px] h-[3px] w-full appearance-none pointer-events-none bg-none bg-transparent"
              />
              <input
                value={maxPages}
                onChange={handlePages(setMaxPages)}
                type="range"
                min="0"
                max="1500"
                className="absolute top-[-5px] h-[3px] w-full appearance-none pointer-events-none bg-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex justify-between mt-3 text-xs">
            <span className="py-2 px-3 bg-amber-200 rounded-md">
              Min. {minPages}
            </span>
            <span className="py-2 px-3 bg-amber-200 rounded-md">
              Max. {maxPages}
            </span>
          </div>
        </section>

        {/* Genre Options */}
        <section className="flex flex-wrap justify-center items-center sm:justify-end gap-2 sm:gap-4 w-full max-w-sm">
          <span className="whitespace-nowrap">Selecciona el género</span>
          <div className="z-10 w-full max-w-[200px]">
            <Listbox value={genre} onChange={(e) => setgenre(e)}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate capitalize ">
                    {genre.title}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {genreOptions.map((option) => (
                      <Listbox.Option
                        key={option.title}
                        value={option}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 capitalize ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate capitalize ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {option.title}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </section>
      </header>
      {/* Filters */}

      <section className="flex gap-8">
        <section className="flex flex-col gap-10">
          <span className="relative text-lg sm:text-2xl font-bold text-gray-800">
            Libros disponibles
            <span className="text-amber-700 text-sm absolute top-0">
              {listOfBooks.length}
            </span>
          </span>
          <section
            className={`custom-grid ${
              readList.length !== 0
                ? "sm:grid-cols-1 md:grid-cols-2"
                : "2xl:grid-cols-5 "
            }`}
          >
            {listOfBooks.map(({ book }) => (
              <header
                onClick={() => handleAddedBookToReadList(book.ISBN)}
                key={book.ISBN}
                className="flexCenter relative flex-col max-w-xs gap-3 group ld:whitespace-nowrap text-center "
              >
                <h2>{book.title}</h2>
                <img
                  src={book.cover}
                  className="w-full h-full object-cover rounded-2xl "
                />
                <div className="justify-end items-end hidden group-hover:flex w-full h-1/3 bg-gradient-to-b from-transparent to-black/90 rounded-b-2xl gap-2 absolute bottom-0 right-0 font-semibold text-lg text-white p-4">
                  <span className="w-full">Año : {book.year}</span>
                </div>
              </header>
            ))}
          </section>
        </section>

        {readList.length !== 0 && (
          <section className="flex flex-col gap-10 ">
            <span className="relative text-lg sm:text-2xl font-bold text-gray-800">
              Lista de lectura
              <span className="text-amber-700 text-sm absolute top-0">
                {readList.length}
              </span>
            </span>
            <section
              className={`custom-grid sm:grid-cols-1  ${
                readList.length === 1 ? "" : "md:grid-cols-2"
              } bg-amber-100 py-4 px-6 rounded-xl`}
            >
              {readList.map(({ book }) => (
                <header
                  onClick={() => handleRemoveFromReadList(book.ISBN)}
                  key={book.ISBN}
                  className="flexCenter relative flex-col max-w-xs gap-3 group ld:whitespace-nowrap text-center"
                >
                  <h2>{book.title}</h2>
                  <img
                    src={book.cover}
                    className="w-full h-full object-cover rounded-2xl "
                  />
                  <div className="justify-end items-end hidden group-hover:flex w-full h-1/3 bg-gradient-to-b from-transparent to-black/90 rounded-b-2xl gap-2 absolute bottom-0 right-0 font-semibold text-lg text-white p-4">
                    <span className="w-full">Año : {book.year}</span>
                  </div>
                </header>
              ))}
            </section>
          </section>
        )}
      </section>
    </div>
  );
}

export default App;
