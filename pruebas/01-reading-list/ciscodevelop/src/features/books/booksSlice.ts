import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import dummyBooks from "../../../../books.json";
import { Book, bookState } from "../../models/BooksModel";

const initialState: bookState = {
  booksList: dummyBooks,
  wishList: [],
};
const findID=(ISBN:string)=>{
  return dummyBooks.library.findIndex((item)=>item.book.ISBN==ISBN)
}

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBookWish: (state, action: PayloadAction<Book>) => {
      const bookFind = state.wishList.find(
        (book: Book) => book.ISBN === action.payload.ISBN
      );
      !bookFind && state.wishList.push(action.payload);
      const indexFind = findID(action.payload.ISBN)
       state.booksList.library[indexFind].book.wish = true
         
    },
    removeBookWishList: (state, action: PayloadAction<Book>) => {
     // if (window.confirm("¿Está seguro de que desea eliminar el libro?")) { }
        state.wishList = state.wishList.filter(
          (book: Book) => book.ISBN !== action.payload.ISBN
        );
        const indexFind = findID(action.payload.ISBN)
        state.booksList.library[indexFind].book.wish = false;
     
    },
    removeAllBooksWishList: () => {
      if (window.confirm("¿Seguro que quieres borrar todo?")) {
        return initialState;
      }
    },
  },
});

export const { addBookWish, removeBookWishList, removeAllBooksWishList } =
  bookSlice.actions;

export const selectBooksList = (state: RootState) => state.books.booksList;
export const selectBooksWishList = (state: RootState) => state.books.wishList;

export default bookSlice.reducer;
