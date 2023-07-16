import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const { booksList } = useSelector((state) => state.books)
  console.log(booksList)

  return (
    <div className="w-full  bg-gray-001 flex justify-center items-center min-h-screen">
      <div className="w-full px-5 sm:px-0 sm:w-[90%] max-w-[1080px] bg-red-900 flex justify-center items-center min-h-screen">
        <div>Hello World!</div>
      </div>
    </div>
  )
}

export default App
