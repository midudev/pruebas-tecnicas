import { createSlice } from '@reduxjs/toolkit'
import { ETheme } from "../interfaces";

const initialState = localStorage.getItem("theme") ?? ETheme.LIGHT

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state) {
            state = state === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT
            localStorage.setItem("theme", state)
            return state
        },
    },
})

export const { setTheme } = themeSlice.actions;
export const { reducer: themeReducer } = themeSlice;