"use client";

import { GenreSelect } from "@/components/genre-select";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useFilterContext } from "@/context/store";
import { SearchBase } from "@/components/search"

export default function FilterSection() {
  const { genreFilter, setGenreFilter, setSearchQuery } = useFilterContext();
  const onValueChangeHandler = (value) => {
    setGenreFilter(value);
  };
  const onClearButtonClickHander = () => {
    setGenreFilter("");
    setSearchQuery("");
  };
  return (
    <>
      <div className="md:hidden w-full mt-2">
        <SearchBase></SearchBase>
      </div>
      <div className="flex gap-2 mt-2 md:mt-5">
        {genreFilter && (
          <button
            onClick={onClearButtonClickHander}
            className="p-2 rounded-full border border-gray-600 bg-gray-800 text-gray-200 hover:scale-110 ease-in duration-75 hover:bg-gray-900 hover:text-gray-50"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        )}
        <GenreSelect
          onValueChange={onValueChangeHandler}
          value={genreFilter}
        ></GenreSelect>
      </div>
    </>
  );
}
