import { useState, useEffect } from "react";
import { useStore } from "../../store/store";
import { getPagesRange } from "../../utils/books";
import { textColorAnimationClass } from "../../utils/tailwind";
import RangeSlider from "../common/RangeSlider";
import { Pages } from "../../store/storeTypes";

const PageRangeFilter = () => {
  const { books, pagesRange, setPagesRange } = useStore();
  const [rangeLimit, setRangeLimit] = useState<Pages | null>(null);

  useEffect(() => {
    if (books.length > 0) {
      const _pagesRange = getPagesRange(books);
      if (!pagesRange) setPagesRange(_pagesRange);
      setRangeLimit(_pagesRange);
    }
  }, [books, pagesRange]);

  return (
    <div className="flex-1 md:flex-auto">
      <label
        htmlFor="paginator"
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${textColorAnimationClass}`}
      >
        Filtrar por páginas
      </label>
      <div className="h-[46px] flex items-center">
        {pagesRange && rangeLimit && (
          <RangeSlider
            className="w-80 h-8"
            value={[pagesRange.min, pagesRange.max]}
            min={rangeLimit.min}
            max={rangeLimit.max}
            minDistance={200}
            pearling={true}
            onChange={(values) =>
              setPagesRange({ min: values[0], max: values[1] })
            }
          />
        )}
      </div>
    </div>
  );
};

export default PageRangeFilter;
