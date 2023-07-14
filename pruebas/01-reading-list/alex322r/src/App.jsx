
import './App.css'
import { useGlobalContext } from './context/globalContext'
import ListOfBooks from './components/ListOfBooks'
import ReadingList from './components/ReadingList'
import Header from './components/Header'
import useFilters from './hooks/useFilters'


function App() {
  const { library, readingList } = useGlobalContext()
  const { filterLibrary } = useFilters()
  const books = filterLibrary(library)

  return (
    <div style={{ display: 'flex', marginTop: '50px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '65%' }}>
        <Header library={books} readingList={readingList} />
        <ListOfBooks />
      </div>
      <ReadingList />
    </div>
  )
}

export default App
