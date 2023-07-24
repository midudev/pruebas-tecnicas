import { useStore } from "@/store";
import { useState, useEffect, useCallback } from "react";

const useAddOrRemoveReadingList = (ISBN) => {
  // Store
  const readingLists = useStore((state) => state.readingLists);
  const currentReadingListId = useStore((state) => state.currentReadingListId);
  const updateReadingLists = useStore((state) => state.updateReadingLists);
  //

  const addToList = useCallback(
    (readingListId) => {
      const newReadingLists = { ...readingLists };

      newReadingLists[readingListId].books.push(ISBN);

      updateReadingLists(newReadingLists);
    },
    [ISBN, readingLists, updateReadingLists]
  );

  const removeFromList = useCallback(
    (readingListId) => {
      const newReadingLists = { ...readingLists };

      const index = newReadingLists[readingListId].books.indexOf(ISBN);

      newReadingLists[readingListId].books.splice(index, 1);

      updateReadingLists(newReadingLists);
    },
    [ISBN, readingLists, updateReadingLists]
  );

  const [readingListItems, setReadingListItems] = useState([]);
  const [visibleReadingList, setVisibleReadingList] = useState(false);

  useEffect(() => {
    if (visibleReadingList) {
      const newReadingListItems = Object.entries(readingLists).map(
        ([id, readingList]) => {
          return {
            id,
            name: readingList.name,
            isAdded: readingList.books.indexOf(ISBN) >= 0,
          };
        }
      );

      setReadingListItems(newReadingListItems);
    }
  }, [visibleReadingList, readingLists, ISBN]);

  const onFocusAddButton = useCallback(() => {
    setVisibleReadingList(true);
  }, []);

  const onBlurAddButton = useCallback(() => {
    setTimeout(() => {
      setVisibleReadingList(false);
    }, 150);
  }, []);

  return {
    existsReadingLists: Object.entries(readingLists).length > 0,
    currentReadingListId,
    onFocusAddButton,
    onBlurAddButton,
    visibleReadingList,
    readingListItems,
    addToList,
    removeFromList,
  };
};
export default useAddOrRemoveReadingList;
