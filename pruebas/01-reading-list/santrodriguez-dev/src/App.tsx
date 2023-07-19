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

  console.log('App rendered')

  return (
    <FiltersProvider>
      <Header />
      <main className="grid grid-cols-4">
        <Books />
        <ReadingList />
      </main>
    </FiltersProvider>
  )
}

export default App
