import {useEffect,useState} from 'react'
import library from './mocks/books.json'
import { Books } from './component/Books'
import { Header } from './component/Header'
import { useFilters } from './hook/useFilters'
import './styles.css'
import './header.css'
import { Footer } from './component/Footer'
import { ReadingProvider } from './context/readinglistContext.js'

function App() {

  const [books,setBooks] = useState([])
  

  useEffect(()=>{
    setBooks(library.library)
  },[])

  const {filterBooks} = useFilters()

  const filteredbooks = filterBooks(books)
  
  return (
    <ReadingProvider>
      <Header bookNoFiltered={books}/>
      <Books books={filteredbooks}/>
      <Footer />
    </ReadingProvider>
    
    
    
  )
}

export default App;
/*
Generos:
Fantasía
Ciencia ficción
Zombies
Terror
*/
