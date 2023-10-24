

interface Props {
  onInputChange: React.ChangeEventHandler<HTMLInputElement>
  searchValue: string
}
  

const Search = ({ onInputChange, searchValue }: Props) => {
  return (
    <form>
      <label
        htmlFor='default-search'
        className='sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        Search
      </label>
      <div className='relative'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <svg
            className='h-4 w-4 text-gray-500 dark:text-gray-400'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
            />
          </svg>
        </div>
        <input
          type='search'
          id='default-search'
          className='mt-3 block h-7 w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-slate-500'
          placeholder='Juego de tronos, Harry Potter...'
          required
          value={searchValue}
          onChange={onInputChange}
        />
      </div>
    </form>
  )
}

export default Search
