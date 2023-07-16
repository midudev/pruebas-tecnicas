import {useEffect,useState} from 'react'
import library from './mocks/books.json'
import { Books } from './component/Books'
import './styles.css'

function App() {

  const [books,setBooks] = useState([])

  useEffect(()=>{
    setBooks(library.library)
  },[])
  
  return (
    <>
    <Books books={books}/>
    </>
    
  )
}

export default App;
