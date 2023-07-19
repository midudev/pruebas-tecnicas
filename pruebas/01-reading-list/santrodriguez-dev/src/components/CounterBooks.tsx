import { useReadingListStore } from '../store'

export const CounterBooks = () => {
  const books = useReadingListStore(store => store.books)
  const readingList = useReadingListStore(store => store.readingList)
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Lista de lectura</h1>
      <h3 className="text-3xl font-bold dark:text-white">{books.length - readingList.length} libros disponibles</h3>
      <h3 className="text-3xl font-bold dark:text-white">{readingList.length} en la lista de lectura</h3>
    </>
  )
}
