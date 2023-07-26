import styles from './Button.module.css'
import { addBook, deleteBook } from '../../utils/localstorage'
const Button = ({ book, isAvailable }) => {
    const handleClick = (book, action) => action({ book: book })

    if (isAvailable()) {
        return (
            <div className={styles.addList}>
                <button onClick={() => handleClick(book, addBook)}>
                    Añadir a la lista
                </button>
            </div>
        )
    } else {
        return (
            <div className={styles.deleteList}>
                <button onClick={() => handleClick(book, deleteBook)}>
                    Eliminar de la lista
                </button>
            </div>
        )
    }
}

export default Button
