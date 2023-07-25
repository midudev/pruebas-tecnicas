import { useContext } from 'react'
import { BooksContext, type BooksData } from "@/contexts/BooksContext";

export function useBooks() {
  return useContext(BooksContext) as BooksData
}