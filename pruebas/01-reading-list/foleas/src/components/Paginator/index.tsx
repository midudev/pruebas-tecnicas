import { useEffect } from "react";
import { useStore } from "../../store/store";
import { textColorAnimationClass } from "../../utils/tailwind";
import RangeSlider from "../common/RangeSlider";

const Paginator = () => {
  const { page, changePage, maxPage } = useStore();

  useEffect(() => {
    if (maxPage > 0) {
      if (page > maxPage && page > 1) changePage(maxPage);
    }
  }, [page, changePage, maxPage]);

  return (
    <div className="flex-1 md:flex-auto overflow-hidden">
      <label
        htmlFor="paginator"
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${textColorAnimationClass}`}
      >
        Paginador - Página: {page}
      </label>
      <div className="h-[46px] flex items-center [:has(.disabled)]:cursor-not-allowed">
        <RangeSlider
          className="w-80 h-6"
          value={page}
          disabled={maxPage === 1}
          min={1}
          max={maxPage}
          marks={true}
          onChange={(value) => changePage(value)}
        />
      </div>
    </div>
  );
};

export default Paginator;
