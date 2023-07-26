import Book from '../Book'
import styles from './BookList.module.css'

export default function BookList ({ books }) {
  // console.log(books)
  if (books.length === 0) return <p className={styles.empty}>No hay libros disponibles</p>

  return (
    <ul className={styles.books}>
      {books.map(({ id, title, cover, genre, pages, synopsis, year, author }) => {
        return (
          <Book
            key={id}
            id={id}
            title={title}
            cover={cover}
            genre={genre}
            pages={pages}
            synopsis={synopsis}
            year={year}
            author={author}
          />
        )
      })}
    </ul>
  )
}
