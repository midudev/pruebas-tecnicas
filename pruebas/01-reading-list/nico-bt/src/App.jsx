import { useState } from "react"
import "./App.css"
import useBooksData from "./hooks/useBooksData"

function App() {
  const { books, isLoading, error } = useBooksData()

  return (
    <main>
      <h1>Reading List</h1>

      <section>
        <ul className="booklist-container">
          {books?.map((item) => (
            <li key={item.ISBN}>
              <img src={item.book.cover} alt={`${item.book.title} cover`} />
              {/* <h2>{item.book.title}</h2> */}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
