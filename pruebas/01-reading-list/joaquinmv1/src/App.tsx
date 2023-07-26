import { BooksProvider } from "./context/BooksProvider"
import { Home } from "./pages"

function App() {
  return (
    <>
      <BooksProvider>
        <Home />
      </BooksProvider>
    </>
  )
}

export default App
