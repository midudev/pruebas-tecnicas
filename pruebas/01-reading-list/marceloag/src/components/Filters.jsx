import { useBooks } from '../store/bookStore';

function Filters() {
  const { filterBooks, filterByPages, pagesFilter, filter, genres } = useBooks();

  return (
    <div className="flex flex-row justify-between items-center w-full">
      <span className="text-md text-slate-500 font-medium flex flex-row items-center gap-2">
        Filtrando por{' '}
        <b className="bg-slate-200 text-slate-800 py-1 px-3 rounded-md font-medium">
          {filter == "all" ? "Todos" : filter}
        </b>
      </span>

      <div className="flex flex-col gap-2">
        <label htmlFor="pages" className="text-slate-700 font-light text-xs">
          Filtrar por paginas {pagesFilter}
        </label>
        <input
          type="range"
          min="100"
          max="700"
          value={pagesFilter}
          step="10"
          onChange={(paginas) => {
            filterByPages(paginas.target.value);
          }}
          className="w-full p-2 h-1 mt-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="pages" className="text-slate-700 font-light text-xs">
          Filtrar por genero
        </label>
        <select
          name="genre"
          id="genre"
          onChange={(e) => filterBooks(e.target.value)}
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="all">Todos</option>
          {genres.map((genre) => (
            <option value={genre} selected={filter == genre ? true : false} >{genre}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;
