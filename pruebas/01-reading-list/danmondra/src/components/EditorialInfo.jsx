import styles from '../styles/main.module.css'

export function EditorialInfo() {
  return (
    <div
      className={styles.editorialInfo}
      data-testid='editorialInfo'
    >
      <h1 className={styles.title}>
        Somos LAZPE Editorial
      </h1>
      <p>Exploramos las vastas fronteras del conocimiento literario, erigiendo puentes entre la erudición y la imaginación, para deleitar las mentes más ávidas con el esplendor de nuestras obras literarias.</p>
    </div>
  )
}
