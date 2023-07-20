import { useEffect } from 'react'
import { Books, Favorites, Loading, SideMenu } from './components'
import { useBook, useLocalStore } from './hooks'
import { useMenu } from './store'

export const App = () => {
  const { favorites, getBooks, updateFavorites: setFavoritesFromLocalStore, loading, setLoading } = useBook()
  const { getFromLocalStorage } = useLocalStore()
  const { isOpen } = useMenu()

  useEffect(() => {
    setLoading(true)
    getBooks()
      .then(() => {
        const favorites = getFromLocalStorage()
        setFavoritesFromLocalStore({ updatedFavorites: favorites })
      })
      .finally(() => {
        setLoading(false)
      })
  }, [getBooks, getFromLocalStorage, setFavoritesFromLocalStore, setLoading])

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
