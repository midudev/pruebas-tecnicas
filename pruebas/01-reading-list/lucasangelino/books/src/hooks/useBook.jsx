import { useState } from "react";

function useBook() {
  const [isInReadingList, setisInReadingList] = useState(false);

  const addToReadingList = (book) => setisInReadingList(true);
  const removeFromReadingList = (book) => setisInReadingList(false);

  return { isInReadingList, addToReadingList, removeFromReadingList };
}
