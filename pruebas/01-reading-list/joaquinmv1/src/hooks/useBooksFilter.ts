import { Book } from "../models/types";

interface useBooksProps {
  availableBooks: Book[];
  pages:number;
  currentCategory:string;
  searchValue:string;
}

export const useBooksFilter = ({ availableBooks, pages, currentCategory, searchValue }: useBooksProps) => {
  const filteredBooks: Book[] = availableBooks.filter(({ book }) => {
    return (
      book.title.toLowerCase().includes(searchValue.toLowerCase()) &&
      (currentCategory === '' || book.genre === currentCategory) &&
      book.pages >= pages
    );
  });

  return filteredBooks;
}