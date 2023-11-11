import { useBooks, useReadingList } from './hooks'
import { Filters } from '@components/filters'
import { BooksList } from '@components/books-list'
import { ReadingList } from '@components/reading-list'

function App () {
  const { getLocalStorageBooks } = useBooks()
  const { readingList } = useReadingList()

  return (
    <main className='container mx-auto'>
      <h1 className='pt-12'>
        <p className='text-6xl font-bold tracking-tight'>My reading list</p>
        <p className='text-xl font-bold underline decoration-solid decoration-pink-300'>
          There are <span>{getLocalStorageBooks()?.length ?? 0 - (readingList?.length ?? 0)}</span> books you
          haven't read yet!
        </p>
      </h1>
      <div className='flex py-12'>
        <BooksList />
        <section className='px-6'>
          <div className='flex flex-col gap-6 sticky top-6'>
            <Filters />
            <ReadingList />
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
