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
import { NoResultState, EmptyState } from "@/components/empty-state";

const GenreCounter = ({ count }) => (
  <span className="ml-2 text-xs text-sky-400">
    {count} Libro{count > 1 && "s"}
  </span>
);

export function AvailableList() {
  const { availableList, availableListCount } = useAppContext();
  const pluralWord = availableListCount > 1 ? "s" : "";

  if (availableListCount > 0) {
    if (Object.keys(availableList).length > 0) {
      return (
        <>
          {availableListCount > 0 && (
            <div className="-mb-2 mt-5 text-lg text-white">
              {availableListCount} libro{pluralWord} disponible{pluralWord}
            </div>
          )}
          <BookList books={availableList}></BookList>
        </>
      );
    } else {
      return <NoResultState></NoResultState>;
    }
  } else {
    return (
      <EmptyState
        title={"Ya no quedan libros disponibles"}
        message={"Wow, has colocado todos los libros en la lista de lectura."}
        href={"/reading-list"}
        linkText={"Ver Mi lista"}
      ></EmptyState>
    );
  }
}

export function ReadingList() {
  const { readingList, inReadingListCount } = useAppContext();

  if (inReadingListCount > 0) {
    if (Object.keys(readingList).length > 0) {
      return <BookList books={readingList} removable></BookList>;
    } else {
      return <NoResultState></NoResultState>;
    }
  } else {
    return (
      <EmptyState
        title={"Sin libros"}
        message={"Aún no has agregado libros a tu lista de lectura."}
        href={"/"}
        linkText={"Agregar"}
      ></EmptyState>
    );
  }
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
      {Object.keys(books)
        .sort()
        .map((row) => (
          <div key={row}>
            <div className="mb-2 mt-5 flex items-center font-medium text-white">
              {row}
              {genreFilter && (
                <GenreCounter count={books[row].length}></GenreCounter>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              {books[row].map((book) => (
                <div
                  key={book.ISBN}
                  className="relative h-60 w-40 cursor-pointer overflow-hidden rounded duration-200 ease-in hover:scale-105"
                >
                  {removable ? (
                    <button
                      onClick={() => {
                        onRemoveClickHander(book.ISBN);
                      }}
                      className="absolute right-2 top-2 z-10 rounded-full bg-red-600/75 p-1 duration-75 ease-in hover:scale-125 hover:bg-red-700"
                    >
                      <TrashIcon className="h-4 w-4 text-white/75"></TrashIcon>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        onAddClickHander(book.ISBN);
                      }}
                      className="absolute right-2 top-2 z-10 rounded-full bg-blue-500/75 p-1 text-xs duration-75 ease-in hover:scale-110 hover:bg-blue-600"
                    >
                      <PlusIcon className="h-4 w-4 text-white"></PlusIcon>
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
