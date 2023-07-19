import { useBookZustandStore } from '../hooks/useBookZustandStore'
import { Select } from './Select'

export function Header () {
  const { books, readingList } = useBookZustandStore()
  const booksLength = books?.length
  const readingListLength = readingList?.length

  return (
    <header className='h-[150px] w-full fixed left-0 top-0 bg-[#000000e1] backdrop-blur-md border-b border-b-[#2e2e2e] flex  items-center justify-between px-10'>

      <div className='flex gap-7'>
        <div>
          <p>Libros disponibles</p>
          <span className='block text-5xl text-center'>{booksLength}</span>
        </div>

        <div>
          <p>Libros en la lista de lectura</p>
          <span className='block text-5xl text-center'>{readingListLength}</span>
        </div>
      </div>

      <div className='flex items-start gap-10'>
        <Select />
        <label htmlFor='' className=''>
          Filtrar por numeros de paginas
          <input type='range' name='' id='' className='block mt-5 mx-auto accent-[#404040]' />
        </label>
      </div>
    </header>
  )
}
