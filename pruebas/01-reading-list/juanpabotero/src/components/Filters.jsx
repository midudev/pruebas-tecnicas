import { useId } from 'react';
import { useFilters } from '../hooks/useFilters.js';
// import './Filters.css';

export function Filters() {
  const { filters, setFilters } = useFilters();

  const genreFilterId = useId();
  const authorFilterId = useId();

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

  return (
    <section className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-center text-white">
      <div className="flex gap-4">
        <label htmlFor={genreFilterId}>Género</label>
        <select
          className="text-black"
          id={genreFilterId}
          onChange={handleChangeGenre}
        >
          <option value="all">Todos</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Terror">Terror</option>
          <option value="Zombies">Zombies</option>
        </select>
      </div>

      <div className="flex gap-4">
        <label htmlFor={authorFilterId}>Autor</label>
        <select
          className="text-black"
          id={authorFilterId}
          onChange={handleChangeAuthor}
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
    </section>
  );
}
