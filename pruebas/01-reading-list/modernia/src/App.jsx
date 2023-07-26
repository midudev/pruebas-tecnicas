import { useState, useEffect } from 'react'
import './App.css'
import Book from './Book'
import Filtros from './Filtros'
import BooksInList from './BooksInList'
import useFetchBooks from './hooks/useFetchBooks'
import useActionsBook from './hooks/useActionsBook'


function App() {
  const booksData = useFetchBooks()
  const [genres, setGenres] = useState([])
  const {filteredBooks, handleFilter, handleAddList, handleRemove, booksInList, setBooks, handleFilterBooks, books} = useActionsBook()

  useEffect(() => {
    if(books.length === 0) {
      setBooks(booksData)
    }
    const genres = books.map(({genre}) => genre)
    setGenres([...new Set(genres)])
    handleFilterBooks(books)
  }, [books])

  
  

  if(books.length === 0) return (<h1>Loading...</h1>)
  return (
    
    <div className='grid grid-cols-12 gap-4'>
      <section className={`${booksInList?.length === 0 ? 'col-span-12': 'col-span-8'}`}>
        <h2 className='text-3xl mb-2 font-bold'>{filteredBooks?.length} libros disponibles</h2>

        <Filtros genres={genres} handleFilter={handleFilter}/>
        <div className='books col-span-8'>
          {
            filteredBooks?.map((book) => (
                <Book key={book.ISBN} book={book}>
                  <span onClick={handleAddList} id={book.ISBN} className='text-lg font-bold'>Add to list</span>
                </Book>
              ))
          }
        </div>
      </section>
      {
        booksInList.length > 0 && (
          <BooksInList books={booksInList} handleRemove={handleRemove} />
        )
      }

    </div>
  )
}

export default App
