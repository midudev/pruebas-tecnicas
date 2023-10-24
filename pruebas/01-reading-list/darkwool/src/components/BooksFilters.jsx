import PropTypes from "prop-types";
import { Range } from "./Range";
import { Select } from "./Select";
import { SearchBar } from "./SearchBar";

export function BooksFilters({
  onSearchChange,
  onGenreChange,
  onFilterPages,
  genres,
  pages,
}) {
  return (
    <div className="flex gap-x-10 gap-y-6 justify-between mb-8 flex-col md:flex-row md:items-center">
      <div className="flex flex-col md:w-80">
        <SearchBar
          placeholder={"Buscar por título"}
          onSubmit={(e) => {
            e.preventDefault();
          }}
          onChange={(e) => {
            onSearchChange(e.target.value);
          }}
        />
      </div>

      <div className="flex gap-10">
        <div className="flex flex-col">
          <Select
            label="Filtrar por género:"
            options={genres}
            defaultValue="todos"
            className="text-white font-medium text-sm mb-1"
            onChange={onGenreChange}
          />
        </div>
        <div className="flex flex-col">
          <Range
            label="Número de páginas"
            className="text-white font-medium text-sm mb-1"
            inputClassName="accent-slate-500"
            min={pages.min}
            max={pages.max}
            onChange={onFilterPages}
          />
        </div>
      </div>
    </div>
  );
}

BooksFilters.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onFilterPages: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
  pages: PropTypes.object.isRequired,
};
