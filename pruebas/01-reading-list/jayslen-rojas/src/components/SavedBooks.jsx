import {
  IconBookmarks,
  IconBookmarkOff
} from '@tabler/icons-react'
import { useId } from 'react'
import { UseBookContext } from '../hooks/useBooksListContext'

export function SavedBooks () {
  const showAsideListId = useId()
  const { bookList, removeBook } = UseBookContext()
  return (
    <aside>
      <label htmlFor={showAsideListId}>
        <IconBookmarks
          className="w-11 h-11 stroke-1 bg-neutral-500 rounded-full p-2 fixed top-2 right-2 z-30 peer-checked:bg-black"
          color="orange"
        />
      </label>
      <input type="checkbox" className="peer" id={showAsideListId} hidden />
      <div className="fixed right-0 top-0 w-64 h-screen hidden bg-[#c9c6c3] peer-checked:block z-10 overflow-auto p-3 animate-fade-left animate-once animate-ease-linear animate-duration-200">
        <ul className='flex flex-wrap gap-2'>
          {bookList.map((book) => {
            return (
              <li key={book.ISBN}>
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-28 rounded"
                />
                <div>
                  <IconBookmarkOff onClick={() => {
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
