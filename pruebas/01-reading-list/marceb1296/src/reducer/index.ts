import { combineReducers } from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice";
import { bookListReducer } from "./bookListSlice";

export default combineReducers({
    themeReducer,
    bookListReducer,
})