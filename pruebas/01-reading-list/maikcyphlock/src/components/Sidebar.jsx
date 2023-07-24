import { useContext } from 'react'
import { useAppSelector } from '../hooks/useStore'

import { SidebarContext } from '../hooks/useSidebar'
import { MinusCircle } from './LucyIcons'
import { useBooksActions } from '../hooks/useBooks'

const BookRender = () => {
  const data = useAppSelector((state) => state.books.mybooks)
  const { removeBook } = useBooksActions()
  if (data.length === 0) return null
  return data?.map((book) => (
      <div id={`${book?.ISBN}-sidebar`} key={`${book?.ISBN}-sidebar`} className='flex flex-col items-center border-b border-gray-700 p-6 mb-6'>
        <img src={book.cover} className='object-cover h-full w-full' alt="" />
        <section className='flex flex-col items-center w-full py-2'>
          <h1 className='font-bold'>{book.title}</h1>
          <h2>{book.author.name}</h2>
        </section>
        <button onClick={() => removeBook(book)} className='border-red-300  w-52 border-2 text-red-300 p-2 rounded-md mb-2 flex justify-center gap-1 bg-transparent hover:bg-red-800 hover:border-red-800  '><MinusCircle/>remove</button>
      </div>

  ))
}
const SidebarBlock = () => {
  const [isVisible, setVisible] = useContext(SidebarContext)

  const handleToggle = () => {
    setVisible(!isVisible)
  }

  return (
    <div className={`fixed top-0 left-0 h-full transition-all ease-in-out duration-300  w-96 bg-gray-800 text-white p-4 ${isVisible ? '' : '-left-96'} border-r border-gray-500`} style={{ maxHeight: '100vh', overflowY: 'auto' }} >
      <h1 className="text-2xl font-bold mb-8">Reading list</h1>
      <div className="space-y-2 ">
       <BookRender/>
      </div>
      <button
        onClick={handleToggle}
        className="mt-8 py-2 px-4 border-gray-600 border hover:bg-gray-700 text-white w-full rounded-md"
      >
        {isVisible ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>
    </div>
  )
}

export default SidebarBlock
