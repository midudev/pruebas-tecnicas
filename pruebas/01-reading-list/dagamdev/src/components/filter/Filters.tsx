import styles from './filter.module.scss'

import FiltersProvider from "@/providers/FiltersProvider"
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
        <FiltersProvider>
          {FILTERS.map(f=> <FilterCard title={f.title}>
            {<f.component />}
          </FilterCard>)}
        </FiltersProvider>
      </ul>
    </section>
  )
}