import { Book } from './Book'
import { useBooks } from '../hooks/useBooks'
import { Pagination } from '.'

export const Books: React.FC = () => {
  const { booksToShow, pageFrom, pageTo } = useBooks()

  return (
    <section className="col-start-1 col-end-5 sm:col-end-4">
      {booksToShow.length === 0 && <span>No hay libros para mostrar</span>}

      <section className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {booksToShow.slice(pageFrom, pageTo).map(({ ISBN, title, author, cover, isSelected, synopsis }) =>
          <Book
            key={ISBN}
            title={title}
            author={author}
            cover={cover}
            ISBN={ISBN}
            synopsis={synopsis}
            isSelected={isSelected} />
        )}
      </section>
      {booksToShow.length > 0 && <Pagination />}
    </section>
  )
}
