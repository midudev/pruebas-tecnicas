import { useContext } from "react";
import Books from "../components/Books";
import Header from "../components/Header";
import ReadList from "../components/ReadList";
import { AppContext } from "../context/AppContext";

export default function BookStore() {
  const { readList } = useContext(AppContext)

  return (
    <main className="flex flex-col h-screen max-w-6xl gap-8 mx-auto">
      <Header />
      <article className="flex flex-col flex-1 px-8 transition-all duration-500 md:flex-row">
        <Books />
        {readList.length > 0 && <ReadList />}
      </article>
    </main>
  )
}