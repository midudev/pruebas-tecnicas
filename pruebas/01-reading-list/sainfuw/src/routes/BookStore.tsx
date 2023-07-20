import { useContext } from "react";
import Books from "../components/Books";
import Header from "../components/Header";
import ReadList from "../components/ReadList";
import { ReadListContext } from "../context/ReadListContext";

export default function BookStore() {
  const { readList } = useContext(ReadListContext)

  return (
    <div className="flex flex-col h-screen max-w-6xl gap-8 py-1 mx-auto rounded-lg bg-background">
      <Header />
      <main className="flex flex-col flex-1 gap-4 px-8 pb-8 md:flex-row">
        <Books />
        {readList.length > 0 && <ReadList />}
      </main>
    </div>
  )
}