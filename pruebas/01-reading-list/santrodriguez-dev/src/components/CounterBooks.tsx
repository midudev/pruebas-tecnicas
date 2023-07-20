import { useContext } from 'react'
import { FiltersContext } from '../context/filters-context'
import { useReadingListStore } from '../store'
import { IconHamburguer } from './Icons/IconHamburguer'

export const CounterBooks = () => {
  const books = useReadingListStore(store => store.books)
  const readingList = useReadingListStore(store => store.readingList)
  const { setShowSideBar } = useContext(FiltersContext)
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Lista de lectura</h1>
        <button
          onClick={() => { setShowSideBar(curr => !curr) }}
          type="button"
          className="sm:hidden text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm p-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          <IconHamburguer />
        </button>
      </div>
      <h3 className="text-3xl font-bold dark:text-white">{books.length - readingList.length} libros disponibles</h3>
      <h3 className="text-3xl font-bold dark:text-white">{readingList.length} en la lista de lectura</h3>
    </>
  )
}
