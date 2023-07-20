"use client";
import { useAppContext } from "@/context/store";
import Image from "next/image";
import Link from "next/link";

export function AvailableList() {
  const { availableList } = useAppContext();
  return <BookList books={availableList}></BookList>;
}

export function ReadingList() {
  const { readingList } = useAppContext();
  return <BookList books={readingList}></BookList>;
}

export function BookList({ books }) {
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
