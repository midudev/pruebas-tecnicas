"use client";
import { useAppContext } from "@/context/app-context";
import Image from "next/image";
import Link from "next/link";

export function AvailableList({ data }) {
  const { availableList } = useAppContext();
  return <BookList books={availableList}></BookList>;
}

export function ReadingList({ data }) {
  const { readingList } = useAppContext();
  return <BookList books={readingList}></BookList>;
}

export function BookList({ books }) {
  return (
    <div className="px-5 pb-5">
      {Object.keys(books).map((row) => (
        <div key={row}>
          <div className="font-medium mt-5 mb-2 text-white"> {row} </div>
          <div className="flex gap-2 flex-wrap overflow-hidden">
            {books[row].map((book) => (
              <div
                key={book.ISBN}
                className="relative w-40 h-60 rounded overflow-hidden cursor-pointer"
              >
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
