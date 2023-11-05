import { useState } from 'react'
import { useLibraryStore } from '../store'
import { Filters } from '../types'

const useGenericFilter = <T>(initialState: T, property: keyof Filters) => {
  const { setFilter, setFilteredBooks } = useLibraryStore()
  const [state, setState] = useState<T>(initialState)

  const handleEvent = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = e.currentTarget

    setFilter({ property, value })
    setFilteredBooks()
    setState(value as T)
  }

  return { state, handleEvent, setState }
}

export default useGenericFilter
