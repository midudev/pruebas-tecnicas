import { useState } from 'react';
import useAppContext from "@context/useAppContext"
import { FILTER_TYPES } from '@utils/index'

export default function useFilterByGenres() {
  const { filterBooks } = useAppContext()
  const [currentGenres, setCurrentGenres] = useState<string>('')

  const onChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentGenres(event.target.value)

    filterBooks(parseInt(event.target.value), FILTER_TYPES.genres)
  }

  return {
    currentGenres,
    onChange
  };
}
