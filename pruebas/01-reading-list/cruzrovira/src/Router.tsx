import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { BooksContextProvider } from "./contexts/booksContext"
import { FilterContextProvider } from "./contexts/filterContext"
import BookPage from "./pages/book.page"
import HomePage from "./pages/home.page"
interface props {}

const Router: React.FC<props> = () => {
  return (
    <BrowserRouter>
      <BooksContextProvider>
        <FilterContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/isbn/:isbn" element={<BookPage />} />
          </Routes>
        </FilterContextProvider>
      </BooksContextProvider>
    </BrowserRouter>
  )
}

export default Router
