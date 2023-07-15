import BooksSection from "./components/BooksSection"

function App() {
  return (
    <div className="w-screen min-h-screen bg-slate-900 py-10 flex flex-col gap-y-10">
      <h1 className="text-6xl text-center font-bold text-blue-500">Librería</h1>
      <BooksSection />
    </div>
  )
}

export default App
