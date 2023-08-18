import { useContext } from "react";
import { FiltersContext } from "../context/contextFiltersProvider";
import { BooksContext } from "../context/contextBooksProvider";
import Loader from "./Loader";
import { AddBookIcon } from "./Icons";

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
                  className="relative py-4 px-3 flex flex-nowrap flex-col items-center rounded-md hover:bg-card-hover group"
                  key={ISBN}
                >
                  <button className="absolute bg-[#64748b66]  rounded-full right-6 top-5 opacity-0 group-hover:opacity-100 hover:bg-slate-700 transition-colors">
                    <span className="p-2 opacity-70 hover:opacity-100 block">
                      <AddBookIcon />
                    </span>
                  </button>
                  <img
                    src={cover}
                    alt={title}
                    className="w-[95%] mb-4 aspect-[9/14] object-cover rounded-sm pointer-events-none"
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
                      <p className="text-base opacity-60">{year}</p>
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
