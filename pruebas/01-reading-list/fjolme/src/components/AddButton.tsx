import { Book } from '../types/types'

interface Props {
  book: Book,
  size?: string,
  addToReadingList: (book: Book) => void
}

export const AddButton = ({ book, size = '3rem', addToReadingList }: Props) => {
  return (
    <button
      className={`
        text-neutral-800
        bg-[#1cd760] hover:bg-[#2bec71]
        rounded-full w-12 h-12 text-xl`}
      onClick={() => addToReadingList(book)}
      style={{ width: `${size}`, height: `${size}` }}
    >
      <i className="ti ti-bookmark-plus"></i>
    </button>
  )
}
