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
      <div className={styles.info}>
        <p><strong>Descripción:</strong> {synopsis}</p>
        <p><strong>Género:</strong> {genre}</p>
        <p><strong>Autor:</strong> {author?.name}</p>
        <p><strong>Año:</strong> {year}</p>
      </div>

      <button onClick={handleClick}>Agregar a la lista</button>
    </article>
  )
}
