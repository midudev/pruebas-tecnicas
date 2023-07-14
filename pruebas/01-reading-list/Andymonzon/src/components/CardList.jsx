import { useBookContext } from '../hooks/useBookContext'

function CardList ({ book }) {
  const { setBookInListSave, bookInListSave, setFilterGenre } = useBookContext()

  const removeBookList = () => {
    const removed = bookInListSave.filter(bookList => bookList.title !== book.title)
    setBookInListSave(removed)
    setFilterGenre('')
  }

  return (
        <div className='hover:scale-105 duration-300 flex flex-col gap-2 max-w-[150px] relative'>
            <img className='min-h-[235px]' src={book.cover} alt={book.title} />
            <button onClick={removeBookList} className='absolute left-0 bg-black px-[7px] py-[2px] rounded-full'><i className="fa-solid fa-xmark"></i></button>
        </div>
  )
}

export { CardList }
