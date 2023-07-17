import { useEffect } from 'react'
import './App.css'
import DispplayBooks from './Components/DispplayBooks'
import DropDownFilter from './Components/DropDownFilter'
import SliderFilter from './Components/SliderFilter'
import { useDispatch } from 'react-redux'
import { fetchBooks } from './redux/booksSlice'
// import { getBooksData } from '../data/data'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <div className="w-full  bg-gray-001 flex justify-center items-center min-h-screen">
      <div className="w-full px-5 pt-10 sm:px-0 sm:w-[90%] max-w-[2000px] min-h-screen flex items-center flex-col">
        <h1 className="text-3xl">Book Tracker</h1>
        <p>Available books</p>
        <div className="w-50 flex gap-3 p-4 items-center flex-col  sm:w-full sm:flex-row sm:justify-evenly">
          <SliderFilter />
          <DropDownFilter />
        </div>
        <DispplayBooks />
      </div>
    </div>
  )
}

export default App
