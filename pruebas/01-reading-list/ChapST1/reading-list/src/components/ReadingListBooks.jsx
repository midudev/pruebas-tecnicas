import { useBookZustandStore } from '../hooks/useBookZustandStore'

export function ReadingListBooks ({ book }) {
  const { updateBooks, updateReadingList, books, readingList } = useBookZustandStore()
  const id = book.ISBN

  const handleClick = () => {
    const findBook = readingList.find(({ book }) => book.ISBN === id)

    const newBooks = [...books, findBook]
    const newReadingList = readingList.filter(({ book }) => book.ISBN !== id)

    updateBooks(newBooks)
    updateReadingList(newReadingList)
  }

  return (
    <div key={book.ISBN} className=' h-full flex  flex-col items-center gap-4'>
      <img src={book.cover} alt={book.title} className='w-full h-full object-cover' />
      <button type='button' className=' text-[#8f8f8f] w-full py-2.5 px-5 mr-2 mb-2 text-sm font-medium bg-[#1a1a1a]  focus:outline-none  rounded-lg border border-[#2e2e2e]  hover:text-[#787878] focus:z-10 focus:ring-4 focus:ring-gray-200 ' onClick={handleClick}>
        Remover
      </button>
    </div>
  )
}
