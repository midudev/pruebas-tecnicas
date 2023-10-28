import { Filter, FilterType } from "@/types";
import { useSearchParams } from "react-router-dom";


export const useFilters = () => {
  const [searchParams, setSearchParams ] = useSearchParams();

  const get = (type: FilterType) => {
    const filter = searchParams.get(type);

    return filter ? decodeURIComponent(filter) : null;
  };

  const getAll = () => {
    const params = Object.fromEntries(searchParams.entries());

    return Object.entries(params)
      .map(([type, value]) => ({
        [type]: decodeURIComponent(value)
      } as Filter));
  };
  
  const add = (filter: Filter) => {
    const { type, value } = filter;
    const existingFilter = searchParams.get(type);

    if (existingFilter) {
      searchParams.set(type, value);
    } else {
      searchParams.append(type, value);
    }

    setSearchParams(searchParams);
  };

  const remove = (type: FilterType) => {
    searchParams.delete(type);

    setSearchParams(searchParams);
  };

  const clear = () => {
    const params = Object.fromEntries(searchParams.entries());

    Object.keys(params).forEach((key) => {
      searchParams.delete(key);
    });

    setSearchParams(searchParams);
  };

  const set = (filters: Filter[]) => {
    clear();

    filters.forEach((filter) => {
      add(filter);
    });
  };

  return {
    get,
    getAll,
    add,
    remove,
    set,
    clear,
  }
};