import styles from './styles/Footer.module.css'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      Hecho con
      <span className={styles.HeartIcon}>❤</span> por
      <span className={styles.FullName}>Raúl Quimbaya</span>
    </footer>
  )
}
