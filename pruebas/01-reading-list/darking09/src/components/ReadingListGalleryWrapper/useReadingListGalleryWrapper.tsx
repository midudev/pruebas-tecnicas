import { useTransition } from "react";
import { Book } from '@typesFiles/Books'
import useAppContext from "@context/useAppContext"

export default function useReadingListGalleryWrapper(book : Book) {
  const { removeBooksFromReadingList } = useAppContext()
  let [isPending, startTransition] = useTransition()

  const onClick = () => {
    book.is_available = true
    removeBooksFromReadingList(book)
  }
  return {
    onClick
  };
}
