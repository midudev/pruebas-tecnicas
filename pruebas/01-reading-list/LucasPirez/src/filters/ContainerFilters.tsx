import { FiltersTypes, useFiltersStore } from '../store/filtersStore'
import ButtonRemoveAllFilters from '../buttons/ButtonRemoveAllFilters'
import GenreFilter from './GenreFilter'
import PagesFilter from './PagesFilter'
import ButtonRemoveFilter from '../buttons/ButtonRemoveFilter'
import SeachFilter from './SearchFilter'

export default function Containerfilters() {
  const filters = useFiltersStore((state) => state.filters)

  const arrFilter = Object.entries(filters)

  const longFilters = arrFilter.reduce(
    (acc, act) => (act[1] !== null ? acc + 1 : acc),
    0
  )

  return (
    <header className='m-auto flex flex-col justify-start items-center max-w-[95%] mt-6'>
      <section className='flex w-full justify-center md:gap-32 gap-10 items-start flex-wrap h-[100px]'>
        <GenreFilter />
        <PagesFilter />
        <SeachFilter />
      </section>
      <section className='h-[100px]'>
        <h4 className='mb-4 text-rose-600  font-semibold text-lg'>
          {longFilters > 0 ? 'Filtros aplicados' : 'Ningun filtro aplicado'}
        </h4>
        <div className='flex '>
          {arrFilter.map((filtro) => {
            if (filtro[1] !== null) {
              return (
                <>
                  <span
                    key={filtro[0]}
                    className='ml-3 rounded-sm shadow-sm shadow-slate-400 h-9 px-2 py-1'
                  >
                    {filtro[0].toUpperCase()}
                  </span>
                  <ButtonRemoveFilter tipo={filtro[0] as FiltersTypes} />
                </>
              )
            } else {
              return ''
            }
          })}

          {longFilters > 1 ? (
            <span className='ml-3 rounded-sm shadow-sm shadow-slate-400 h-9 px-2 py-1'>
              <ButtonRemoveAllFilters />
            </span>
          ) : (
            ''
          )}
        </div>
      </section>
    </header>
  )
}
