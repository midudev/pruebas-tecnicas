import { IBook } from '../../interfaces/IBooks'
import CardBook from './CardBook'

interface Props {
  library: IBook[]
  title?: string
  left: boolean
  genre?: string
}

const ListOfBook = ({ library, title, left, genre = '' }: Props) => {
  const books =
    genre !== '' ? library.filter((book) => book.book.genre === genre) : library

  return (
    <>
      <section className="w-[400px] flex flex-col gap-4 items-center">
        <h2>
          {title} {`(${books.length})`}{' '}
          {left ? `- Total sin filtros: (${library.length})` : ''}
        </h2>
        {books.map((book) => {
          return <CardBook key={book.book.title} book={book.book} left={left} />
        })}
      </section>
    </>
  )
}
export default ListOfBook
