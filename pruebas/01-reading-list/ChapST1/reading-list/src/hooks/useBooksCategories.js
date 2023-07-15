import { useEffect, useState } from 'react'
import { getBooksCategories } from '../services/api/getCategories'

export function useBooksCategories () {
  const [booksCategories, setBooksCategories] = useState([])

  useEffect(() => {
    getBooksCategories().then((booksCategories) => setBooksCategories(booksCategories))
  }, [])

  return {
    booksCategories
  }
}
