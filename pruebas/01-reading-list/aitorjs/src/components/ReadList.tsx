import { ReactElement } from 'react'
import { useBooksStore } from '../store/booksStore'

const ReadList = (): ReactElement => {
  const { wantReadBooks, filteredBooks, setBooks } = useBooksStore()

  const handleClick = (isbn: string): void => {
    const index = wantReadBooks.findIndex((f) => {
      return f.book.ISBN === isbn
    })

    const [wantNoRead] = wantReadBooks.splice(index, 1)
    setBooks([...filteredBooks, wantNoRead])
  }

  return (
    <>
      <p className='text-2xl pb-4 mt-8 sm:mt-[0] font-medium flex items-center gap-4'>
        <span>Lista de lectura</span>
        <span className='px-2 py-1 text-xs font-bold leading-none text-purple-100 bg-purple-600 rounded-full'>
          {wantReadBooks.length}
        </span>
      </p>

      <div className='flex flex-wrap gap-4 flex-row w-[250px]'>
        {wantReadBooks.map(({ book }) => (
          <span key={book.ISBN}>
            <img
              src={book.cover}
              width={200}
              height={200}
              alt='alt image'
              onClick={() => {
                handleClick(book.ISBN)
              }}
              className='cursor-pointer max-w-[100px] object-cover rounded-md'
            />
          </span>
        ))}
      </div>
    </>
  )
}

export default ReadList
