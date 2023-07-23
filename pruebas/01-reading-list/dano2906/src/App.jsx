import AvailableBooksSection from './components/AvailableBooksSection'
import ReadList from './components/ReadList'
import FiltersForm from './components/FiltersForm'
import { useBooks } from './hooks/useBooks'
import { useQuantity } from './hooks/useQuantity'
import OpenTag from './components/OpenTag'
import ResetFilters from './components/ResetFilters'

function App () {
  const { books, quantityByGenre, filterPages, searchBooks, setFilterGenre, setFilterPages, setSearchBooks } = useBooks()
  const { quantityBooks } = useQuantity()

  return (
    <div className='w-screen min-h-screen bg-slate-900 py-24 sm:py-10 flex flex-col gap-y-6 relative'>
      <h2 className='text-3xl text-center font-bold text-blue-300 px-2'>Cantidad de libros disponibles: {quantityBooks}</h2>
      <h3 className='text-xl text-center font-bold text-blue-300 px-2'>Cantidad de libros disponibles del género seleccionado: {quantityByGenre}</h3>
      <FiltersForm setFilterGenre={setFilterGenre} setFilterPages={setFilterPages} pages={filterPages} search={searchBooks} setSearchBooks={setSearchBooks} />
      <AvailableBooksSection books={books} />
      <ReadList />
      <OpenTag />
      <ResetFilters setFilterGenre={setFilterGenre} setFilterPages={setFilterPages} setSearchBooks={setSearchBooks} />
    </div>
  )
}

export default App
