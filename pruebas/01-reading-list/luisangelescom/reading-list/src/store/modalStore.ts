import { create } from 'zustand'

interface ModalInterface {
  open: boolean
  setModal: () => void
}

export const useStoreModal = create<ModalInterface>((set) => ({
  open: false,
  setModal: () => set((state) => ({ open: !state.open }))
}))
