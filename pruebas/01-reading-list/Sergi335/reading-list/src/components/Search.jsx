import { useState, useEffect } from 'react'
import { useList } from '../hooks/useList'
import Book from './book'
export default function Search ({ books }) {
  const { list } = useList()
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [visible, setVisible] = useState(false)

  // la diferencia de libros que hay en la lista con los totales
  const filteredBooks = books.filter((item) => {
    return !list.some((item2) => item2.book.ISBN === item.book.ISBN)
  })

  // establece la query
  const handleSearch = (event) => {
    const query = event.target.value.trim().toLowerCase()
    setQuery(query)
  }

  const searchBooks = (query, filteredBooks) => {
    if (query === '') {
      const filteredResults = []
      return filteredResults
    } else {
      const filteredResults = filteredBooks.filter((book) =>
        book.book.title.toLowerCase().replace(/\s/g, '').includes(query.replace(/\s/g, ''))
      )
      setVisible(true)
      return filteredResults
    }
  }
  useEffect(() => {
    setSearchResults(searchBooks(query, filteredBooks))
  }, [query])

  const [key, setKey] = useState(1)
  const cleanSearch = (event) => {
    if (visible && event.target.nodeName !== 'BUTTON') {
      console.log(event.target)
      setVisible(false)
      setKey((prevKey) => prevKey + 1)
    }
  }
  return (
      <div className="search w-[25%] hidden 2xl:block">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 absolute top-8 ml-[12px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        <input key={key} className='block w-full p-[8px] pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-0 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#100c18]'
          onChange={handleSearch}
          type="text"
          placeholder="Busca en el catálogo"
        />
        <div onClick={cleanSearch}
          className={ visible
            ? 'searchResults fixed bg-white w-screen left-0 top-[151px] h-screen overflow-y-scroll flex dark:bg-[#3f2e3e] pt-[80px]'
            : 'hidden' }>
            <ul className='flex flex-wrap justify-center gap-36 p-0 min-h-[100vh] w-[100%] 2xl:pl-[184px] 2xl:justify-start'>
          <p className='cursor-pointer fixed top-[172px] left-[47%]'>Cerrar ❌</p>
          {/* Mostrar los resultados de la búsqueda */}
          {searchResults.length > 0
            ? (
                searchResults.map((item) => (
              <Book key={item.book.ISBN} item={item} />
                ))
              )
            : (
            <p className='cursor-pointer'>No hay resultados 🤷‍♂️ Cerrar ❌</p>
              )}
            </ul>
        </div>
      </div>
  )
}
