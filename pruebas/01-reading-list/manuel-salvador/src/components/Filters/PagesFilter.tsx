import useBookContext from '@/hooks/useBookContext';
import { getMaxPages, getMinPages } from '@/utils/filters';
import { ChangeEvent } from 'react';

export default function PagesFilter() {
  const { library, filters, updateFilters } = useBookContext();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateFilters('pages', Number(e.target.value));
  };

  return (
    <div className="w-52    ">
      <label className="font-bold flex justify-between">
        <span>Filtrar por paginas</span>
        <span className="ml-2">({filters.pages})</span>
      </label>
      <input
        type="range"
        min={getMinPages(library)}
        max={getMaxPages(library)}
        step={4}
        value={filters.pages}
        onChange={handleOnChange}
        className="mt-6 w-full h-2 bg-cyan-600 bg-gradient-to-r from-cyan-400 to-fuchsia-400 accent-gray-800 appearance-none rounded-full cursor-pointer select-none opacity-70 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
}
