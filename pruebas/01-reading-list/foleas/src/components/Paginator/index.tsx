import { useStore } from "../../store/store";
import { textColorAnimationClass } from "../../utils/tailwind";
import RangeSlider from "../common/RangeSlider";

const Paginator = () => {
  const { page, changePage, perPage, filteredBooks } = useStore();
  const max = Math.ceil(filteredBooks.length / perPage);

  return (
    <div className="flex-1 md:flex-auto overflow-hidden">
      <label
        htmlFor="paginator"
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${textColorAnimationClass}`}
      >
        Paginador - Página: {page}
      </label>
      <div className="h-[46px] flex items-center">
        <RangeSlider
          className="w-80 h-6"
          defaultValue={page}
          disabled={max === 1}
          min={1}
          max={max}
          marks={true}
          onChange={(value) => changePage(value)}
        />
      </div>
    </div>
  );
};

export default Paginator;
