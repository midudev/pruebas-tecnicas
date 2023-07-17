import { create } from 'zustand'
import { persist } from "zustand/middleware";

export const useReadListStore = create(persist(
  (set,get) => ({
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
    ),
    loadStorage:(list) => {
      set(()=>({
        read_list: list
      }))
    }
  }),{
    name:'read_list'
  }
)) 