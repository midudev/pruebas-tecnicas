import { useDispatchActions } from "@/Hooks/useDispatchActions";

const SortByPriority = () => {
  const { handleSortPriorityBooksToRead } = useDispatchActions();
  return (
    <select
      className="text-lg bg-[#121212]  font-Anton my-5 w-full border-none"
      onChange={(e) => handleSortPriorityBooksToRead(e.target.value)}
    >
      <option selected value="" disabled>
        Selecciona un orden
      </option>
      <option value="asc">Ascendente</option>
      <option value="des">Descendente</option>
    </select>
  );
};

export default SortByPriority;
