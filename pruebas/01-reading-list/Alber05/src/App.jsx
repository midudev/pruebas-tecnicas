import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/header/Header";
import { BookCard } from "./components/books/BookCard";
import { Menu } from "./components/menu/Menu";
import { Main } from "./components/main/Main";
import { AllBooks } from "./pages/AllBooks";
import { Biblioteca } from "./pages/Biblioteca";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<AllBooks />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
