import styles from './styles/ShelfTable.module.css'

export const ShelfTable: React.FC = () => {
  return (
    <div className={styles.ShelfTable}>
      <div className={styles.Table}></div>
      <div className={styles.BorderTable}></div>
      <div className={styles.ShadowTable}></div>
    </div>
  )
}
