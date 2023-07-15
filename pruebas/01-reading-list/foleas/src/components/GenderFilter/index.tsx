import { useStore } from "../../store/store";

const GenderFilter = () => {
  const { books, genre, changeGenre } = useStore();

  const genres = books
    ?.map(({ book: { genre } }) => genre)
    .filter((v, i, arr) => arr.indexOf(v) === i);

  return (
    <div>
      <label
        htmlFor="gender"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Filtrar por Género
      </label>
      <select
        id="gender"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={({ target }) => changeGenre(target.value)}
      >
        <option>Todos</option>
        {genres?.map((v, i) => (
          <option key={`${v}-${i}`} value={v}>
            {v}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenderFilter;
