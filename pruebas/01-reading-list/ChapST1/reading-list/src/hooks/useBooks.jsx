import { useBookZustandStore } from './useBookZustandStore'
import jsonBooks from '../../public/books.json'
import { useEffect } from 'react'

export async function useBooks () {
  const { updateBooks } = useBookZustandStore()
  const { library } = jsonBooks

  useEffect(() => {
    updateBooks(library)
  }
  , [])
}
