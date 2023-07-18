import { useReadingListStore } from '../store'

export const CounterBooks = () => {
  const books = useReadingListStore(store => store.books)
  const readingList = useReadingListStore(store => store.readingList)
  return (
    <>
      <section>
        {books.length - readingList.length} libros disponibles
      </section>
      <section>
        {readingList.length} en la lista de lectura
      </section>
    </>
  )
}
