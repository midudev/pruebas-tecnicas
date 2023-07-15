import { useStore } from "../../store/store";

const PageFilter = () => {
  const { page, changePage } = useStore();
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Filtrar por páginas
      </label>
      <input
        id="default-range"
        type="range"
        min={1}
        max={4}
        value={page}
        onChange={({ target }) => changePage(parseInt(target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export default PageFilter;
