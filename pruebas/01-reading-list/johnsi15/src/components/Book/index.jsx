import styles from './Book.module.css'
import { useBookStore } from '../../store/bookStore'

export default function Book ({ id, title, cover, genre, pages }) {
  const addBook = useBookStore(state => state.addBook)

  const handleClick = () => {
    addBook({ id, title, cover, genre, pages })
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
