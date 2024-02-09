import { useEffect } from 'react'
import './App.css'
import { Books, Header, ReadingList } from './components'
import { useReadingListStore } from './store/reading-list-store'
import { FiltersProvider } from './context/filters-context'

function App () {
  const syncState = useReadingListStore((state) => state.syncState)

  useEffect(() => {
    window.addEventListener('storage', () => { syncState() })
  }, [])

  return (
    <FiltersProvider>
      <Header />
      <main className="grid grid-cols-4 gap-5">
        <Books />
        <ReadingList />
      </main>
    </FiltersProvider>
  )
}

export default App
