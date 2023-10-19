import PropTypes from 'prop-types'
import { useId } from 'react'
import SearchIcon from '@/components/Icons/SearchIcon'

// export function SearchBar({ onSubmit, onChange, placeholder, className = '' }) {
//   const id = useId()

//   return (
//     <form onSubmit={onSubmit} className='relative flex items-center'>
//       <input
//         type='search'
//         name={id}
//         id={id}
//         placeholder={placeholder}
//         className={`text-inherit w-full pr-12 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 py-2 px-3 rounded-md transition-colors duration-150 dark:text-inherit dark:bg-zinc-800 ${className}`}
//         onChange={onChange}
//       />

//       <button
//         type='button'
//         className='block absolute right-0 mr-3'
//         aria-label='Buscar libro por título'>
//         <SearchIcon className='w-6 h-6 stroke-black dark:stroke-white' />
//       </button>
//     </form>
//   )
// }

export function SearchBar({ onSubmit, onChange, placeholder, className = '' }) {
  const id = useId()

  return (
    <form onSubmit={onSubmit}>
      <label
        htmlFor={id}
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <SearchIcon className='w-6 h-6 stroke-black dark:stroke-white' />
        </div>
        <input
          type='search'
          name={id}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          className='block w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
        />
      </div>
    </form>
  )
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
}
