import { useContext } from "react";
import { FiltersContext } from "../context/contextFiltersProvider";
import { BooksContext } from "../context/contextBooksProvider";
import Loader from "./Loader";

export default function ListOfBooks() {
  const { filters, filteredBooks } = useContext(FiltersContext);
  const { loading } = useContext(BooksContext);

  const { sortByPages } = filters;

  return (
    <>
      <article className="py-24">
        {loading ? (
          <Loader />
        ) : (
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-4 gap-y-5 px-2">
            {filteredBooks?.map(
              ({ title, cover, ISBN, author, year, pages }) => (
                <li
                  className="py-4 px-3 bg-card-background flex flex-nowrap flex-col items-center rounded-md hover:bg-card-hover"
                  key={ISBN}
                >
                  <img
                    src={cover}
                    alt={title}
                    className="w-[95%] mb-4 aspect-[9/14] object-cover rounded-lg pointer-events-none"
                  />
                  <div className="w-[95%]">
                    <h1
                      className="text-lg h-max font-bold leading-6 line-clamp-2 uppercase mb-2"
                      title={title}
                    >
                      {title}
                    </h1>
                    <p className="text-sm opacity-60 mb-2">{author.name}</p>
                    <div className="flex justify-between">
                      <p className="text-base opacity-80">{year}</p>
                      <p
                        className={`text-base ${
                          sortByPages ? "text-secondary" : "opacity-60"
                        }`}
                      >
                        {pages} pág.
                      </p>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        )}
      </article>
    </>
  );
}
