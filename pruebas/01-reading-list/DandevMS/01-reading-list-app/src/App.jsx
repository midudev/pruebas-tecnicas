import Navbar from "./components/header/Navbar"
import Jumbotron from "./components/header/Jumbotron"
import ListBooks from "./components/Books/ListBooks"
import Sidebar from "./components/Sidebar/Sidebar"
import { BooksProvider } from "./context/BooksContextProvider"

function App() {
  return (
    <BooksProvider>
    <Navbar />
    <Sidebar />
      <main className="container mx-auto bg-[#F7F5F6]">
        <Jumbotron />
        <ListBooks />
      </main>
  </BooksProvider>
  )
}

export default App;
