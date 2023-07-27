import { useState, useEffect } from "react";
import { Book } from '@typesFiles/Books'
import useAppContext from "@context/useAppContext"

export default function useBookGalleryWrapper(book: Book) {
  const { addBooksToReadingList } = useAppContext()
  useEffect(() => {
    setIsAvailable(checkIsAvailability(book));
  }, [book]);

  //TODO: Add loading function to show loading state
  /*useEffect(() => {
    console.log(isPending)
  }, [isPending]);*/

  const checkIsAvailability = (b: Book) => {
    return b.is_available ?? true
  }

  const [isAvailable, setIsAvailable] = useState(checkIsAvailability(book));

  const onClick = () => {
    book.is_available = false
    addBooksToReadingList(book)
  }

  return {
    onClick,
    isAvailable
  };
}

