import {
  IconBookmarkOff,
  IconBookmarkPlus,
  IconDots
} from '@tabler/icons-react'
import { useContext, useEffect, useState } from 'react'
import { UseBookContext } from '../hooks/useBooksListContext'
import { BooksContext } from '../context/BooksContext'

export function Functionalities ({ showBook, book }) {
  const [bookAdded, setBookAdded] = useState(book.isSaved)
  const { updateBooks, storage, books, updateStorageState, updateBooksState } = useContext(BooksContext)
  const { addBook, removeBook } = UseBookContext()

  useEffect(() => {
    setBookAdded(book.isSaved)
  }, [storage, books])

  const addToBookList = () => {
    updateBooks({ isSaved: true, book })
    addBook({ book })
  }
  const removeFromBookList = () => {
    updateBooks({ isSaved: false, book })
    removeBook({ book })
  }

  useEffect(() => {
    localStorage.setItem('share-books', JSON.stringify(storage))
  }, [storage])

  // useEffect(() => {
  //   const booksInStorage = JSON.parse(localStorage.getItem('share-books'))
  //   if (booksInStorage) {
  //     console.log(booksInStorage)
  //     updateStorageState({ value: booksInStorage })
  //     updateBooksState({ value: booksInStorage })
  //   }

  //   const handleStorageChange = (event) => {
  //     if (event.key === 'share-books') {
  //       updateStorageState({ value: event.newValue })
  //       updateBooksState({ value: booksInStorage })
  //     }
  //   }
  //   window.addEventListener('storage', handleStorageChange)

  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange)
  //   }
  // }, [])

  return (
      <ul className="flex justify-between">
        <li className="flex items-center">
          {bookAdded
            ? <IconBookmarkOff
          className="animate-jump animate-once animate-ease-linear cursor-pointer"
          width={32}
          height={32}
          fill='orange'
          onClick={removeFromBookList}
        />
            : <IconBookmarkPlus
            className='animate-jump animate-once animate-ease-linear cursor-pointer'
            width={32}
            height={32}
            onClick={addToBookList}
          /> }
          {bookAdded && <p className='px-2 py-1 rounded-full bg-orange-600 text-white'>En la lista</p>}

        </li>

        <li>
          <IconDots className='cursor-pointer' onClick={showBook}/>
        </li>
      </ul>
  )
}
