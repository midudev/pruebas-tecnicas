import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBookList } from "../interfaces";


const initialState: IBookList = JSON.parse(localStorage.getItem("book_list") ?? `{
    "isOpen": false,
    "list": []
}`);
console.log(initialState)

const bookListSlice = createSlice({
    name: 'bookList',
    initialState,
    reducers: {
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

export const { addBookList, removeBookList, openBookList } = bookListSlice.actions;
export const { reducer: bookListReducer } = bookListSlice;