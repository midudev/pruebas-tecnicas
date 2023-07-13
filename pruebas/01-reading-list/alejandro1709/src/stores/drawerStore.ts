import { create } from 'zustand';

type DrawerStore = {
  isOpen: boolean;
  oepn: () => void;
  close: () => void;
};

export const useDrawerStore = create<DrawerStore>((set) => ({
  isOpen: false,
  oepn: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
