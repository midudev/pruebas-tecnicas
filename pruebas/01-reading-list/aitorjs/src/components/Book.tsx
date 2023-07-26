import { ReactElement } from 'react'
import { useBooksStore } from '../store/booksStore'

const Book = ({ data }): ReactElement => {
  const { setWantReadBooks, filteredBooks, setBooks } = useBooksStore()

  const handleClick = (isbn: string): void => {
    const index = filteredBooks.findIndex((f) => {
      return f.book.ISBN === isbn
    })

    const filtered = filteredBooks.filter((f) => {
      return f.book.ISBN !== isbn
    })

    setWantReadBooks(filteredBooks[index])
    setBooks(filtered)
  }

  return (
    <>
      <p key={data.ISBN}>
        <img
          src={data.cover}
          width={200}
          height={200}
          alt='alt image'
          onClick={() => {
            handleClick(data.ISBN)
          }}
          className='cursor-pointer max-h-[300px] object-cover rounded-md'
        />
      </p>
    </>
  )
}

export default Book
