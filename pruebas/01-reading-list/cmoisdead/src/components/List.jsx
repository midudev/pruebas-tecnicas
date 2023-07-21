import { Book } from "./Book";
import { shallow } from "zustand/shallow";
import useBookStore from "../store/store";
import { useState } from "react";

export const List = () => {
  const [filter, setFilter] = useState("none");
  const { library, current, genres } = useBookStore(
    (state) => ({
      library: state.books,
      current: state.current,
      genres: state.genres,
    }),
    shallow,
  );

  const filterBooks = (item) => {
    const { book } = item;
    if (filter === "none") return book;
    return book.genre === filter;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <section className="h-full w-full md:w-11/12">
      <div className="mr-5 flex content-center items-center justify-between gap-4">
        <h1 className="my-3 text-2xl font-bold">
          {library?.length - current?.length || 0} Books on Library
        </h1>
        <div className="filters">
          <select
            name="genre"
            id="genre"
            className="rounded-lg border-neutral-900 bg-neutral-900 text-white hover:cursor-pointer hover:border-neutral-800"
            onChange={handleChange}
          >
            <option value="none" defaultValue={true}>
              none
            </option>
            {genres.map((genre, i) => (
              <option value={genre} key={i}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex h-[92vh] flex-wrap justify-center gap-4 overflow-y-auto overflow-x-hidden py-3 md:justify-start">
        {library.filter(filterBooks).map(({ book }, i) => (
          <Book book={book} key={i} />
        ))}
      </div>
    </section>
  );
};
