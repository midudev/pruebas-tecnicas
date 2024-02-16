import { create } from 'zustand'
import library from '@/data/books.json'
import { Book } from '@/types/books'

type Const = {
    data: Book[]
    dataFiltered: Book[]
    refFilterPages: Book[]
    readingList: Book[]
    animate: boolean
}

type Methos = {
    filterPages: (num: number) => void
    filterGenre: (category: string) => void
    addReadingList: (book: Book) => void
    getAnimated: () => void
}

export const useStore = create<Const & Methos>((set, get) => ({
    data: library.library,
    dataFiltered: [],
    refFilterPages: [],
    readingList: [],
    animate: false,
    filterPages: (num) => {
        const list = get().data
        const filter = list.filter(book => book.pages <= num)
        set({ dataFiltered: filter })
        set({ refFilterPages: filter })
        return filter
    },
    filterGenre: (category) => {
        const refList = get().refFilterPages
        const newList = refList.filter(book => book.genre === category)
        if(category === 'todos') {
            set(state => ({ dataFiltered: state.refFilterPages }))
            return
        }
        set({ dataFiltered: newList })
    },
    addReadingList: (book) => {
        const list = get().readingList
        if(!list.find(item => item.title === book.title)){
            set(state => ({ readingList: [...state.readingList, book] }))
        }
    },
    getAnimated: () => {
        setTimeout(() => {
            set({ animate: true })
        }, 500)
        setTimeout(() => {
            set({ animate: false })
        }, 1200)
    }
}))