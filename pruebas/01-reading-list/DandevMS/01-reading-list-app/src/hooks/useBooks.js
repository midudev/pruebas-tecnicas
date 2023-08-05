import { useState, useEffect } from "react";

export const useBooks = (
  books
) => {

  const [booksList, setBooksList] = useState(books);

  return booksList;
}