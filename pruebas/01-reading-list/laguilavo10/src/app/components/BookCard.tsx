import Image from 'next/image'
import type { Book } from '../types'

interface Props {
  book: Book
  setReadList?: React.Dispatch<React.SetStateAction<Book[]>>
}

export default function BookCard({ book, setReadList }: Props) {
  const handleOnClick = () => {
    if (setReadList === undefined) return
    setReadList((prev) => {
      const alreadyIn = prev.includes(book)
      return !alreadyIn ? [...prev, book] : [...prev]
    })
  }
  return (
    <li>
      <Image
        src={book.cover}
        alt={book.title}
        width={200}
        height={300}
        className='h-80 w-56 m-auto'
        onClick={handleOnClick}
      />
    </li>
  )
}
