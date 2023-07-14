import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { BooksContext } from '../context/BooksContext'

export default function ReadingList () {
  const { deleteToReadingList } = useContext(UserContext)
  const { userReadingList } = useContext(BooksContext)

  return (
    <div className='bg-blue-500 mt-1'>
        <h2>User reading list </h2>
        <ul className='grid grid-cols-5 gap-1 p-2'>
            {userReadingList && userReadingList.map(book => <li className='text-center cursor-pointer animate-fade animate-ease-in animate-normal' key={book.ISBN} onClick={() => deleteToReadingList(book)}>{book.title}</li>)}
        </ul>
    </div>
  )
}
