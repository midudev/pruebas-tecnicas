import useBooks from '../hooks/useBooks'
import { IBookCard } from '../../interfaces/IBooks'

interface Props {
  book: IBookCard
  left: boolean
  isFilter: boolean
}

const CardBook = ({ book, left, isFilter = false }: Props) => {
  const { MoveBook } = useBooks()

  const moveBook = () => {
    MoveBook({ book, left })
  }

  return (
    <section
      draggable
      id="Card"
      className={`cursor-pointer rounded-[14px] bg-[#87878789] w-full object-cover py-5 m-auto ${
        isFilter ? 'cursor-default' : 'cursor-grab'
      }`}
      onClick={(ev) => {
        ev.stopPropagation()
        moveBook()
      }}
    >
      <h2>{book.title}</h2>
      <img
        className="w-full h-[300px] m-auto"
        draggable={false}
        src={book.cover}
      />
      <h3>{book.genre}</h3>
    </section>
  )
}
export default CardBook
