import { useBooksStore } from '../store/booksStore'

const PageFilter = () => {
  const { filter, filters } = useBooksStore()

  const filterPageBooks = (pages: number) => {
    filter('pages', pages)
  }

  return (
    <div className='flex gap-2'>

      <label htmlFor='pageFilter' title={`Hasta ${filters.pages || 'cualquier'} páginas`}>
        <svg className='w-6 h-6 text-gray-700 fill-current' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
        </svg>
      </label>

      <input
        type='range'
        min='0'
        max='1400'
        step='200'
        id='pageFilter'
        name='pageFilter'
        onChange={(e) => filterPageBooks(Number(e.target.value))}
      />
      {/* {filters.pages > 0 && <span>PAGES {filters.pages}</span>} */}
    </div>
  )
}

export default PageFilter
