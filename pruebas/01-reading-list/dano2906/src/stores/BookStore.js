import { create } from 'zustand'

export const useReadListStore = create((set,get) => ({
  read_list: [],
  add: (book) => {
    if(!get().read_list.some(instance => instance.ISBN === book.ISBN)){
      set((state)=>({
        read_list: [...state.read_list,book]
      }))
    }
  },
  remove: (isbn) => (
    set((state)=>({
      read_list: state.read_list.filter(book => book.ISBN !== isbn)
    }))
  )
})) 