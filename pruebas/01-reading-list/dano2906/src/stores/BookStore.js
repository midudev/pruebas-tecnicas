import { create } from 'zustand'

export const useBooksStore = create((set) => ({
  books: []
}))