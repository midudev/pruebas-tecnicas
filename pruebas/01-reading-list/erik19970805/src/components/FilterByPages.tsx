'use client';
import useBook from '@hooks/useBook';
import { useState, type ChangeEventHandler, type FC } from 'react';

interface Props {
  maxPages: number;
  pages: number;
}

export const FilterByPages: FC<Props> = ({ maxPages, pages }) => {
  const [value, setValue] = useState(pages);
  const { filterByPages } = useBook();
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    filterByPages(newValue);
  };
  return (
    <div className="max-w-sm w-full">
      <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
        Filtrar por paginas
      </label>
      <div className="flex gap-4 items-center">
        <span className="text-white whitespace-nowrap">min 0</span>
        <input
          type="range"
          value={value}
          max={maxPages}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <span className="text-white whitespace-nowrap">max {maxPages}</span>
      </div>
    </div>
  );
};
