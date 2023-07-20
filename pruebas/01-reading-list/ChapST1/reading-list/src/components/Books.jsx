import { useBookZustandStore } from '../hooks/useBookZustandStore'

export function Books ({ book }) {
  const { updateReadingList, updateBooks, books, readingList } = useBookZustandStore()
  const { id, bookTitle, bookCover } = book

  const handleClick = () => {
    const findBook = books?.find((book) => book.id === id)

    const newBooks = books?.filter((book) => book.id !== id)
    const newReadingList = [...readingList, findBook]

    updateBooks(newBooks)
    updateReadingList(newReadingList)
  }

  return (
    <div className='flex  flex-col items-center gap-4 rounded-md overflow-hidden'>
      <img src={bookCover} alt={bookTitle} className='w-full h-full object-cover' />
      <button type='button' className=' text-[#8f8f8f] w-full py-2.5 px-5  mb-2 text-sm font-medium bg-[#1a1a1a] rounded-lg border border-[#2e2e2e]  hover:text-[#787878] ' onClick={handleClick}>
        agregar
      </button>
    </div>
  )
}
