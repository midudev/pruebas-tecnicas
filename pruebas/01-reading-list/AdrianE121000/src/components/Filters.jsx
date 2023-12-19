import { useId } from 'react';
import './filters.css';
import { genresList } from '../utils/genres';
import { useFilters } from '../hooks/useFilters';

const Filters = () => {
  const { filters, setFilters } = useFilters();
  const minPagesFilter = useId();
  const genresFilterId = useId();

  const handleChangePages = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      pages: event.target.value,
    }));
  };

  const handleChangeGenre = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      genre: event.target.value,
    }));
  };
  return (
    <section className='filters'>
      <div className='filter-item'>
        <label htmlFor={minPagesFilter}>Filtrar por páginas</label>
        <div>
          <input
            type='range'
            id={minPagesFilter}
            min='0'
            max='1200'
            onChange={handleChangePages}
            value={filters.pages}
          />
          <span>{filters.pages}</span>
        </div>
      </div>
      <div className='filter-item'>
        <label htmlFor={genresFilterId}>Filtrar por género</label>
        <select
          id={genresFilterId}
          onChange={handleChangeGenre}>
          {genresList.map((genre, index) => (
            <option
              key={index}
              value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default Filters;
