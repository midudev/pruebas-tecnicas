import FiltersIcon from './icons/FiltersIcon'
import Search from './Search'
import Range from './Range'
import CategoryFilter from './CategoryFilter'
import useBooksFilters from '../hooks/useBookFilters'


const Filters = () => {
  const { clearFilters, pagesState, onPagesStateChange, searchValue, onInputChange } =
    useBooksFilters()

  return (
    <section className='m-auto w-[95%]'>
      <div className='flex gap-2'>
        <FiltersIcon />
        <h3 className='font-medium text-slate-200'>Filtros</h3>
        <button
          type='button'
          className='rounded-lg bg-blue-700 px-3 text-center text-xs font-medium text-white hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700'
          onClick={clearFilters}
        >
          Limpiar Filtros
        </button>
      </div>
      <Search searchValue={searchValue} onInputChange={onInputChange} />
      <Range pagesState={pagesState} onPagesStateChange={onPagesStateChange} />
      <CategoryFilter />
    </section>
  )
}

export default Filters
