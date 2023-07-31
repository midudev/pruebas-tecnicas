import { useStore } from "../../store/store";
import { textColorAnimationClass } from "../../utils/tailwind";

const SearchFilter = () => {
  const { search, changeSearch } = useStore();

  return (
    <div className="w-60">
      <label
        htmlFor="search"
        className={`block mb-2 text-sm font-medium ${textColorAnimationClass}`}
      >
        Filtrar por búsqueda
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="transition duration-300 w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="transition duration-300 block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buscar Libros..."
          value={search}
          onChange={({ target }) => changeSearch(target.value)}
        />
      </div>
    </div>
  );
};

export default SearchFilter;
