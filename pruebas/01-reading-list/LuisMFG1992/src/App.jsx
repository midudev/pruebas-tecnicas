import './App.css'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchBooks } from './redux/booksSlice'

import DisplayBooks from './Components/DisplayBooks'
import DropDownFilter from './Components/DropDownFilter'
import SliderFilter from './Components/SliderFilter'
import DisplayFilters from './Components/DisplayFilters'
import Navbar from './Components/Navbar'

function App() {
  const dispatch = useDispatch()
  const { booksList } = useSelector((state) => state.books)
  const { selectedFilters } = useSelector((state) => state.books)
  const { genres } = useSelector((state) => state.books)

  useEffect(() => {
    dispatch(fetchBooks())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full  bg-[#202124] flex-col justify-center items-center min-h-screen">
      <Navbar />
      <div className="w-full px-5 pt-10 sm:px-0 sm:w-[90%] max-w-[2000px] min-h-screen flex items-center flex-col">
        <h1 className="text-3xl text-center">Book Tracker</h1>
        <p>Libros disponibles: 10</p>
        <p>Lista de lectura: 3</p>
        <div className="w-full flex gap-8 p-4 items-center justify-evenly flex-wrap sm:flex-row sm:justify-evenly">
          <SliderFilter />
          <DropDownFilter genres={genres} />
        </div>
        <DisplayFilters selectedFilters={selectedFilters} />
        <DisplayBooks booksList={booksList} selectedFilters={selectedFilters} />
      </div>
    </div>
  )
}

export default App
