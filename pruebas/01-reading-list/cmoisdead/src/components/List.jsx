import { Book } from "./Book";
import useBookStore from "../store/store";
import { useEffect, useState } from "react";
import { Filters } from "./Filters";
import { shallow } from "zustand/shallow";

export const List = () => {
  const { library, current } = useBookStore(
    (state) => ({ library: state.books, current: state.current }),
    shallow,
  );
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(library);
  }, [library]);

  return (
    <section className="h-full w-full md:w-11/12">
      <div className="mr-5 flex content-center items-center justify-between gap-4">
        <h1 className="my-3 text-2xl font-bold">
          {library?.length - current?.length || 0} Books on Library
        </h1>
        <Filters books={books} setBooks={setBooks} />
      </div>
      <div className="flex h-[92vh] flex-wrap justify-center gap-4 overflow-y-auto overflow-x-hidden py-3 md:justify-start">
        {books.length
          ? books.map(({ book }, i) => <Book book={book} key={i} />)
          : "no books found"}
      </div>
    </section>
  );
};
