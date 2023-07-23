import styles from './Book.module.css'
import { useBook } from '../../hooks/useBook'

export default function Book ({ id, title, cover, genre, pages }) {
  const { handleAddBook } = useBook()

  const handleClick = () => {
    handleAddBook({ id, title, cover, genre, pages })
  }

  return (
    <li className={styles.book}>
      <figure className={styles.cover}>
        <img src={cover} alt={title} />
      </figure>
      <h2 className={styles.title}>{title}</h2>

      <button onClick={handleClick}>Add book</button>
    </li>
  )
}
