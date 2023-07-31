import { useStore } from "../../store/store";
import { textColorAnimationClass } from "../../utils/tailwind";

const GenderFilter = () => {
  const { genres, currentGenre, changeCurrentGenre, changePage } = useStore();

  const selectChangeHandler = (value: string) => {
    changeCurrentGenre(value);
    changePage(1);
  };

  return (
    <div className="flex-1 md:flex-auto">
      <label
        htmlFor="genre"
        className={`block mb-2 text-sm font-medium ${textColorAnimationClass}`}
      >
        Filtrar por Género
      </label>
      <select
        id="genre"
        value={currentGenre}
        className="transition duration-300 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={({ target }) => selectChangeHandler(target.value)}
      >
        <option value="">Todos</option>
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
