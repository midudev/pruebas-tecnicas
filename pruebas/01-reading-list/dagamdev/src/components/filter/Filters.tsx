import styles from './filter.module.scss'

import FilterCard from "./FilterCard"
import GenderFilter from "./GenderFilter"
import PagesFilter from "./PagesFilter"

const FILTERS = [
  {
    title: 'Género',
    component: GenderFilter
  },
  {
    title: 'Páginas',
    component: PagesFilter
  },
]

export default function Filters(){
  return (
    <section className={styles.filters}>
      <h3>Filtros</h3>

      <ul>
        {FILTERS.map(f=> <FilterCard key={f.title} title={f.title}>
          {<f.component />}
        </FilterCard>)}
      </ul>
    </section>
  )
}