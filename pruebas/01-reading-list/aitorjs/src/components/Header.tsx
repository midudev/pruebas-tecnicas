import { useBooksStore } from '../store/booksStore'

const Header = () => {
  const { filteredBooks } = useBooksStore()
  return (
    <>
      <h1 className='text-6xl font-bold'> Librería de libros </h1>

      <h2>
        {filteredBooks.length} libros disponibles
      </h2>
    </>
  )
}

export default Header
