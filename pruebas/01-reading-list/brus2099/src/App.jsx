import './App.css'
import BookList from './components/BookList/BookList'
import Filter from './components/Filter/Filter'
import Header from './components/Header/Header'
import Status from './components/Status/Status'
import { FilterProvider } from './context/filterContext'

function App() {
  return (
    <FilterProvider>
      <>
        <Header />
        <Status />
        <Filter />
        <BookList />
      </>
    </FilterProvider>
  )
}

export default App
