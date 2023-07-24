import { create } from "zustand";
import { persist } from "zustand/middleware";
import { shared } from "use-broadcast-ts";
import { STORE_DEFAULT, STORAGE_NAME } from "@/config";

export const useStore = create(
  shared(
    persist(
      (set) => ({
        ...STORE_DEFAULT,
        updateFilters: (newFilters) =>
          set((state) => ({ filters: { ...state.filters, ...newFilters } })),
        updateTotal: (newTotal) => set({ total: newTotal }),
        updateReadingLists: (newReadingLists) =>
          set({ readingLists: newReadingLists }),
        setCurrentReadingListId: (newCurrentReadingListId) =>
          set({ currentReadingListId: newCurrentReadingListId }),
      }),
      {
        name: STORAGE_NAME,
      }
    ),
    { name: STORAGE_NAME + "_broadcast" }
  )
);
