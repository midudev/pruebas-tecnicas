import { useEffect } from 'react'
import './App.css'
import { Books, Header, ReadingList } from './components'
// import { useReadingListStore } from './store/reading-list-store'
import { FiltersProvider } from './context/filters-context'

function App () {
  // const syncState = useReadingListStore((state) => state.syncState)

  useEffect(() => {
    // window.addEventListener('storage', () => { syncState() })
  }, [])

  console.log('App rendered')

  return (
    <>
      <FiltersProvider>
        <Header />
        <main className='flex w-[1200px] bg-slate-500'>
          <Books />
          <ReadingList />
        </main>
      </FiltersProvider>
      <footer>
        Footer
      </footer>
    </>
  )
}

export default App
