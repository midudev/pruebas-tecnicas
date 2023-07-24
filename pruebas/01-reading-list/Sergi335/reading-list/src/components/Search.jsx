import { useState, useEffect } from 'react'
import { useList } from '../hooks/useList'
import Book from './book'
export default function Search ({ books }) {
  const { list } = useList()
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  console.log(searchResults)

  // la diferencia de libros que hay en la lista con los totales
  const filteredBooks = books.filter((item) => {
    return !list.some((item2) => item2.book.ISBN === item.book.ISBN)
  })

  // establece la query
  const handleSearch = (event) => {
    const query = event.target.value.trim().toLowerCase()
    setQuery(query)
  }
  console.log(query)

  const searchBooks = (query, filteredBooks) => {
    if (query === '') {
      const filteredResults = []
      return filteredResults
    } else {
      const filteredResults = filteredBooks.filter((book) =>
        book.book.title.toLowerCase().replace(/\s/g, '').includes(query.replace(/\s/g, ''))
      )
      return filteredResults
    }
  }
  useEffect(() => {
    setSearchResults(searchBooks(query, filteredBooks))
  }, [query])
  console.log(searchResults.length)
  return (
      <div className="search w-[25%]">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 absolute top-8 ml-[12px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        <input className='block w-full p-[8px] pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          onChange={handleSearch}
          type="text"
          placeholder="Busca en el catálogo"
        />
        <div
          className={
            searchResults.length > 0
              ? 'searchResults fixed bg-white w-screen left-0 top-[151px] h-screen overflow-y-scroll flex'
              : 'hidden'
          }
        >
          {/* Mostrar los resultados de la búsqueda */}
          {searchResults.length > 0
            ? (
                searchResults.map((item) => (
              <Book key={item.book.ISBN} item={item} />
                ))
              )
            : (
            <p>No hay resultados</p>
              )}
        </div>
      </div>
  )
}
