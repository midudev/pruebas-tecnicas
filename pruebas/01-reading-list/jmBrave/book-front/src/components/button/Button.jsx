'use client'
import styles from './Button.module.css'
const Button = (book) => {
    const handleClick = (book) => {
        const localStorage = window.localStorage
        const booksCurrentlist = localStorage.getItem('bookList')

        if (!booksCurrentlist) {
            localStorage.setItem('bookList', JSON.stringify([book]))
        }
        if (booksCurrentlist) {
            const currentBooks = JSON.parse(booksCurrentlist)
            localStorage.setItem(
                'bookList',
                JSON.stringify([...currentBooks, book])
            )
        }
        window.dispatchEvent(new Event('storage'))
    }
    return (
        <div className={styles.addList}>
            <button onClick={() => handleClick(book)}>Añadir a la lista</button>
        </div>
    )
}

export default Button
