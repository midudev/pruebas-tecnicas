import {useEffect,useState} from 'react'
import library from './mocks/books.json'
import { Books } from './component/Books'
import { Header } from './component/Header'
import { useFilters } from './hook/useFilters'
import './styles.css'
import { ReadingProvider } from './context/readinglistContext.js'
import { Filters } from './component/Filters'
import {BookToRead} from './component/BookToRead'

function App() {

  const [books,setBooks] = useState([])
  

  useEffect(()=>{
    setBooks(library.library)
  },[])

  const {filterBooks} = useFilters()

  const filteredbooks = filterBooks(books)
  
  return (
    <ReadingProvider>
      <div className='container'>
        <Header />
        <Filters bookNoFiltered={books}/>
        <Books books={filteredbooks}/>
        <BookToRead/>
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
