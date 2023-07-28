import { useStore } from "../../store/store";
import { textColorAnimationClass } from "../../utils/tailwind";

const PageFilter = () => {
  const { page, changePage, perPage, filteredBooks } = useStore();

  return (
    <div>
      <label
        htmlFor="paginator"
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${textColorAnimationClass}`}
      >
        Filtrar por páginas
      </label>
      <input
        id="paginator"
        name="paginator"
        type="range"
        min={1}
        max={Math.ceil(filteredBooks.length / perPage)}
        value={page}
        onChange={({ target }) => changePage(parseInt(target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export default PageFilter;
