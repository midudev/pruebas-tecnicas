import styles from './styles/SelectGenre.module.css'

export const SelectGenre: React.FC = () => {
  return (
    <div className={styles.Filter}>
      <label className={styles.FilterLabel}>Filtrar por genero</label>
      <div className={styles.FilterSelectContainer}>
        <select className={styles.FilterSelect}>
          <option value="" className={styles.FilterOption}>All</option>
          <option value="" className={styles.FilterOption}>Fantasía</option>
          <option value="" className={styles.FilterOption}>Ciencia ficción</option>
          <option value="" className={styles.FilterOption}>Zombies</option>
        </select>
      </div>
    </div>
  )
}
