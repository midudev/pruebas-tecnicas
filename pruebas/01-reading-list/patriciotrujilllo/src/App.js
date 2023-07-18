import {useEffect,useState} from 'react'
import library from './mocks/books.json'
import { Books } from './component/Books'
import { Header } from './component/Header'
import { useFilters } from './hook/useFilters'
import './styles.css'
import './header.css'
import { ReadingProvider } from './context/readinglistContext.js'
import { BookToRead } from './component/BookToRead'

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
      <div>
        <BookToRead />
        <Books books={filteredbooks}/>
      </div>
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
