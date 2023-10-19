import { useEffect, useState } from "react"
import { FiltersType } from "../context/FiltersProvider"
import useDebounce from "./useDebounce"

export function useSearch(filters: FiltersType, setFilters: (value: FiltersType) => void) {
  const [search, setSearch] = useState(filters.search)
  const debounce = useDebounce()

  useEffect(() => {
    setSearch(filters.search)
  }, [filters.search])

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const text = e.target.value
    setSearch(text)
    debounce(() => setFilters({ ...filters, search: text }), 500)
  }

  function handleRemove() {
    setSearch('')
    setFilters({ ...filters, search: '' })
  }

  return { search, setSearch, handleSearch, handleRemove }
}
