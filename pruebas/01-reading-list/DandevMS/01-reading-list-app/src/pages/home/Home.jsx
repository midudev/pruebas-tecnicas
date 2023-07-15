import Navbar from "../../components/header/Navbar"
import Jumbotron from "../../components/header/Jumbotron"
import CardsBook from "../../components/Books/CardsBook"
import Sidebar from "../../components/Sidebar/Sidebar"



function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="container mx-auto bg-[#F7F5F6]">
        <Jumbotron />
        <CardsBook />
      </main>
    </>
    
  )
}

export default Home