import styles from '../styles/main.module.css'
import { BookIcon, FiltersIcon, SavedBooksIcon } from './Icons.jsx'

export function InfoOfBookQuantities({ allBooks, booksInLists, filteredBooks }) {
  return (
    <div className={styles.infoOfBookQuantities}>
      <p title='Libros filtrados'>
        <span>{filteredBooks}</span>
        <FiltersIcon />
      </p>
      <p title='Todos los libros'>
        <span>{allBooks}</span>
        <BookIcon />
      </p>
      <p title='Libros en las listas'>
        <span>{booksInLists}</span>
        <SavedBooksIcon />
      </p>
    </div>
  )
}
