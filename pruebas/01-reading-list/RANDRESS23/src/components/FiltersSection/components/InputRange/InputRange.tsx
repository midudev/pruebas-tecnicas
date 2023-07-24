import styles from './styles/InputRange.module.css'

export const InputRange: React.FC = () => {
  return (
    <div className={styles.Filter}>
      <label className={styles.FilterLabel}>Filtrar por paginas</label>
      <input type="range" className={styles.InputRange} />
    </div>
  )
}
