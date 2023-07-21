// import { useBookZustandStore } from './useBookZustandStore'
import { useEffect, useState } from 'react'
import { getBooks } from '../services/api/getBooks'
import { useBookZustandStore } from './useBookZustandStore'
import { getToLocalStorage } from '../utils/getToLocalStorage'
import { LOCAL_STORAGE_KEYS } from '../constants'

export function useBooks () {
  const { updateBooks } = useBookZustandStore()

  // const [allBooks, setAllBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)

    getBooks()
      .then((res) => {
        const localStorageBooks = getToLocalStorage(LOCAL_STORAGE_KEYS.booksState)

        updateBooks(localStorageBooks ?? res)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [updateBooks])

  return {
    loading,
    error
  }
}
