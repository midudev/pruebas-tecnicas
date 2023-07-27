import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBookList } from "../interfaces";


const initialState: IBookList = JSON.parse(localStorage.getItem("book_list") ?? `{
    "isOpen": false,
    "list": []
}`);

const bookListSlice = createSlice({
    name: 'bookList',
    initialState,
    reducers: {
        setBookList(state, action: PayloadAction<string | null>) {
            if (action.payload) {
                state = JSON.parse(action.payload)
                return state
            }
        },
        openBookList(state) {
            state.isOpen = !state.isOpen
            localStorage.setItem("book_list", JSON.stringify(state))
        },
        addBookList(state, action: PayloadAction<string>) {
            state.list.push(action.payload)
            localStorage.setItem("book_list", JSON.stringify(state))
        },
        removeBookList(state, action: PayloadAction<string>) {
            state.list = state.list.filter(el => el !== action.payload)
            localStorage.setItem("book_list", JSON.stringify(state))
            
        }
    },
})

export const { addBookList, removeBookList, openBookList, setBookList } = bookListSlice.actions;
export const { reducer: bookListReducer } = bookListSlice;