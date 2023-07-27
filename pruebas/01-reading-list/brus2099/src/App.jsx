import './App.css'
import BookList from './components/BookList'
import Filter from './components/Filter'
import Header from './components/Header'
import Status from './components/Status'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <DataProvider>
        <Header />
        <Status />
        <Filter />
        <BookList />
    </DataProvider>
  )
}

export default App