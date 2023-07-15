import { create } from 'zustand'
import { library } from '@/data/books.json'
import { Book } from '@/types/books'

type Const = {
    data: Book[]
    dataFiltered: Book[]
}

type Methos = {
    filterPages: (num: number) => void 
}

export const useStore = create<Const & Methos>((set, get) => ({
    data: library,
    dataFiltered: [],
    filterPages: (num) => {
        const list = get().data
        const filter = list.filter(book => book.pages <= num)
        set({ dataFiltered: filter })
    }
}))