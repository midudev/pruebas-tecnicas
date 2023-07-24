import { useStore } from "@/store";
import { useCallback } from "react";

const useTabs = () => {
  // Store
  const readingLists = useStore((state) => state.readingLists);
  const currentReadingListId = useStore((state) => state.currentReadingListId);
  const setCurrentReadingListId = useStore(
    (state) => state.setCurrentReadingListId
  );
  const updateReadingLists = useStore((state) => state.updateReadingLists);
  const total = useStore((state) => state.total);
  //

  const createList = useCallback(() => {
    const id = `list-${new Date().valueOf()}`;
    const name = `Mi lista de lectura ${
      Object.entries(readingLists).length + 1
    }`;

    updateReadingLists({
      ...readingLists,
      [id]: { name, books: [] },
    });

    setCurrentReadingListId(id);
  }, [readingLists, updateReadingLists, setCurrentReadingListId]);

  return {
    readingLists,
    currentReadingListId,
    setCurrentReadingListId,
    createList,
    total,
  };
};

export default useTabs;
