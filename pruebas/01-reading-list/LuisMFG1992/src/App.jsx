import './App.css'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchBooks } from './redux/booksSlice'

import DisplayBooks from './Components/DisplayBooks'
import DropDownFilter from './Components/DropDownFilter'
import DisplayFilters from './Components/DisplayFilters'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
// import SliderFilter from './Components/SliderFilter'

function App() {
  const dispatch = useDispatch()

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const { booksList } = useSelector((state) => state.books)
  const { selectedFilters } = useSelector((state) => state.books)
  const { genres } = useSelector((state) => state.books)
  const { readingList } = useSelector((state) => state.books)

  useEffect(() => {
    dispatch(fetchBooks())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handelSidabar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="w-full bg-[#202124] flex-col justify-center items-center min-h-screen">
      {isSidebarOpen && (
        <div className="absolute top-0">
          <Sidebar handelSidabar={handelSidabar} readingList={readingList} />
        </div>
      )}
      <Navbar handelSidabar={handelSidabar} readingList={readingList} />
      <div className="w-full px-5 pt-20 sm:px-0 max-w-[2000px] min-h-screen flex items-center flex-col gap-2">
        <div className="inline-flex gap-5">
          <p>Libros disponibles: {booksList.length - readingList.length}</p>
          <p>Lista de lectura: {readingList.length}</p>
        </div>
        <DisplayFilters selectedFilters={selectedFilters} />
        <div className="w-full flex gap-8 items-center justify-evenly flex-wrap sm:flex-row sm:justify-evenly">
          {/* <SliderFilter /> */}
          <DropDownFilter genres={genres} />
        </div>
        <DisplayBooks
          booksList={booksList}
          selectedFilters={selectedFilters}
          readingList={readingList}
        />
      </div>
    </div>
  )
}

export default App
