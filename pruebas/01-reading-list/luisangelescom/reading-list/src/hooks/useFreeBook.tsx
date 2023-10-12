import { useMemo } from 'react'
import { useStoreLibrary } from '../store/bookStore'
import { useBookUser } from '../store/bookStoreUser'
import { useStoreFilter } from '../store/filterBookStore'
import { BookProps } from '../types/book'

interface Props {
  freeBook: BookProps[]
  length: number
}

function useFreeBook (): Props {
  const { book } = useStoreLibrary()
  const { bookUser } = useBookUser()
  const { filter } = useStoreFilter()

  const freeBook = useMemo(() => {
    const bookUserOccupancy = new Set(bookUser.library.map(({ book: { ISBN } }) => ISBN))
    let books = book.library.filter(({ book }) => !bookUserOccupancy.has(book.ISBN))

    if (filter.genre !== null && filter.genre !== undefined && filter.genre !== 'All') {
      books = books.filter(({ book: { genre } }) => genre === filter.genre)
    }
    if (filter.page !== null && filter.page !== undefined) {
      books = books.filter(({ book: { pages } }) => pages >= (filter.page ?? 0))
    }
    if (filter.title !== undefined && filter.title !== null) {
      books = books.filter(({ book: { title } }) => title.toLowerCase().includes(filter.title?.toLowerCase()?.trim() ?? ''))
    }
    return books
  }, [book.library, bookUser.library, filter])

  return { freeBook, length: freeBook.length }
}

export default useFreeBook
