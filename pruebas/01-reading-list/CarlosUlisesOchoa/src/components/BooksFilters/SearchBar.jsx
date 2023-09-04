import PropTypes from 'prop-types'
import { useId } from 'react'
import SearchIcon from '@/components/Icons/SearchIcon'

export function SearchBar({ onSubmit, onChange, placeholder, className = '' }) {
  const id = useId()

  return (
    <form onSubmit={onSubmit} className='relative flex items-center'>
      <input
        type='search'
        name={id}
        id={id}
        placeholder={placeholder}
        className={`text-inherit dark:text-inherit w-full pr-12 bg-[#f0f5ff] dark:bg-zinc-800 py-2 px-3 rounded-md transition-colors duration-150 ${className}`}
        onChange={onChange}
      />

      <button
        type='button'
        className='block absolute right-0 mr-3'
        aria-label='Buscar libro por título'>
        <SearchIcon className='w-6 h-6 stroke-black dark:stroke-white' />
      </button>
    </form>
  )
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
}
