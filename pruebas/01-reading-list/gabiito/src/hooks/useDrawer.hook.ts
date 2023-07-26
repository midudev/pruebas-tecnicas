import { create} from "zustand";

type DrawerState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useDrawerState = create<DrawerState>(
  (set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  })
);
