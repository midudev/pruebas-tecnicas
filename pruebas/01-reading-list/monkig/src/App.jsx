import { useContext } from 'react'

import { UserContext } from './context/UserContext'
import Header from './components/Header'
import { BooksContext } from './context/BooksContext'

function App () {
  const { addToReadingList, deleteToReadingList, readingListCounter } = useContext(UserContext)
  const { availableBooks, userReadingList } = useContext(BooksContext)

  return (
    <>
      <Header counter={readingListCounter}/>
      <div className='bg-red-500 mt-1'>
        <h2 className='p-2'>Available books</h2>
        <ul className='grid grid-cols-5 gap-1 p-2 items-center'>
          {availableBooks && availableBooks.map(book => <li className='text-center cursor-pointer' key={book.ISBN} onClick={() => addToReadingList(book)}>{book.title}</li>)}
        </ul>
      </div>
      <div className='bg-blue-500 mt-1'>
        <h2 className='p-2'>User reading list </h2>
        <ul className='grid grid-cols-5 gap-1 p-2'>
          {userReadingList && userReadingList.map(book => <li className='text-center cursor-pointer' key={book.ISBN} onClick={() => deleteToReadingList(book)}>{book.title}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
