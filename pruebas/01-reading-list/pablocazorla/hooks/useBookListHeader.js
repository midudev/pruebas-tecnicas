import { useState, useCallback } from "react";
import { useStore } from "@/store";

const useBookListHeader = () => {
  // Store
  const total = useStore((state) => state.total);
  const currentReadingListId = useStore((state) => state.currentReadingListId);
  const readingLists = useStore((state) => state.readingLists);
  const updateReadingLists = useStore((state) => state.updateReadingLists);
  const setCurrentReadingListId = useStore(
    (state) => state.setCurrentReadingListId
  );
  //

  const [editingName, setEditingName] = useState(false);

  const toggleEditingName = useCallback(() => {
    setEditingName((v) => !v);
  }, []);

  const changeTitle = useCallback(
    (newName) => {
      const newReadingLists = { ...readingLists };
      newReadingLists[currentReadingListId].name = newName;
      updateReadingLists(newReadingLists);

      setEditingName(false);
    },
    [currentReadingListId, readingLists, updateReadingLists]
  );

  const deleteList = useCallback(() => {
    const newReadingLists = { ...readingLists };
    delete newReadingLists[currentReadingListId];

    setCurrentReadingListId(null);

    updateReadingLists(newReadingLists);
  }, [
    currentReadingListId,
    readingLists,
    updateReadingLists,
    setCurrentReadingListId,
  ]);

  //

  return {
    isEditable: currentReadingListId !== null,
    editingName,
    toggleEditingName,
    title: currentReadingListId
      ? readingLists[currentReadingListId].name
      : "Todos los libros",
    count: currentReadingListId
      ? readingLists[currentReadingListId].books.length
      : total,
    changeTitle,
    deleteList,
  };
};

export default useBookListHeader;
