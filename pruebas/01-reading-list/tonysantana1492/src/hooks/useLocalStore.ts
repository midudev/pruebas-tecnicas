import { type Book } from '../types'
import { useCallback } from 'react'

const BOOK_LOCAL_STORE_NAME = 'favorites'

export const useLocalStore = () => {
  const setToLocalStorage = useCallback((favorites: Book[]) => {
    window.localStorage.setItem(
      BOOK_LOCAL_STORE_NAME,
      JSON.stringify(favorites)
    )
  }, [])

  const getFromLocalStorage = useCallback(() => {
    const favorites = window.localStorage.getItem(BOOK_LOCAL_STORE_NAME)

    if (favorites == null) return []

    try {
      return JSON.parse(favorites)
    } catch (error) {
      console.error('Error to parse localStore Favorites')
      return []
    }
  }, [])

  return { getFromLocalStorage, setToLocalStorage }
}
