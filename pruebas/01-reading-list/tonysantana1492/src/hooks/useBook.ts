import { useCallback, useMemo, useState } from 'react'

import { bookService } from '../services'
import { useBookStore } from '../store/book'
import { type Book } from '../types'
import { useFilter } from './useFilter'
import { useLocalStore } from './useLocalStore'

export const useBook = () => {
  const { books, setBooks, favorites, setFavorites, setMaxPages, maxPages } = useBookStore()
  const { genreFilter, pageFilter, updatePageFilter, titleFilter } = useFilter()
  const { setToLocalStorage } = useLocalStore()
  const [loading, setLoading] = useState(true)

  const getBooks = useCallback(async () => {
    const data = await bookService()
    setBooks(data)

    const maxPages = data.reduce((acumulator, { pages }) => {
      if (acumulator > pages) return acumulator
      return pages
    }, 0)

    updatePageFilter({ page: maxPages })
    setMaxPages(maxPages)
  }, [setBooks, setMaxPages, updatePageFilter])

  const addFavorite = ({ newFavorite }: { newFavorite: Book }) => {
    const updatedFavorites = [...favorites, newFavorite]
    setToLocalStorage(updatedFavorites)
    setFavorites(updatedFavorites)
  }

  const updateFavorites = useCallback(
    ({ updatedFavorites }: { updatedFavorites: Book[] }) => {
      setToLocalStorage(updatedFavorites)
      setFavorites(updatedFavorites)
    },
    [setFavorites, setToLocalStorage]
  )

  const removeFromFavorites = useCallback(
    ({ bookId }: { bookId: string }) => {
      const updatedFavorites = favorites.filter(favorite => favorite.ISBN !== bookId)
      updateFavorites({ updatedFavorites })
    },
    [favorites, updateFavorites]
  )

  const availablesBooks = useMemo(() => {
    return books.filter(availableBook => {
      if (favorites.length === 0) return true

      return !favorites.some(favoriteBook => favoriteBook.ISBN === availableBook.ISBN)
    })
  }, [books, favorites])

  const filteredBooks = useMemo(() => {
    return availablesBooks.filter(({ genre, pages, title }) => {
      const categoryCondition = () => {
        if (genreFilter === '') return true

        return genre === genreFilter
      }

      const pageCondition = () => {
        return pages <= pageFilter
      }

      const titleCondition = () => {
        return title.toLowerCase().includes(titleFilter.toLowerCase())
      }

      return categoryCondition() && pageCondition() && titleCondition()
    })
  }, [availablesBooks, genreFilter, pageFilter, titleFilter])

  return {
    filteredBooks,
    availablesBooks,
    getBooks,
    addFavorite,
    removeFromFavorites,
    favorites,
    maxPages,
    updateFavorites,
    loading,
    setLoading
  }
}
