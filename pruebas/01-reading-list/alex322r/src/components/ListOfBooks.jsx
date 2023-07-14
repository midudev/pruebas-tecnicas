import { useGlobalContext } from "../context/globalContext"
import useFilters from "../hooks/useFilters"
import Book from "./Book"

export default function ListOfBooks() {
  const { library, addToReadingList } = useGlobalContext()
  const { filterLibrary } = useFilters()
  const books = filterLibrary(library)
  return (
    <main style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '50px' }} >
      {
        books?.map(book => {
          const { title, cover } = book
          return (
            <Book key={title} title={title} cover={cover} someAction={addToReadingList} />
          )
        })
      }
    </main>
  )
}