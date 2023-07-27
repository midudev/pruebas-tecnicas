import { InputRange, InputSearch, SelectGenre } from '.'
import styles from './styles/FiltersSection.module.css'

export const FiltersSection: React.FC = () => {
  return (
    <section className={styles.FiltersSection}>
      <InputSearch />
      <SelectGenre />
      <InputRange />
    </section>
  )
}
