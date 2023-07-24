import { useCallback, useEffect } from 'react'

import { Books, Favorites, Loading, SideMenu } from './components'
import { useBook, useLocalStore } from './hooks'
import { useMenu } from './store'

export const App = () => {
  const { favorites, getBooks, updateFavorites: setFavoritesFromLocalStore, loading, setLoading } = useBook()
  const { getFromLocalStorage } = useLocalStore()
  const { isOpen } = useMenu()

  const updateFromLocalStorage = useCallback(() => {
    const favorites = getFromLocalStorage()
    setFavoritesFromLocalStore({ updatedFavorites: favorites })
  }, [getFromLocalStorage, setFavoritesFromLocalStore])

  const handlegetBooks = useCallback(async () => {
    setLoading(true)

    try {
      await getBooks()
      updateFromLocalStorage()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [getBooks, setLoading, updateFromLocalStorage])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handlegetBooks()
  }, [handlegetBooks])

  useEffect(() => {
    window.addEventListener('storage', updateFromLocalStorage)
    return () => { window.removeEventListener('storage', updateFromLocalStorage) }
  }, [setFavoritesFromLocalStore, getFromLocalStorage, updateFromLocalStorage])

  if (loading) {
    return <Loading />
  }

  return (
		<main className="flex flex-row pt-4 h-screen">
			<Books />
			<section className="hidden lg:flex">{favorites.length > 0 && <Favorites />}</section>
			{isOpen && <SideMenu />}
		</main>
  )
}
