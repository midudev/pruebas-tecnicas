import BooksSection from "./components/BooksSection"
import { useBooks } from "./hooks/useBooks";

function App() {
  const {availableBooks} = useBooks()
  return (
    <div className="w-screen min-h-screen bg-slate-900 py-20 sm:py-10 flex flex-col gap-y-6 relative">
      <h1 className="text-6xl text-center font-bold text-blue-500">Librería</h1>
      <h3 className="text-3xl text-center font-bold text-blue-400">Cantidad de libros disponibles: {availableBooks}</h3>
      <BooksSection />
    </div>
  )
}

export default App
