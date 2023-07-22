import { useRef } from "react";
import { useStore } from "../store";
import { Select } from "./Select";

export const Filters = () => {
  const selectedGenre = useStore((state) => state.filterGenre);
  const setSelectGenre = useStore((state) => state.modifyGenre);
  const resetFiltersToDefault = useStore(
    (state) => state.resetFiltersToDefault
  );

  const genres = useRef([
    { label: "All", value: "all" },
    { label: "Fantasy", value: "Fantasía" },
    { label: "Sci-fi", value: "Ciencia ficción" },
    { label: "Horror", value: "Terror" },
    { label: "Zombies", value: "Zombies" },
    { label: "Fiction", value: "fiction" },
    { label: "Non-fiction", value: "non-fiction" },
  ]);

  const handleGenreChange = (genre: string) => {
    setSelectGenre(genre);
  };

  return (
    <>
      <div className="flex mb-4 w-full gap-4">
        <Select
          title={"Genre"}
          options={genres.current}
          value={selectedGenre}
          onChange={handleGenreChange}
        />
        <button
          type="button"
          onClick={resetFiltersToDefault}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Default
        </button>
      </div>
    </>
  );
};
