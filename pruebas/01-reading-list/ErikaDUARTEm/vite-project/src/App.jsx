import data from '../../../books.json'
import './App.css'
import { useEffect, useState } from 'react'
import BooksAvalible from './componentes/BooksAvalible'

export default function App() {
 
    const [books, setBooks] = useState([])
    console.log(books)
  useEffect(()=>{
   const datos = data.library.map((book)=>{
      return {
        cover: book.book.cover,
        title: book.book.title,
        genre: book.book.genre,
        pages:book.book.pages,
        synopsis: book.book.synopsis,
        year: book.book.year
      }
    })
    console.log(datos)
  setBooks(datos)

    }, [])

  console.log(books)
  return (
    <>
      
      <section className="books-avalible">
          <div>
              <h2>Libros disponibles:</h2>
          </div>
        
          <BooksAvalible books={books}/>

       
    

      </section>
      
    </>
  )
}

