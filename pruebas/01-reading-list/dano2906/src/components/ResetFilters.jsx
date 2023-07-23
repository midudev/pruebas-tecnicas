import Filters from './icons/Filters'

export default function ResetFilters ({ setFilterGenre, setFilterPages, setSearchBooks }) {
  const resetFilters = () => {
    setFilterGenre('Todos')
    setFilterPages(0)
    setSearchBooks('')
  }

  return (
    <button onClick={resetFilters} className='text-blue-600 font-semibold bg-slate-700 border border-blue-600 absolute left-20 top-5 sm:top-6 p-3 rounded flex items-center justify-center transition hover:scale-105'><Filters /></button>
  )
}
