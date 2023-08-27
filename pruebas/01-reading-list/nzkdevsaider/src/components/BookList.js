"use client";
import BookSearch from "@myreading/components/BookSearch";
import { getAllBooks } from "@myreading/lib/bookSearch";
import { useContext } from "react";
import { BookContext } from "@myreading/context/BookContext";
const BookList = () => {
  const { watchlist } = useContext(BookContext);

  return (
    <section className="m-5 lg:w-3/4">
      <div className="space-y-4 my-5">
        <h1 className="text-4xl font-bold">
          {getAllBooks().length - watchlist?.length} libros disponibles
        </h1>
        {watchlist && watchlist.length > 0 && (
          <p>{watchlist.length} libros en tu lista de lectura.</p>
        )}
        <p>Busca el libro de tu preferencia y añadelo a tu lista de lectura.</p>
      </div>
      <BookSearch />
    </section>
  );
};

export default BookList;
