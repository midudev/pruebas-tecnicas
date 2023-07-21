import AvailableBooksSection from './components/AvailableBooksSection'
import ReadList from './components/ReadList'
import FiltersForm from './components/FIltersForm'
import { useBooks } from './hooks/useBooks'

function App () {
  const { books, setFilterGenre, setFilterPages, availableBooks } = useBooks()

  return (
    <div className='w-screen min-h-screen bg-slate-900 py-20 sm:py-10 flex flex-col gap-y-6 relative'>
      <h1 className='text-6xl text-center font-bold text-blue-500'>Librería</h1>
      <h3 className='text-3xl text-center font-bold text-blue-400'>Cantidad de libros disponibles: {availableBooks}</h3>
      <FiltersForm setFilterGenre={setFilterGenre} setFilterPages={setFilterPages} />
      <AvailableBooksSection books={books} />
      <ReadList />
    </div>
  )
}

export default App
