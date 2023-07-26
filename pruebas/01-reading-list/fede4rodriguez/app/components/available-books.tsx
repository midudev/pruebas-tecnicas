'use client'

import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import { Book } from "../types/book";

interface Props {
  books: Book[];
  handleBook: (book: Book) => () => void;
}

export function AvailableBooks({ books, handleBook }: Props) {

  const [genres, setGenres] = useState([] as string[]);
  const [maxPages, setMaxPages] = useState(0);
  const [minPages, setMinPages] = useState(0);

  
  

  const [filterdsBooks, setFilterdsBooks] = useState(books);

  // filtro de genero
  const [filterGenre, setFilterGenre] = useState('');
  const handleFilterGenre = (event: any) => {
    setFilterGenre(event.target.value);
  }

  // filtro de texto
  const [filterText, setFilterText] = useDebounce('', 500);
  const handleFilterText = (event: any) => {
    setFilterText(event.target.value);
  }

  // filtro de rango cantidad de paginas
  const [filterPages, setFilterPages, filterPagesRealTime, setFilterPagesRealTime] = useDebounce<number>(maxPages, 500);
  const handleFilterPages = (event: any) => {
    setFilterPages(event.target.value);
  }

  
  useEffect(() => {

    setGenres([...new Set(books.map(({ genre }) => genre))]);

    setMaxPages(Math.max(...books.map(({ pages }) => pages)));
    setMinPages(Math.min(...books.map(({ pages }) => pages)));
    setFilterPagesRealTime(maxPages);

  }, [books]);
  

  useEffect(() => {

    let filteredBooks = books;

    if (filterText) {
      filteredBooks = filteredBooks.filter((book) => book.title.toLowerCase().includes(filterText.toLowerCase()));
    }

    if (filterGenre) {
      filteredBooks = filteredBooks.filter((book) => book.genre === filterGenre);
    }

    if (filterPages) {
      filteredBooks = filteredBooks.filter((book) => book.pages <= filterPages);
    }

    setFilterdsBooks(filteredBooks);

  }, [filterText, filterGenre, filterPages, books]);



  return (
    <section className={`flex min-h-screen flex-col items-start justify-top gap-8 w-full`}>

      <div className="w-full flex flex-col gap-2">
      <form className="w-full flex gap-6 justify-center">

        <div className="w-[100%]">
          <input
            type="search"
            onChange={handleFilterText}
            placeholder="Buscar por título"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        <div className="w-[290px]">
          <select
            onChange={handleFilterGenre}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Todos los géneros</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div className="w-[250px]">
          <label
            className="block mb-2 text-xs mb-0 font-medium text-gray-900 dark:text-white">
            Paginas: {filterPagesRealTime}
          </label>
          <input
            type="range"
            onChange={handleFilterPages}
            min={minPages}
            max={maxPages}
            value={filterPagesRealTime}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
        </div>

      </form>

      {(
        filterdsBooks.length === 0 ? 
          (<p className="text-sm text-gray-500 truncate dark:text-gray-400">No hay mas libros disponibles</p>) : 
          (<p className="text-sm text-gray-500 truncate dark:text-gray-400">Libros disponibles: {filterdsBooks.length}</p>)
          
      )}

      </div>

      <section className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        { filterdsBooks.map((book, index) => (
            <article key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <img className="rounded-t-lg w-full aspect-[9/14] object-cover" src={book.cover} alt={`Cover libro ${book.title}`} />

            <div className="p-5">
              <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-500">{book.author.name}</p>
              <button onClick={handleBook(book)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                A lista de lectura
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </div>
            </article>
        ))}
      </section>

    </section>
  )
}