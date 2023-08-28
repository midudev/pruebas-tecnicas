import { useContext } from "react";
import { ReadingBooksContext, type ReadingBooks } from "@/contexts/ReadingBooks";

export function useReadingBooks() {
  return useContext(ReadingBooksContext) as ReadingBooks
}