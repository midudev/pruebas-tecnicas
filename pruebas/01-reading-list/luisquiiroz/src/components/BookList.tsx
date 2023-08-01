import { Book } from './Book'
import { useBookStore } from '../store/bookStore'

export function BookList () {
  const { books, genre, pages } = useBookStore()

  const filteredBooks = books.filter(book => {
    const genreMatch = genre === '' || genre === book.genre
    const pagesMatch = pages === '' || book.pages >= Number(pages)

    return genreMatch && pagesMatch
  })

  const numBooks = books.length
  return (
    <div className='rounded-xl p-4'>
      <p className='text-brown-1 text-xl font-medium mb-2'>Libros disponibles ({numBooks})</p>
      {
        filteredBooks.length <= 0
          ? (<p className='text-brown-1 text-2xl font-medium p-8'>No hay libros disponibles con los filtros aplicados</p>)
          : (
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
              {filteredBooks.map(book => (
                <Book book={book} key={book.isbn} />
              ))}
            </div>
            )
      }
    </div>
  )
}
