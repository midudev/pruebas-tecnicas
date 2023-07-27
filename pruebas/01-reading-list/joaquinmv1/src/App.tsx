import { BooksProvider } from "./context/BooksProvider"
import { Home } from "./pages"
import { Footer, Nav } from "./sections"

function App() {
  return (
    <>
      <Nav />
      <BooksProvider>
        <Home />
      </BooksProvider>
      <Footer />
    </>
  )
}

export default App
