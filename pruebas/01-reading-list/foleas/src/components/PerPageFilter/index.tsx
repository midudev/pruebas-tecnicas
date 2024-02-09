import { useStore } from "../../store/store";
import { selectStyle, textColorAnimationClass } from "../../utils/tailwind";

const PerPageFilter = () => {
  const { perPage, setPerPage, books } = useStore();

  return (
    <div className="flex-1 md:flex-auto">
      <label
        htmlFor="genre"
        className={`block mb-2 text-sm font-medium ${textColorAnimationClass}`}
      >
        Cantidad por Página: {perPage}
      </label>
      <select
        id="perPage"
        value={perPage}
        className={selectStyle}
        onChange={({ target }) => setPerPage(parseInt(target.value))}
      >
        {[...Array(Math.floor(books.length / 4)).keys()].map((v) => {
          const value = (v + 1) * 4;
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default PerPageFilter;
