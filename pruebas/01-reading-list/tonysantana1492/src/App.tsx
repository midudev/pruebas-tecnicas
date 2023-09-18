import { useEffect } from 'react'

import { Books, Favorites, Loading, SideMenu } from './components'
import { useBook } from './hooks'
import { useMenu } from './store'

export const App = () => {
  const { favorites, getBooks, loading, updateFromLocalStorage } = useBook()
  const { isOpen } = useMenu()

  useEffect(() => {
    getBooks()
  }, [getBooks])

  useEffect(() => {
    window.addEventListener('storage', updateFromLocalStorage)
    return () => { window.removeEventListener('storage', updateFromLocalStorage) }
  }, [updateFromLocalStorage])

  if (loading) {
    return <Loading />
  }

  return (
		<main className="flex flex-row pt-4 h-screen">
			<Books />
			<aside className="hidden lg:flex">{favorites.length > 0 && <Favorites />}</aside>
			{isOpen && <SideMenu />}
		</main>
  )
}
