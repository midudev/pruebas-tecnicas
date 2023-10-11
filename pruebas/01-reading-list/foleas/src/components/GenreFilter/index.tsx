import { useStore } from "../../store/store";
import { selectStyle, textColorAnimationClass } from "../../utils/tailwind";

const GenderFilter = () => {
  const { genres, currentGenre, changeCurrentGenre } = useStore();

  const selectChangeHandler = (value: string) => {
    changeCurrentGenre(value);
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
        className={selectStyle}
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
