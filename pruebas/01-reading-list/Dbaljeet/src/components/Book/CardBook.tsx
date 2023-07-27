import { IBookCard } from '../../interfaces/IBooks'
import { Heart } from '../ui'

interface Props {
  book: IBookCard
  left: boolean
  MoveBook: ({ book, left }: { book: IBookCard; left: boolean }) => void
  isDragging?: boolean
}

const CardBook = ({ book, left, MoveBook, isDragging }: Props) => {
  const moveBook = () => {
    MoveBook({ book, left })
  }

  let stylesDrag = ''
  switch (isDragging) {
    case true:
      stylesDrag = 'bg-[#f1f1f1a3]'
      break
    case false:
      stylesDrag = 'bg-[#87878789]'
  }

  return (
    <section
      draggable
      id="Card"
      className={`relative rounded-[14px] w-full object-cover py-5 m-auto hover:scale-105 transition-transform duration-200 ${stylesDrag}`}
    >
      <h2 className="p-3 font-semibold">{book.title}</h2>
      <img
        loading="lazy"
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
        title={`${
          left
            ? 'Añadir a tu lista de lectura'
            : 'Eliminar de tu lista de lectura'
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
