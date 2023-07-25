import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { CrossIcon, List } from './Icons'
import { useMenu } from '../hooks/useMenu'
import { BookItem } from './BookItem'

export function ReadingList () {
  const { readingList } = useContext(GlobalContext)
  const { menuRef, open, updateOpen } = useMenu()

  return (
    <div ref={menuRef} className=''>
      <button onClick={() => updateOpen(true)} className='relative text-xl text-white p-2 bg-blue-600 rounded-md hover:brightness-125' type='button'>
        <List />
        {
          readingList.length > 0 && (
            <span
              className='text-sm font-semibold text-sky-950 flex justify-center items-center w-6 h-6 absolute -bottom-3 -right-3 rounded-full p-1 bg-sky-200 border-2 border-white'>
                {readingList.length}
              </span>
          )
        }
      </button>
      <div className={`fixed z-20 w-full max-w-[452px] flex flex-col h-screen shadow-card bg-white p-3 top-0 right-0 origin-right duration-200 ease-out transition-transform ${open ? 'scale-x-100' : 'scale-x-0'}`}>
        <button onClick={() => updateOpen(false)} type='button' className='self-end text-3xl mb-4 rounded-full transition-[background-color] duration-200 ease-out hover:bg-sky-200'>
          <CrossIcon />
        </button>
        <p className='text-lg mb-4'>Libros en la lista <span className='px-1 bg-sky-200 rounded-full'>{readingList.length}</span></p>
        <ul className='scroll-sm flex flex-col gap-2 overflow-y-auto scroll-mx-2 pr-1'>
          {
            readingList.length > 0
              ? readingList?.map((obj, i) => (
                <BookItem key={obj.book.ISBN} title={obj.book.title} year={obj.book.year} img={obj.book.cover} genre={obj.book.genre} ISBN={obj.book.ISBN} />
              ))
              : <p>No hay libros en la lista de lectura</p>
          }
        </ul>
      </div>
    </div>
  )
}
