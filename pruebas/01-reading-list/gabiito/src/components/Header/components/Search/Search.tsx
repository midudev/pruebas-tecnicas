import { useFilters } from "@/hooks";
import { Filter, FilterType } from "@/types";
import { useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";

const emptySearch: Filter = {
  type: FilterType.SEARCH,
  value: "",
};

const Search: React.FC = () => {
  const [searchInput, setSearchInput] = useState<Filter>(emptySearch);
  const { add, get, remove } = useFilters();

  useEffect(() => {
    const search = get(FilterType.SEARCH);
    setSearchInput({ ...emptySearch, value: search || "" });
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [get(FilterType.SEARCH)]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchInput({ ...emptySearch, value });

    value === ""
      ? remove(FilterType.SEARCH)
      : add({ type: FilterType.SEARCH, value });
  };

  return (
    <div className="relative w-full h-full max-w-lg mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <TbSearch size={20} className="text-slate-400" />
      </div>
      <input
        type="text"
        className="
          w-full py-2 px-4 pl-10 
          border border-slate-300 focus:border-slate-500 
          outline-none rounded-full
          bg-zinc-50 text-gray-500
          transition
        "
        placeholder="Buscar..."
        value={searchInput.value}
        onInput={handleInput}
      />
    </div>
  );
};

export default Search;
