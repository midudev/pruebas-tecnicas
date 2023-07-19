import { LibraryElement } from '.'
import { useLibraryStore } from '../../store'

const Library = () => {
  const filteredBooks = useLibraryStore((state) => state.filteredBooks)

  return (
    <section className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center  max-w-7xl mx-auto  gap-5">
      {filteredBooks.length === 0 ? (
        <p>No books with those properties</p>
      ) : (
        filteredBooks.map((libraryElement, index) => <LibraryElement key={index} libraryElement={libraryElement} />)
      )}
    </section>
  )
}

export default Library
