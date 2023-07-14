import './App.css'
import BookList from './components/BookList/BookList'
import Filter from './components/Filter/Filter'
import Header from './components/Header/Header'
import Status from './components/Status/Status'

function App() {
  return (
    <>
      <Header />
      <Status />
      <Filter />
      <BookList />
    </>
  )
}

export default App
