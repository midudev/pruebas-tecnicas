"use client";

import Link from "next/link";
import { useBookReading } from "../context/useBookReading";
import { useBooksData } from "../context/useBooks";
import ImageBooks from "./ImageBooks";
import { useClickOutside } from "../hook/useClickOutside";

export function CarsList() {
  const { allBooks } = useBooksData();
  const { booksId, removeBook, isOpenCarsList, setOpenCarsList } =
    useBookReading();
  const response = allBooks.filter((book) => booksId.includes(book.book.ISBN));

  const handleClose = () => {
    setOpenCarsList(false);
  };

  const ref = useClickOutside(handleClose);
  return (
    <div
      className={`relative z-20 ${isOpenCarsList ? "" : "hidden"}`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
            <div className="w-screen max-w-md pointer-events-auto">
              <div
                ref={ref}
                className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl dark:bg-slate-800"
              >
                <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900 dark:text-white"
                      id="slide-over-title"
                    >
                      Libros Agregados
                    </h2>
                    <div className="flex items-center ml-3 h-7">
                      <button
                        onClick={() => setOpenCarsList(false)}
                        type="button"
                        className="p-2 -m-2 text-gray-400 dark:text-white hover:text-gray-500"
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200 "
                      >
                        {response.map((res) => (
                          <li
                            key={res.book.ISBN}
                            className="flex py-3 mb-4 bg-white rounded-lg dark:bg-slate-800 "
                          >
                            <div className="flex-shrink-0 w-24 h-24 mx-3 overflow-hidden border border-gray-200 rounded-md">
                              <ImageBooks
                                url={res.book.cover}
                                alt={res.book.title}
                              />
                            </div>

                            <div className="flex flex-col flex-1 ml-4">
                              <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                                <h3>
                                  <Link href={`/books/${res.book.ISBN}`}>
                                    {res.book.title}
                                  </Link>
                                </h3>
                              </div>

                              <div className="flex flex-col items-end mr-5">
                                <button
                                  onClick={() => removeBook(res.book.ISBN)}
                                  type="button"
                                  className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-red-400"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
