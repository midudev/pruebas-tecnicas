import { useContext } from "react";
import Books from "./components/Books";
import Favorites from "./components/Favorites";
import { AppContext } from "./context/AppContext";
import FrameExample from "./framer/FrameExample";

export default function App() {
  const { favoriteBooks } = useContext(AppContext)

  return (
    <main className="flex flex-col h-screen max-w-6xl gap-12 p-8 mx-auto">
      <header className="p-5 text-3xl text-center text-white bg-blue-500">Biblioteca Online</header>
      <article className="flex flex-col flex-1 transition-all duration-500 md:flex-row">
        <Books />
        <Favorites />
      </article>
      <footer className="p-5 text-center text-white bg-blue-500">Todos los derechos reservados, sainfuw 2023</footer>
      <FrameExample />
    </main>
  )
}