import { useState } from 'react'
import { useBooksStore } from '../store/books'
import { FilterValue } from '../types'


const useGenericFilter = <T>(initialState: T, property: FilterValue) => {
  const { setFilters, setFilteredBooks } = useBooksStore()
  const [state, setState] = useState<T>(initialState)

  const handleEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setFilters({ property, value })
    setFilteredBooks()
    setState(value as T)
  }


  return { state, handleEvent, setState }
}

export default useGenericFilter
