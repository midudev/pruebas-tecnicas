// import { useBookZustandStore } from './useBookZustandStore'
import { useEffect, useState } from 'react'
import { getBooks } from '../services/api/getBooks'
import { useBookZustandStore } from './useBookZustandStore'

export function useBooks () {
  const { updateBooks } = useBookZustandStore()

  // const [allBooks, setAllBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)

    getBooks()
      .then((res) => { updateBooks(res) })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return {
    loading,
    error
  }
}
