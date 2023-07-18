import styles from './Book.module.css'

export default function Book ({ title, cover }) {
  return (
    <li className={styles.book}>
      <figure className={styles.cover}>
        <img src={cover} alt={title} />
      </figure>
      <h2 className={styles.title}>{title}</h2>
    </li>
  )
}
