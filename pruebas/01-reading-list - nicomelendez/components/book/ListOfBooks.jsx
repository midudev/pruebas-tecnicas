import React from "react";
import Book from "@/components/book/Book";
import Cargando from "@/components/utils/Cargando";

export default function ListOfBooks({ books }) {
  if (!books || books?.length === 0) {
    return (
      <section className="flex items-center justify-center">
        <Cargando />
      </section>
    );
  }
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 5xl:grid-cols-4 gap-5 gap-y-10">
      {books.map(({ book, rating, status }) => {
        const { title, cover, genre, synopsis, ISBN } = book;
        return (
          <div key={ISBN} className="flex justify-center">
            <Book
              title={title}
              cover={cover}
              genre={genre}
              synopsis={synopsis}
              ISBN={ISBN}
              rating={rating}
              status={status}
            />
          </div>
        );
      })}
    </section>
  );
}
