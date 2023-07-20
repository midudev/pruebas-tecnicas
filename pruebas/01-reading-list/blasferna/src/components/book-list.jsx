"use client";

import { useAppContext } from "@/context/store";
import { getInReadingList, removeFromReadingList } from "@/lib/books";
import { TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export function AvailableList() {
  const { availableList } = useAppContext();
  return <BookList books={availableList}></BookList>;
}

export function ReadingList() {
  const { readingList } = useAppContext();
  return <BookList books={readingList} removable></BookList>;
}

export function BookList({ books, removable = false }) {
  const { inReadingList, setInReadingList } = useAppContext();
  const onClickHander = (isbn) => {
    removeFromReadingList(isbn);
    setInReadingList(getInReadingList());
  };
  return (
    <div className="pb-5">
      {Object.keys(books).map((row) => (
        <div key={row}>
          <div className="font-medium mt-5 mb-2 text-white"> {row} </div>
          <div className="flex gap-3 flex-wrap">
            {books[row].map((book) => (
              <div
                key={book.ISBN}
                className="relative w-40 h-60 rounded overflow-hidden cursor-pointer hover:scale-105 ease-in duration-200"
              >
                {removable && (
                  <button
                    onClick={() => {
                      onClickHander(book.ISBN);
                    }}
                    className="absolute right-2 top-2 text-white bg-red-600/50 hover:bg-red-700 rounded-full p-1 z-10 hover:scale-125 ease-in duration-75"
                    aria-label="Close"
                  >
                    <TrashIcon className="w-4 h-4 text-white/75"></TrashIcon>
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
