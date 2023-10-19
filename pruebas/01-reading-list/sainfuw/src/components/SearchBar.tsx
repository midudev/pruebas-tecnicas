import { useFilters } from "../hooks/useFilters"
import { useSearch } from "../hooks/useSearch"
import DeleteIcon from "./icons/DeleteIcon"
import SearchIcon from "./icons/SearchIcon"

export default function SearchBar() {
  const { filters, setFilters } = useFilters()
  const { search, handleSearch, handleRemove } = useSearch(filters, setFilters)

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search by Title or Author"
        value={search}
        onChange={handleSearch}
        className="w-full py-4 pr-4 bg-transparent border-b-2 border-gray-700 pl-14 md:pl-20 focus:outline-none focus:border-secondary text-primary font-pop"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none md:pl-10">
        <SearchIcon />
      </div>
      <button
        onClick={handleRemove}
        className={`absolute inset-y-0 right-0 flex items-center pr-4 md:pr-10 ${filters.search ? 'flex' : 'hidden'}`}
      >
        <DeleteIcon />
      </button>
    </div >
  )
}