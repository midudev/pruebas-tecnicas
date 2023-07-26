import useBooks from '../hooks/useBooks'
import { IBookCard } from '../../interfaces/IBooks'

interface Props {
  book: IBookCard
  left: boolean
}

const CardBook = ({ book, left }: Props) => {
  const { MoveBook } = useBooks()

  const moveBook = () => {
    MoveBook({ book, left })
  }

  return (
    <section
      draggable
      className="cursor-pointer rounded-[14px] bg-[#87878789] w-full object-cover py-5"
      onClick={() => {
        moveBook()
      }}
    >
      <h2>{book.title}</h2>
      <img
        className="w-full h-[500px] m-auto"
        draggable={false}
        src={book.cover}
      />
      <h3>{book.genre}</h3>
    </section>
  )
}
export default CardBook
