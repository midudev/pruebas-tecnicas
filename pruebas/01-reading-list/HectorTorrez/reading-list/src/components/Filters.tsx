import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import {
  filterByGenre,
  filterByName,
  filterByPages,
} from "../store/books/slice";
import { Search } from "./Icons";

type maxPagesProps = {
  maxPages: number;
};

export const Filters = ({ maxPages }: maxPagesProps) => {
  const book = useAppSelector((state) => state.books.books);
  const [selectFilter, setSelectFilter] = useState("");
  const [allGenres, setAllGenres] = useState<string[]>([]);
  const [filterPages, setFilterPages] = useState(0);
  const [filerByName, setFilterByName] = useState("");

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(filterByGenre(selectFilter));
  }, [selectFilter]);

  useEffect(() => {
    if (book.length > 0) {
      const allGenres = book.map((item) => item.book.genre);
      const uniqueGenre = [...new Set(allGenres)];
      setAllGenres(uniqueGenre);
    }
  }, [book]);

  useEffect(() => {
    dispatch(filterByPages(filterPages));
    dispatch(filterByName(filerByName.toLowerCase()));
  }, [filterPages, allGenres, filerByName]);

  //i need to fix this filter
  const handleChangeFilter = (data: number) => {
    setFilterPages(data);
  };

  return (
    <section className="my-5 px-4 flex justify-center">
      <form className="flex flex-col md:flex-row items-center gap-y-10 md:gap-x-4">
        <select
          className="rounded bg-gray-50 ring-1 ring-gray-300 outline-none w-56"
          onChange={(e) => setSelectFilter(e.target.value)}
        >
          <option
            className="cursor-pointer select-none p-2 hover:bg-gray-200"
            value=""
          >
            Género
          </option>
          {allGenres.map((item) => {
            return (
              <option
                className="cursor-pointer select-none p-2 hover:bg-gray-200"
                key={item}
                value={item}
              >
                {item}
              </option>
            );
          })}
        </select>
        <label className="relative flex items-center border px-1 rounded-md">
          <Search />
          <input
            type="text"
            placeholder="Buscador"
            onChange={(e) => setFilterByName(e.target.value)}
            className="outline-none px-3 py-1"
          />
        </label>
        <label className="flex flex-col md:flex-row items-center gap-x-3 font-bold  ">
          Filtrar por número de páginas
          <input
            type="range"
            min="0"
            max={maxPages}
            value={filterPages}
            step="10"
            onChange={(e) => handleChangeFilter(e.target.valueAsNumber)}
            className=" bg-gray-300 h-3 rounded-lg"
          />
          {filterPages}
        </label>
      </form>
    </section>
  );
};
