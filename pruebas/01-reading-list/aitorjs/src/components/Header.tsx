import { ReactElement } from 'react'
import { useBooksStore } from '../store/booksStore'

const Header = (): ReactElement => {
  const { filteredBooks } = useBooksStore()
  return (

    <section className='flex justify-center'>
      <h1 className='text-6xl font-bold mt-4 mb-8'> Tu librería</h1>

      <div className='bg-purple-100 p-4 flex justify-center items-center flex-wrap'>
        <span className='relative inline-block'>
          <svg className='w-12 h-12 text-gray-300 fill-current' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path d='M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </svg>

          <span title={`${filteredBooks.length} libros disponibles`} className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full'>{filteredBooks.length}</span>
        </span>
      </div>
    </section>

  )
}

export default Header
