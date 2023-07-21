"use client";

import { useAppContext, useFilterContext } from "@/context/store";
import {
  addToReadingList,
  getInReadingList,
  removeFromReadingList,
} from "@/lib/books";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const GenreCounter = ({ count }) => (
  <span className="text-sky-400 ml-2 text-xs">
    {count} Libro{count > 1 && "s"}
  </span>
);

export function AvailableList() {
  const { availableList } = useAppContext();
  return <BookList books={availableList}></BookList>;
}

export function ReadingList() {
  const { readingList } = useAppContext();
  return <BookList books={readingList} removable></BookList>;
}

export function BookList({ books, removable = false }) {
  const { setInReadingList } = useAppContext();
  const { genreFilter } = useFilterContext();

  const onRemoveClickHander = (isbn) => {
    removeFromReadingList(isbn);
    setInReadingList(getInReadingList());
  };
  const onAddClickHander = (isbn) => {
    addToReadingList(isbn);
    setInReadingList(getInReadingList());
  };

  return (
    <div className="pb-5">
      {Object.keys(books).map((row) => (
        <div key={row}>
          <div className="flex items-center font-medium mt-5 mb-2 text-white">
            {row}
            {genreFilter && (
              <GenreCounter count={books[row].length}></GenreCounter>
            )}
          </div>
          <div className="flex gap-3 flex-wrap">
            {books[row].map((book) => (
              <div
                key={book.ISBN}
                className="relative w-40 h-60 rounded overflow-hidden cursor-pointer hover:scale-105 ease-in duration-200"
              >
                {removable ? (
                  <button
                    onClick={() => {
                      onRemoveClickHander(book.ISBN);
                    }}
                    className="absolute right-2 top-2 bg-red-600/75 hover:bg-red-700 rounded-full p-1 z-10 hover:scale-125 ease-in duration-75"
                  >
                    <TrashIcon className="w-4 h-4 text-white/75"></TrashIcon>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      onAddClickHander(book.ISBN);
                    }}
                    className="absolute right-2 top-2 text-xs p-1 bg-blue-500/75 hover:bg-blue-600 rounded-full z-10 hover:scale-110 ease-in duration-75"
                  >
                    <PlusIcon className="w-4 h-4 text-white"></PlusIcon>
                  </button>
                )}
                <Link href={`/books/${book.ISBN}`}>
                  <Image
                    src={book.cover}
                    className="object-cover"
                    sizes="100vw"
                    fill={true}
                    alt={book.title}
                  ></Image>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
