import { useEffect } from 'react'
import { getBooksList } from './getBooks'
import { Library } from './getBooks'
import Books from './outReadingList/Books'
import InReadingList from './inReadingList/InReaidingList'
import { filterInReadingList, filterOutReadingList } from './utils/filterBooks'
import { useBooksStore } from './store/booksStore'
import { useChangeStore } from './hooks/useChangeStore'
import { useFiltersStore } from './store/filtersStore'
import Containerfilters from './filters/ContainerFilters'

export interface BooksFilters {
  outReadingList: Library[]
  inReadingList: Library[]
}

function App() {
  const { change } = useChangeStore()

  const setInitialState = useBooksStore((state) => state.setInitialState)

  const setInitialFilterState = useFiltersStore(
    (state) => state.setInitialFilterState
  )

  useEffect(() => {
    getBooksList()
      .then((listBooks) => {
        const inReading = filterInReadingList(listBooks)
        const outReading = filterOutReadingList(listBooks)

        setInitialState({
          inReadingList: inReading,
          outReadingList: outReading
        })

        setInitialFilterState(listBooks)
      })

      .catch(() => {
        alert('ocurrio un error')
      })
  }, [change]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h1 className='text-3xl font-bold text-center mt-8 pb-10 border-b-2 border-zinc-700'>
        App lista de Lectura
      </h1>
      <Containerfilters />

      <main className=' flex items-start justify-center w-full text-center  mt-10 flex-wrap gap-10 '>
        <Books />
        <InReadingList />
      </main>
    </>
  )
}

export default App
