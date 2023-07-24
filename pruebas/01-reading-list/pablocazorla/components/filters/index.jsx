import useFilters from "@/hooks/useFilters";

const Filters = () => {
  const {
    filtersOptions,
    total,
    genre,
    maxPages,
    onChangeGenre,
    onChangeMaxPage,
  } = useFilters();

  return (
    <div className="filters" data-testid="filters">
      <div className="filter-set">
        <label htmlFor="pages">
          Cantidad de páginas ({maxPages || filtersOptions.maxPages})
        </label>
        <input
          type="range"
          name="pages"
          min={1}
          max={filtersOptions.maxPages}
          onChange={onChangeMaxPage}
          value={maxPages || filtersOptions.maxPages}
        />
      </div>
      <div className="filter-set">
        <label htmlFor="genres">Género</label>
        <select name="genres" onChange={onChangeGenre} value={genre}>
          <option value="">{`Todos (${total})`}</option>
          {filtersOptions.genres.map(({ name, count }) => {
            return (
              <option key={name} value={name}>{`${name} (${count})`}</option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
export default Filters;
