import { useBookZustandStore } from '../hooks/useBookZustandStore'
import { Range } from './Range'
import { Select } from './Select'

export function Header () {
  const { books, readingList } = useBookZustandStore()
  const booksLength = books?.length
  const readingListLength = readingList?.length

  return (
    <header className='h-[150px] w-full fixed left-0 top-0 z-[1200] bg-[#000000e1] backdrop-blur-md border-b border-b-[#2e2e2e] flex  items-center justify-between px-10'>

      <div className='flex gap-7'>
        <div>
          <p className='text-[#ededea]'>Libros disponibles</p>
          <span className='block  m-auto text-[#7b7b7a] text-2xl text-center bg-[#1a1a1a] w-[max-content] py-1 px-5 mt-1 rounded-md border border-[#2e2e2e]'>{booksLength}</span>
        </div>

        <div>
          <p className='text-[#ededea]'>Libros en la lista</p>
          <span className='block  m-auto text-[#7b7b7a] text-2xl text-center bg-[#1a1a1a] w-[max-content] py-1 px-5 mt-1 rounded-md border border-[#2e2e2e]'>{readingListLength}</span>
        </div>
      </div>

      <div className='flex items-start gap-10'>
        <Select />
        <Range />
      </div>
    </header>
  )
}
