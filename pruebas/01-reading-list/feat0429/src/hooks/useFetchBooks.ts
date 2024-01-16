import { useEffect } from 'react'

import { useBoundStore } from '../store/bound-store'

export function useFetchBooks () {
  const fetchBooks = useBoundStore(state => state.fetchBooks)

  useEffect(() => {
    fetchBooks()
  }, [])
}
