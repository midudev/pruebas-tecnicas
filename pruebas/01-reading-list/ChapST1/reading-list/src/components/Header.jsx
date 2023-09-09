import { useZustandBookStore } from '../hooks/useZustandBooksStore'
import { Select } from './Select'

export function Header () {
  const { books, readingList } = useZustandBookStore()
  const booksLength = books.length
  const readingListLength = readingList.length

  return (
    <header className=' bg-[#ffffffe3] h-[70px] border-b-2 border-[#e5e5e5] backdrop-blur-md w-full fixed z-50 top-0 left-0 flex items-center justify-between px-5'>
      <Select />

      <div className='flex gap-5'>
        <p className='text-[#171717] text-1xl'>Libros disponibles: {booksLength} </p>
        <p className='text-[#171717] text-1xl'>Libros disponibles: {readingListLength}</p>
      </div>

    </header>
  )
}
