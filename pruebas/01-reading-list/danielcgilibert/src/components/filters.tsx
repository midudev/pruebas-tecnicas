//COMPONENTS
import { FilterIcon, Search } from './icons'

//HOOKS
import { useFilter } from '../hooks/useFilter'

//LIB
import { cn } from '../lib/cn'
import { useStore } from '../store/bookStore'

type Props = {
  genres: string[]
}

export default function Filters({ genres }: Props) {
  const {
    handleSelectCategory,
    selectCategory,
    numberPages,
    setNumberPages,
    setSearch,
    search
  } = useFilter()
  const { books } = useStore()
  const maxPages = Math.max(...books.map((book) => book.pages)) // calculate max pages of all books

  return (
    <div className='flex flex-col gap-6 '>
      <div className='flex items-center justify-start gap-1 text-orange-400'>
        <span>
          <FilterIcon />
        </span>
        <h2 className='text-lg  font-medium '>Filtro</h2>
      </div>
      <form className='flex flex-col gap-8' action=''>
        {/* FILTER PAGES */}
        <div>
          {numberPages === 0 ? (
            <label htmlFor='default-range'>
              Mostrar
              <span className='font-medium'> sin límite de páginas</span>
            </label>
          ) : (
            <label htmlFor='default-range'>
              Hasta <span className='font-medium'>{numberPages}</span> páginas
            </label>
          )}
          <input
            id='default-range'
            type='range'
            value={numberPages}
            className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200'
            min={0}
            step={40}
            max={maxPages}
            onChange={(e) => setNumberPages(Number(e.target.value))}
          />
        </div>

        {/* FILTER SEARCH */}
        <div className='relative w-full'>
          <label
            htmlFor='simple-search'
            className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 '
          >
            <Search />
          </label>
          <input
            type='text'
            id='simple-search'
            className='w-full rounded-lg bg-gray-100 p-2.5 pl-10 text-sm   text-gray-900 outline-none transition-shadow focus:shadow'
            placeholder='Search book...'
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>

      {/* FILTER BY GENRE */}
      <div className='flex flex-col gap-6'>
        <span>Filtrar por género</span>
        <div className='flex flex-wrap gap-x-4 gap-y-5'>
          {genres?.map((genre) => (
            <button
              onClick={() => handleSelectCategory(genre)}
              className={cn(
                'w-fit rounded-full bg-gray-100  px-4 py-1 text-left text-black transition-transform ease-linear hover:-translate-y-1  hover:bg-orange-300 hover:font-medium',
                selectCategory.includes(genre) &&
                  'bg-orange-400 font-medium text-white'
              )}
              key={genre}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
