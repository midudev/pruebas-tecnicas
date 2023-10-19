import { Books } from '../components/Books'
import useFilters from '../hooks/useFilters'
import { library } from '../../books.json'
import { Aside } from '../components/Aside'
import { useWishlistContext } from '../context/listBookContext'
import { useMemo } from 'react'

export default function HomePage () {
  const { getFilteredBooks } = useFilters()
  const filteredBooks = getFilteredBooks({ library })
  const { checkBookInList } = useWishlistContext()

  const booksAvailable = useMemo(() => {
    const cant = filteredBooks.filter(({ book }) => {
      return checkBookInList({ currentBook: book })
    })
    return filteredBooks.length - cant.length
  }, [filteredBooks])

  return (
    <>
      <Aside booksAvailable={booksAvailable} />
      <main className='flex-1 flex flex-col gap-4 p-4'>
        <Books books={filteredBooks} />
      </main>
    </>

  )
};
