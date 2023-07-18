import {
  IconBookmarkOff,
  IconBookmarkPlus,
  IconDots
} from '@tabler/icons-react'
import { useContext, useState } from 'react'
import { BookListContext } from '../context/BookListContex'

export function Functionalities ({ showBook, book }) {
  const [bookAdded, setBookAdded] = useState(false)
  const { addBook, removeBook } = useContext(BookListContext)

  const addToBookList = () => {
    setBookAdded(!bookAdded)
    addBook({ value: book })
  }
  const removeFromBookList = () => {
    setBookAdded(!bookAdded)
    removeBook({ book })
  }

  return (
      <ul className="flex justify-between">
        <li className="flex">
          {!bookAdded
            ? <IconBookmarkPlus
            className='animate-jump animate-once animate-ease-linear cursor-pointer'
            width={32}
            height={32}
            onClick={addToBookList}
          />
            : <IconBookmarkOff
          className="animate-jump animate-once animate-ease-linear cursor-pointer"
          width={32}
          height={32}
          onClick={removeFromBookList}
        /> }
        </li>

        <li>
          <IconDots className='cursor-pointer' onClick={showBook}/>
        </li>
      </ul>
  )
}
