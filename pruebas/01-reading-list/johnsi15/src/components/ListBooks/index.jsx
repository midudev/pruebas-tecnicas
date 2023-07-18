import Book from '../Book'
import styles from './ListBooks.module.css'

export default function ListBooks ({ books }) {
  console.log(books)
  if (books.length === 0) return <p>No hay libros</p>

  return (
    <ul className={styles.books}>
      {books.map(data => {
        const { title, ISBN: id, cover } = data.book
        return <Book key={id} title={title} cover={cover} />
      })}
    </ul>
  )
}
