import { useBookContext } from '../hooks/useBookContext'

function CardMovie ({ book }) {
  const { setBookInList, bookInList } = useBookContext()

  const addToList = () => {
    const list = bookInList.find(bookList => bookList.title === book.title)
    if (list) return
    setBookInList([
      ...bookInList,
      book
    ])
  }

  const disableBook = () => {
    const disable = bookInList.find(bookList => bookList.title === book.title)
    if (disable) {
      return 'duration-300 flex flex-col gap-2 max-w-[150px] opacity-30'
    } else {
      return 'hover:scale-105 duration-300 flex flex-col gap-2 max-w-[150px]'
    }
  }

  return (
    <div className={disableBook()} onClick={addToList}>
      <img className='min-h-[235px]' src={book.cover} alt={book.title} />
    </div>
  )
}

export { CardMovie }
