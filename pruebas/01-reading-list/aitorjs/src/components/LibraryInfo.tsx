import { ReactElement } from 'react'
import { useBooksStore } from '../store/booksStore'

const LibraryInfo = (): ReactElement => {
  const { filteredBooks, wantReadBooks } = useBooksStore()

  return (
    <>
      <div className='w-[100%] sm:w-2/3 flex flex-col justify-center items-center'>
        <p className='text-3xl lg:text-3xl font-medium'>{filteredBooks.length} libros disponibles</p>
        <p className='text-[1.2rem] lg:text-[1.35rem]'>{wantReadBooks.length} libros en la lista de lectura</p>
      </div>
    </>
  )
}

export default LibraryInfo
