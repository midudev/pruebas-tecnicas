import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

export function useBooksContext() {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooksContext must be used within a BooksProvider");
  }
  return context;
}
