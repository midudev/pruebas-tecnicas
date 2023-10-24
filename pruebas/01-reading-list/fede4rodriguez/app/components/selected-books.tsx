
'use client'

import { Book } from "../types/book";

interface Props {
  books: Book[];  
  handleBook: (book: Book) => () => void;
}

export function SelectedBooks({ books, handleBook }: Props) {

  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-start mb-4 gap-2">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Lista de Lectura</h5>
        {(
          books.length === 0 ? 
          (<p className="text-sm text-gray-500 truncate dark:text-gray-400">Agrege libros a la lista de lectura</p>) : 
          (<p className="text-sm text-gray-500 truncate dark:text-gray-400">Libros para lectura: {books.length}</p>)          
        )}
      </div>

      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">



          { books.length !== 0 && books.map((book, index) => (
              <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src={book.cover} alt={`Cover libro ${book.title}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {book.title}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {book.author.name}
                  </p>
                </div>
                <button
              onClick={handleBook(book)}
              data-dismiss-target="#sticky-banner"
              type="button"
              className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close banner</span>
            </button>
              </div>
              </li>
          ))}

        </ul>
      </div>
    </div>
  )

}