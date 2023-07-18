import { useId } from 'react';
import { Genre } from '../types/books.d';
import { useFilters } from '../hooks/useFilters';

export const Filters = () => {
  const { filters, filterByPages, filterByGenre } = useFilters();
  const filterPageId = useId();
  const filterGenreId = useId();

  return (
    <section className='filters'>
      <div className='filter'>
        <label htmlFor={filterPageId}>Paginas: </label>
        <input
          type='range'
          id={filterPageId}
          min='0'
          max='1000'
          onChange={filterByPages}
          value={filters.pages}
        />
        <span>{filters.pages}📃</span>
      </div>

      <div className='filter'>
        <label htmlFor={filterGenreId}>Genero: </label>
        <select id={filterGenreId} onChange={filterByGenre}>
          <option value={Genre.All}>{Genre.All}</option>
          <option value={Genre.Fantasia}>{Genre.Fantasia}</option>
          <option value={Genre.CienciaFiccion}>{Genre.CienciaFiccion}</option>
          <option value={Genre.Zombies}>{Genre.Zombies}</option>
          <option value={Genre.Terror}>{Genre.Terror}</option>
        </select>
      </div>
    </section>
  );
};
