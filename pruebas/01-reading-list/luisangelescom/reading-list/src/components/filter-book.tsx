import { useCallback, useMemo, useRef } from 'react'
import { useStoreLibrary } from '../store/bookStore'
import { useStoreFilter } from '../store/filterBookStore'
import { useBookUser } from '../store/bookStoreUser'
import useFreeBook from '../hooks/useFreeBook'

function FilterBook (): JSX.Element {
  const { book } = useStoreLibrary()
  const { length } = useFreeBook()
  const { bookUser } = useBookUser()
  const { filter, setGenre, setPage, setTitle } = useStoreFilter()
  const timer = useRef<number | null>(null)

  const setValue = useCallback((callback: () => void) => {
    if (timer.current !== null) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      callback()
    }, 200)
  }, [])

  const genres = useMemo(() => new Set(['All', ...book.library.map(({ book: { genre } }) => genre)]), [book])
  const pagesMax = Math.max(...book.library.map(({ book: { pages } }) => pages))
  const pagesMin = Math.min(...book.library.map(({ book: { pages } }) => pages))

  return (
    <main className='w-full flex flex-col gap-4 justify-center lg:sticky py-5 top-32 z-40 bg-[#242424] px-10 2xl:px-0 overflow-hidden'>
      <div className='w-full flex flex-wrap items-center justify-between'>
        <span className='text-2xl tracking-wider font-bold'>
          Filter
        </span>
        <div className='flex flex-col justify-center items-center'>
          <span className='text-md sm:text-2xl font-bold italic edu-sa tracking-tight'>{length} libros disponibles.</span>
          <span className='text-sm sm:text-md  font-semibold italic tracking-tight'>{bookUser.library.length} en la lista.</span>
        </div>
      </div>
      <div
        className='border-2 border-white/20 rounded-lg p-1 relative overflow-hidden grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 w-full justify-between transition-all duration-500'
      >
        <div className='flex flex-col gap-2 justify-center w-full py-2'>
          <label htmlFor='title-filter'>Title</label>
          <input
            name='title-filter'
            className='w-full rounded-md border-2 border-white/20 outline-none outline-1 focus:outline-white/80 h-[30px] px-3 text-lg bg-black/10'
            type='text'
            placeholder='Harry, 1984, Dune ...'
            onChange={(e) => {
              setValue(() => setTitle(e.target.value))
            }}
          />
        </div>
        <div className='flex flex-col gap-2 justify-center w-full'>
          <label htmlFor='genre-filter'>Genre</label>
          <select
            name='genre-filter'
            className='w-full rounded-md border-2 border-white/20 outline-1 focus:outline-white/80 h-[30px] px-3 text-lg bg-black/10'
            onChange={(e) => {
              const genre = e.target.value
              setValue(() => setGenre(genre))
            }}
          >
            {Object.values(Object.fromEntries(genres.entries())).map((genre) => (
              <option key={genre} value={genre} className='bg-black/80'>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col gap-2 justify-center w-full'>
          <label htmlFor='page-filter'>Filtro Pages</label>
          <div className='w-full flex justify-center items-center gap-4'>
            <input
              name='page-filter'
              type='range'
              min={pagesMin}
              max={pagesMax}
              step={1}
              className='w-full range blue'
              onChange={(e) => {
                setValue(() => setPage(+e.target.value))
              }}
            />
            <label htmlFor='page-filter'>{filter.page ?? pagesMin}</label>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FilterBook
