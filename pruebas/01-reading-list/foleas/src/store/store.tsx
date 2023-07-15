import { create } from "zustand";
import { Store } from "./storeTypes";

export const useStore = create<Store>((set) => ({
  perPage: 4,
  page: 1,
  changePage: (newPage: number) => set(() => ({ page: newPage })),
}));
