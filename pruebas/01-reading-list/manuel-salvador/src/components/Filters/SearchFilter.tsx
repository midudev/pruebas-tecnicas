import useBookContext from '@/hooks/useBookContext';
import { IFilters } from '@/types';
import { ChangeEvent, useState } from 'react';

export default function SearchFilter() {
  const [searchBy, setSearchBy] = useState<keyof IFilters>('title');
  const { updateFilters, filters } = useBookContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateFilters(searchBy, e.target.value);
  };

  const handleSearchBy = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedSearchBy = e.target.value as keyof IFilters;
    setSearchBy(selectedSearchBy);
    if (selectedSearchBy === 'year') {
      updateFilters(searchBy, 0);
    } else {
      updateFilters(searchBy, '');
    }
  };

  return (
    <div>
      <div className="mb-2">
        <span className="font-bold mr-2">Buscar por:</span>
        <select
          name="search"
          id="search"
          className="bg-transparent outline-none"
          onChange={handleSearchBy}
        >
          <option value="title">Titulo</option>
          <option value="year">Año</option>
          <option value="ISBN">ISBN</option>
          <option value="author">Autor</option>
        </select>
      </div>
      <input
        type={searchBy === 'year' ? 'number' : 'text'}
        name="query"
        id="query"
        autoComplete="off"
        placeholder={`Buscar...`}
        value={filters[searchBy]}
        onChange={handleChange}
        className="outline-none bg-transparent placeholder-gray-600 p-2 border-2 border-cyan-600 rounded-md select-none"
      />
    </div>
  );
}
