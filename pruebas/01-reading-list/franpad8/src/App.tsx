/* eslint-disable react/react-in-jsx-scope */
import { useMemo } from 'react'
import './App.css'
import books from './data/books/fromFile'
import { Genre, type Book } from './types.d'
import Books from './components/Books'
import BookList from './components/BookList'
import useFilters from './hooks/useFilters'
import Filters from './components/Filters'
import useBookList from './hooks/useBookList'

function App () {
  const { bookList, addToBookList, removeFromBookList } = useBookList(books)
  const {
    filterByCategoryBooks,
    filterByTitleBooks,
    pagesFilter,
    categoryFilter,
    searchFilter,
    changePagesFilter,
    changeCategoryFilter,
    changeSearchFilter
  } = useFilters()

  const filteredByTitle = useMemo(() => filterByTitleBooks(books), [searchFilter])

  const filteredByCategoryBooks = useMemo(() => filterByCategoryBooks(filteredByTitle), [categoryFilter, searchFilter])

  const categoryCountElement = useMemo(() => {
    return categoryFilter !== Genre.ALL
      ? <h4 className='m-0'>{`${filteredByCategoryBooks.length} libros en la categoría de ${categoryFilter}`}</h4>
      : null
  }, [categoryFilter])

  const filteredBooks: Book[] = useMemo(() => {
    return filteredByCategoryBooks.filter(book => Number(book.pages) <= pagesFilter)
  }, [categoryFilter, searchFilter, pagesFilter])

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
            searchFilter={searchFilter}
            changePagesFilter={changePagesFilter}
            changeCategoryFilter={changeCategoryFilter}
            changeSearchFilter={changeSearchFilter}/>
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
