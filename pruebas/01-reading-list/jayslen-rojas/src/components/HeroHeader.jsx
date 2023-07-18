import { IconBookmarks } from '@tabler/icons-react'
import { useContext, useId } from 'react'
import { BookListContext } from '../context/BookListContex'

export function Header () {
  const showAsideListId = useId()
  const { bookList } = useContext(BookListContext)
  return (
        <header>
        <label htmlFor={showAsideListId}>
          <IconBookmarks
            className="w-11 h-11 stroke-1 bg-neutral-500 rounded-full p-2 fixed top-2 right-2 z-30 peer-checked:bg-black"
            color="orange"
          />
        </label>
        <input type="checkbox" className='peer' id={showAsideListId} hidden/>
        <aside className='fixed w-96 h-screen bg-[#c9c6c3] shadow-black shadow-2xl right-0 translate-x-96 top-0 peer-checked:translate-x-0 transition-transform grid grid-cols-2 gap-4 p-4 z-20'>
          {bookList.map((data) => {
            return (
              <img src={data.cover} alt={data.title} key={data.ISBN} />
            )
          })}

        </aside>
      </header>
  )
}
