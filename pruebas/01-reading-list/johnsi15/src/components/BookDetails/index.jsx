import { useBook } from '../../hooks/useBook'
import styles from './BookDetails.module.css'
export default function BookDetails ({ id, title, cover, pages, genre, synopsis, year, author }) {
  // console.log({ author })
  const { handleAddBook } = useBook()

  const handleClick = () => {
    handleAddBook({ id, title, cover, genre, pages, synopsis, year, author })
  }

  return (
    <article className={styles.bookDetails}>
      <h2 className={styles.title}>{title}</h2>
      <p>{genre}</p>
      <p>{synopsis}</p>
      <span>{author?.name}</span>
      <button onClick={handleClick}>Add book</button>
    </article>
  )
}
