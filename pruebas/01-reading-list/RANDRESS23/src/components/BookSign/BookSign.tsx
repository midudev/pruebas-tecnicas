import styles from './styles/BookSign.module.css'

export const BookSign: React.FC = () => {
  return (
    <div className={styles.BookSign}>
      <div className={styles.Sign}>Books to read: 10</div>
    </div>
  )
}
