import { useId } from 'react';
import { useFilters } from '../hooks/useFilters.js';

export function Filters() {
  const { filters, setFilters } = useFilters();

  const genreFilterId = useId();
  const authorFilterId = useId();
  const searchFilterId = useId();

  const handleChangeGenre = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      genre: event.target.value,
    }));
  };

  const handleChangeAuthor = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      author: event.target.value,
    }));
  };

  const handleChangeSearch = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      search: event.target.value.toLowerCase().trim(),
    }));
  };

  return (
    <section className="flex flex-col sm:flex-row gap-4 sm:gap-12 text-white">
      <div className="flex flex-col gap-2">
        <label htmlFor={genreFilterId}>Filtrar por género:</label>
        <select
          id={genreFilterId}
          onChange={handleChangeGenre}
          className="text-gray-100 bg-gray-600 p-1 rounded-md outline-none focus:ring-1 focus:ring-gray-400"
        >
          <option value="all">Todos</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Terror">Terror</option>
          <option value="Zombies">Zombies</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={authorFilterId}>Filtrar por autor:</label>
        <select
          id={authorFilterId}
          onChange={handleChangeAuthor}
          className="text-gray-100 bg-gray-600 p-1 rounded-md outline-none focus:ring-1 focus:ring-gray-400"
        >
          <option value="all">Todos</option>
          <option value="Bram Stoker">Bram Stoker</option>
          <option value="Douglas Adams">Douglas Adams</option>
          <option value="Frank Herbert">Frank Herbert</option>
          <option value="George Orwell">George Orwell</option>
          <option value="George R. R. Martin">George R. R. Martin</option>
          <option value="H.P. Lovecraft">H.P. Lovecraft</option>
          <option value="J.K. Rowling">J.K. Rowling</option>
          <option value="J.R.R. Tolkien">J.R.R. Tolkien</option>
          <option value="Manel Loreiro">Manel Loreiro</option>
          <option value="Mary Shelley">Mary Shelley</option>
          <option value="Ray Bradbury">Ray Bradbury</option>
          <option value="Stephen King">Stephen King</option>
          <option value="William Gibson">William Gibson</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 sm:max-w-xs w-full">
        <label htmlFor={searchFilterId}>Buscar por título:</label>
        <input
          type="text"
          id={searchFilterId}
          placeholder='Dune...'
          onChange={handleChangeSearch}
          className="text-gray-100 bg-gray-600 p-1 rounded-md outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>
    </section>
  );
}
