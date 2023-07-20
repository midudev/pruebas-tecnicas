import { createContext, useState } from 'react'
import booksMocks from '../mocks/books.json'
import { mappedBooks } from '../logic/mapBooks'

export const BooksContext = createContext()

export function BooksProvider ({ children }) {
  const booksInStorage = JSON.parse(localStorage.getItem('books-storage'))
  const initialBooks = mappedBooks({ books: booksMocks.library })
  const [storage, setStorage] = useState(booksInStorage ?? initialBooks) // estado para guardar los libros y sus cambios(almacenar todo el objeto)
  const [books, setBooks] = useState(booksInStorage ?? storage) // estado que se usara para renderizar los libros, y para ejecutar el filtrado.

  const updateBooks = ({ isSaved, book }) => {
    const newBooks = [...storage]
    const index = newBooks.findIndex(item => item.ISBN === book.ISBN)
    newBooks[index].isSaved = isSaved
    newBooks.splice(index, 1, newBooks[index])
    localStorage.setItem('books-storage', JSON.stringify(newBooks))
    setStorage(newBooks)
  }
  const updateBooksState = ({ value }) => {
    setBooks(value)
  }

  const updateStorageState = ({ value }) => {
    setStorage(value)
  }
  return (
        <BooksContext.Provider value={{ books, storage, updateBooks, updateBooksState, updateStorageState }}>
            {children}
        </BooksContext.Provider>
  )
}
// Estoy usando dos estados uno para guardar todo el objeto y el otro para renderizar los libros y evitar que a la hora de hacer el filtro y agregar un libro a la lista desde un filtrado no se guarden solamente esos libros de ese filtrado en el localStorage sino que se guarde todo el objeto
