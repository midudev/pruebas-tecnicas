/*
    * Con el hook useBooks, se obtienen los libros de la API y se actualiza el estado de la aplicación. en la store
    * Este hook nos retorna un objeto con las siguientes propiedades: loading, error,
    * los libros no porque se actualizan en la store
*/

import { useEffect, useState } from 'react'
import { getBooks } from '../services/api/getBooks'
import { useZustandBookStore } from './useZustandBooksStore'

export function useBooks () {
  const { updateBooks, category } = useZustandBookStore()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)

    getBooks({ category })
      .then((books) => {
        updateBooks(books)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [category, updateBooks])

  return {
    loading,
    error
  }
}
