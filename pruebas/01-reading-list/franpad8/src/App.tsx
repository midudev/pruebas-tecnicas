/* eslint-disable react/react-in-jsx-scope */
import { useMemo } from 'react'
import './App.css'
import { library as initialLibrary } from './books.json'
import { Genre, type Book } from './types.d'
import Books from './components/Books'
import BookList from './components/BookList'
import useFilters from './hooks/useFilters'
import Filters from './components/Filters'
import useBookList from './hooks/useBookList'

function App () {
  const books: Book[] = useMemo(() => initialLibrary.map((book) => book.book), [])

  const { bookList, addToBookList, removeFromBookList } = useBookList(books)
  const {
    filterByCategoryBooks,
    pagesFilter,
    categoryFilter,
    changePagesFilter,
    changeCategoryFilter
  } = useFilters()

  const filteredByCategoryBooks = useMemo(() => filterByCategoryBooks(books), [categoryFilter])

  const categoryCountElement = useMemo(() => {
    return categoryFilter !== Genre.ALL
      ? <h4 className='m-0'>{`${filteredByCategoryBooks.length} libros en la categoría de ${categoryFilter}`}</h4>
      : null
  }, [categoryFilter])

  const filteredBooks: Book[] = filteredByCategoryBooks.filter(book => Number(book.pages) <= pagesFilter)

  return (
    <>
      <header>
        <h1>Librería</h1>
        <h2 className='m-0 text-align-left'>{books.length - bookList.length} libros disponibles</h2>
        <h3 className='m-0 text-align-left'>
          {
            bookList.length > 0
              ? `${bookList.length} en la lista de lectura`
              : ''
          }
        </h3>
      </header>
      <main className='content'>
        <div>
          <Filters
            categoryCountElement={categoryCountElement}
            pagesFilter={pagesFilter}
            categoryFilter={categoryFilter}
            changePagesFilter={changePagesFilter}
            changeCategoryFilter={changeCategoryFilter}/>
          <Books addToBookList={addToBookList} bookList={bookList} books={filteredBooks} />
        </div>
        <div>
          {
            bookList.length > 0
              ? <BookList bookList={bookList} removeFromBookList={removeFromBookList}/>
              : null
          }
        </div>
      </main>
    </>
  )
}

export default App
