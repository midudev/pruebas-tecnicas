import styles from './Header.module.css'
export const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.header__title}>MIDU BOOKS</h2>
      <span>Remove or add a book clicking</span>
    </header>
  )
}
