import { IconBookmarks, IconX, IconTrash, IconBookmarkOff } from '@tabler/icons-react'
import { useId } from 'react'
import { UseBookContext } from '../hooks/useBooksListContext'

export function SavedBooks () {
  const showAsideListId = useId()
  const { bookList, removeBook, clearList } = UseBookContext()
  return (
    <aside>
      <label htmlFor={showAsideListId}>
        <IconBookmarks
          className="w-16 h-10 stroke-1 rounded-full p-2 fixed top-2 right-2 peer-checked:bg-black bg-gradient-to-r from-rose-400 to-orange-300 "
          color="black"
        />
      </label>
      <input type="checkbox" className="peer" id={showAsideListId} hidden />

      <div className="fixed right-0 top-0 w-64 h-screen hidden p-2 bg-[#c9c6c3] peer-checked:block z-10 overflow-auto animate-fade-left animate-once animate-ease-linear animate-duration-200">

        <div className='flex justify-between'>
          <label htmlFor={showAsideListId}>
            <IconX className='bg-white rounded-full p-2 h-8 w-8 text-red-500 hover:text-white hover:bg-red-500 transition-colors cursor-pointer'/>
          </label>
          <IconBookmarkOff className='bg-white rounded-full p-2 h-8 w-8 text-red-500 hover:text-white hover:bg-red-500 transition-colors cursor-pointer' onClick={clearList}/>
        </div>

        <ul>
          {bookList.map((book) => {
            return (
              <li key={book.ISBN} className='flex gap-2 py-2 border-b border-b-gray-500 items-center'>
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-20 rounded"
                />
                <div>
                <h4 className='font-bold'>{book.title}</h4>
                <p>{book.author.name}</p>
                <p>{book.genre}</p>
                <IconTrash className='bg-white rounded-md p-2 h-8 w-10 text-red-500 hover:text-white hover:bg-red-500 transition-colors cursor-pointer' onClick={() => {
                  removeBook({ book })
                }}/>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
