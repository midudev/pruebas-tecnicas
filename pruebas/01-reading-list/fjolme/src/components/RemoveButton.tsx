import { Book } from '../types/types'

interface Props {
  book: Book,
  size?: string,
  removeFromReadingList: (book: Book) => void
}

export const RemoveButton = ({ book, size = '3rem', removeFromReadingList }: Props) => {
  return (
    <button
      className={`
        bg-[#d71c00] hover:bg-[#ec2b00]
        rounded-full w-${size} h-${size} text-xl`}
      onClick={() => removeFromReadingList(book)}
      style={{ width: `${size}`, height: `${size}` }}
    >
      <i className="ti ti-bookmark-minus"></i>
    </button>
  )
}
