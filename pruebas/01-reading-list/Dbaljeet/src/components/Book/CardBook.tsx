import { IBookCard } from '../../interfaces/IBooks'
import { Heart } from '../ui'

interface Props {
  book: IBookCard
  left: boolean
  MoveBook: ({ book, left }: { book: IBookCard; left: boolean }) => void
}

const CardBook = ({ book, left, MoveBook }: Props) => {
  const moveBook = () => {
    MoveBook({ book, left })
  }

  return (
    <section
      draggable
      id="Card"
      className={`relative rounded-[14px] bg-[#87878789] w-full object-cover py-5 m-auto`}
    >
      <h2 className="p-3 font-semibold">{book.title}</h2>
      <img
        className="w-full h-[300px] m-auto"
        draggable={false}
        src={book.cover}
      />
      <h3>{book.genre}</h3>
      <h4 className="absolute bottom-0 right-2">{book.pages}</h4>
      <h4>{book.year}</h4>

      <button
        className={`absolute top-3 right-5 transition-colors duration-500 ${
          left
            ? 'text-white hover:text-red-500'
            : 'text-red-500 hover:text-white'
        }`}
        onClick={(ev) => {
          ev.stopPropagation()
          moveBook()
        }}
      >
        <Heart />
      </button>
    </section>
  )
}
export default CardBook
