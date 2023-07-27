import { CardBook } from './CardBook'
import { useFilters } from '../hooks/useFiltersActions'
import { useLibraryReducer } from '../hooks/useLibraryReducer'
import { useAppSelector } from '../hooks/store'
import { useEffect } from 'react'

export function ListBooks () {
  const {
    addBookToReadingList,
    removeBookFromReadingList,
    handleCountBooksFilters
  } = useLibraryReducer()
  const { library, readingList } = useAppSelector(state => state.librariesReducer)
  const { filterLibraries } = useFilters()
  const librariesFiltered = filterLibraries(library)

  useEffect(() => {
    handleCountBooksFilters({
      countBookFiltered: librariesFiltered.length
    })
  }, [librariesFiltered.length])

  return (
    <ul className='grid grid-cols-[repeat(auto-fit,minmax(min(350px,100%),1fr))] gap-4 w-[97%] mx-5 mb-4'>
      {librariesFiltered.map(({ book }) => {
        const { ISBN } = book

        return (
          <CardBook
            key={ISBN}
            book={book}
            readingList={readingList}
            addBookToReadingList={addBookToReadingList}
            removeBookFromReadingList={removeBookFromReadingList}
          />
        )
      })}
    </ul>
  )
}
