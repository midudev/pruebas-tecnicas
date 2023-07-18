import './App.css'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchBooks } from './redux/booksSlice'

import DisplayBooks from './Components/DisplayBooks'
import DropDownFilter from './Components/DropDownFilter'
import SliderFilter from './Components/SliderFilter'
import DisplayFilters from './Components/DisplayFilters'

function App() {
  const dispatch = useDispatch()
  const { booksList } = useSelector((state) => state.books)
  const { selectedFilters } = useSelector((state) => state.books)
  console.log(selectedFilters)

  const setGenre = new Set(booksList.map((element) => element.book.genre))
  const filterGenre = [...setGenre]

  useEffect(() => {
    dispatch(fetchBooks())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full  bg-gray-001 flex justify-center items-center min-h-screen">
      <div className="w-full px-5 pt-10 sm:px-0 sm:w-[90%] max-w-[2000px] min-h-screen flex items-center flex-col">
        <h1 className="text-3xl">Book Tracker</h1>
        <p>Available books</p>
        <div className="w-50 flex gap-3 p-4 items-center flex-col  sm:w-full sm:flex-row sm:justify-evenly">
          <SliderFilter />
          <DropDownFilter filterGenre={filterGenre} />
        </div>
        <DisplayFilters selectedFilters={selectedFilters} />
        <DisplayBooks booksList={booksList} />
      </div>
    </div>
  )
}

export default App
