"use client";
import { BookContext } from "@myreading/context/BookContext";
import { CrossCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
const BookWatchlist = () => {
  const { watchlist, removeWatchlist } = useContext(BookContext);
  return (
    <section className="m-5 border-gray-500 lg:w-2/6">
      <div className="space-y-4 my-5">
        <h1 className="text-4xl font-bold">Lista de lectura</h1>
        <div className="space-y-3">
          {watchlist?.map((book) => (
            <div key={book.ISBN} className="flex justify-between items-center">
              <div className="flex items-center space-x-5">
                <Image
                  src={book.cover}
                  alt={book.title}
                  width={100}
                  height={150}
                  className="rounded-md"
                />
                <div>
                  <h2 className="text-xl font-semibold">{book.title}</h2>
                  <p className="text-sm text-gray-500">{book.author.name}</p>
                </div>
              </div>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => {
                  removeWatchlist(book);
                }}
              >
                <CrossCircledIcon className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>
        {watchlist?.length === 0 && (
          <p>
            No tienes libros en tu lista de lectura. Busca el libro de tu
            preferencia y añadelo a tu lista de lectura.
          </p>
        )}
      </div>
    </section>
  );
};

export default BookWatchlist;
