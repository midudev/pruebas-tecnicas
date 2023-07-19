import { create } from 'zustand'

interface Menu {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
}

export const useMenu = create<Menu>(set => ({
  isOpen: false,
  onClose: () => { set({ isOpen: false }) },
  onOpen: () => { set({ isOpen: true }) }
}))
