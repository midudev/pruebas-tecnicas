import { ListBooks } from './components/ListBooks'
import { SectionReadingList } from './components/SectionReadingList'
import { Header } from './components/Header'
import { useSyncWindows } from './hooks/useSyncWindows'

function App() {
  useSyncWindows()

  return (
    <main className='block 2xl:relative 2xl:grid 2xl:grid-cols-[1fr_500px]'>
      <div>
        <Header />
        <ListBooks />
      </div>
      <SectionReadingList />
    </main>
  )
}

export default App
