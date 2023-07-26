import { useBook } from '../../hooks/useBook'
import styles from './ReadingList.module.css'

export default function ReadingList ({ books }) {
  const { handleRemoveBook } = useBook()

  if (books.length === 0) {
    return null
  }

  return (
    <div className={styles.readingList}>
      <h3 className={styles.title}>Lista de lectura</h3>
      <ul>
        {books.map(({ id, title, cover }) => {
          return <li key={id}>
            <h3>{title}</h3>
            <figure>
              <img src={cover} width="300" height="400" alt={title} />
            </figure>
            <button onClick={() => handleRemoveBook(id)}>Remove book</button>
          </li>
        })}
      </ul>
    </div>
  )
}
