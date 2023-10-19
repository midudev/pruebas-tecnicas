// import { useEffect } from 'react'
import { useBookContext } from '../hooks/useBookContext'

function CardBook ({ book }) {
  const { setBookInListSave, bookInListSave } = useBookContext()

  const addToList = () => {
    const list = bookInListSave.find(bookList => bookList.title === book.title)
    if (list) return
    const updatedList = [...bookInListSave, book]
    localStorage.setItem('bookList', JSON.stringify(updatedList))
    setBookInListSave(updatedList)
  }

  const disableBook = () => {
    const disable = bookInListSave.find(bookList => bookList.title === book.title)
    if (disable) {
      return 'duration-300 flex flex-col gap-2 max-w-[150px] opacity-30'
    } else {
      return 'hover:scale-105 duration-300 flex flex-col gap-2 max-w-[150px]'
    }
  }

  window.addEventListener('storage', e => {
    if (e.key === 'bookList') {
      setBookInListSave(JSON.parse(e.newValue))
    }
  }
  )

  return (
    <div className={disableBook()} onClick={addToList}>
      <img className='min-h-[235px]' src={book.cover} alt={book.title} />
    </div>
  )
}

export { CardBook }
