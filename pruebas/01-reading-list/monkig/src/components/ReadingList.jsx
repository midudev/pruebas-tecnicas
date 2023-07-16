import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { BooksContext } from '../context/BooksContext'

export default function ReadingList () {
  const { deleteToReadingList } = useContext(UserContext)
  const { readingList } = useContext(BooksContext)

  return (
    <>
     <section id='readingListSection' className='bg-blue-500 mt-1 absolute top-12 right-0 rounded-lg flex flex-col items-center z-10'>
        <h2>User reading list </h2>
        <ul className='flex flex-col p-2'>
            {readingList.userReadingList && readingList.userReadingList.map(book => <li className='text-center cursor-pointer animate-fade animate-ease-in animate-normal' key={book.ISBN} onClick={() => deleteToReadingList(book)}>{book.title}</li>)}
        </ul>
      </section>
    </>
  )
}
/*
  <button data-popover-target="popover-default" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default popover</button>
<div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
        <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
    </div>
    <div class="px-3 py-2">
        <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div>
*/
/*
  <section id='readingListSection' className='bg-blue-500 mt-1 absolute top-12 right-0 rounded-lg flex flex-col items-center z-10'>
        <h2>User reading list </h2>
        <ul className='flex flex-col p-2'>
            {readingList.userReadingList && readingList.userReadingList.map(book => <li className='text-center cursor-pointer animate-fade animate-ease-in animate-normal' key={book.ISBN} onClick={() => deleteToReadingList(book)}>{book.title}</li>)}
        </ul>
      </section>
*/
