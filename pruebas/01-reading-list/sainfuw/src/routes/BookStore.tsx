import { useContext } from "react";
import Books from "../components/Books";
import Header from "../components/Header";
import ReadList from "../components/ReadList";
import { ReadListContext } from "../context/ReadListContext";

export default function BookStore() {
  const { readList } = useContext(ReadListContext)

  return (
    <main className="flex flex-col h-screen max-w-6xl gap-8 mx-auto">
      <Header />
      <article className="flex flex-col flex-1 px-8 md:flex-row">
        <Books />
        {readList.length > 0 && <ReadList />}
      </article>
    </main>
  )
}