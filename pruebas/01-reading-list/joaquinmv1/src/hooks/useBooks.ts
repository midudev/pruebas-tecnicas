import { useContext } from "react";
import { BooksContext } from "../context/BooksProvider";

export const useBooks = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error('useBooks must be used within a BooksProvider');
  }
  
  return context;
};
