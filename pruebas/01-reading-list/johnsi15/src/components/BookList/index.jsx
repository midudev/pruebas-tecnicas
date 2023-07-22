import Book from '../Book'
import styles from './BookList.module.css'

export default function BookList ({ books }) {
  // console.log(books)
  if (books.length === 0) return <p>No hay libros</p>

  return (
    <ul className={styles.books}>
      {books.map(({ id, title, cover }) => {
        return <Book key={id} title={title} cover={cover} id={id} />
      })}
    </ul>
  )
}
