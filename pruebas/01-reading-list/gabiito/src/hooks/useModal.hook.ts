import { Book } from "@/types";
import { create } from "zustand";

type ModalState = {
  isOpen: boolean;
  book: Book | null;
  onOpen: (book: Book) => void;
  onClose: () => void;
};

export const useModalState = create<ModalState>(
  (set) => ({
    isOpen: false,
    book: null,
    onOpen: (book) => set({ isOpen: true, book }),
    onClose: () => set({ isOpen: false }),
  })
);
