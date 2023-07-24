import { BookProps, BookSliceProps } from "@/interfaces/Book.interface";
import { createSlice } from "@reduxjs/toolkit";
// ↓↓ ESTO SERA TEMPORAL HASTA IMPLEMENTAR BACKEND ↓↓
import library from "@/utils/json/books.json";

const initialState: BookSliceProps = {
  error: null,
  oneBook: null,
  filter: { gender: "all", pages: 0, title: "" },
  booksAvailable: library,
  booksToRead: [],
};

const slice = createSlice({
  name: "books",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },
    // Q U E R Y S
    getOneBookByISBN: (
      state: BookSliceProps,
      action: { payload: { ISBN: string } }
    ) => {
      state.booksAvailable.map((item: BookProps) => {
        if (item.book.ISBN === action.payload.ISBN) {
          state.oneBook = item;
        }
      });
    },
    // M U T A T I O N S
    addBookToRead: (state: BookSliceProps, action: { payload: BookProps }) => {
      // SE BUSCA DATOS DE LIBRO Y SE AGREGA A LIBROS POR LEER
      const bookSearch = state.booksAvailable.find(
        (item: BookProps) => item.book.ISBN === action.payload.book.ISBN
      );
      if (bookSearch) {
        state.booksToRead.push({
          ...action.payload,
          priority: 1,
          starts: [true, false, false],
        });
      }

      // SE FILTRA POR EL IDENTIFICADOR UNICO DEL LIBRO DADO PARA BORRARLO DE DISPONIBLES
      const newStateBooksAvailables = state.booksAvailable.filter(
        (item: BookProps) => item.book.ISBN !== action.payload.book.ISBN
      );
      state.booksAvailable = newStateBooksAvailables;
    },
    removeBookFromRead: (
      state: BookSliceProps,
      action: { payload: BookProps }
    ) => {
      // SE FILTRA POR EL IDENTIFICADOR UNICO DEL LIBRO DADO, PARA BORRARLO DE LIBROS POR LEER
      const newStateBooksAvailables = state.booksToRead.filter(
        (item: BookProps) => item.book.ISBN !== action.payload.book.ISBN
      );
      state.booksToRead = newStateBooksAvailables;

      // SE RESTABLECE LISTA DE DISPONIBLES
      const filterLibrary = library.filter((item: BookProps) => {
        const findBook = state.booksToRead.find(
          (item2: BookProps) => item2.book.ISBN === item.book.ISBN
        );
        if (!findBook) return item;
      });
      if (filterLibrary) {
        state.filter.gender = "all";
        state.filter.pages = 0;
        state.filter.title = "";
        state.booksAvailable = filterLibrary;
      }
    },
    searchBooksFilterByGender: (
      state: BookSliceProps,
      action: { payload: string }
    ) => {
      if (action.payload === "all") {
        const filterLibrary = library.filter((item: BookProps) => {
          const findBook = state.booksToRead.find(
            (item2: BookProps) => item2.book.ISBN === item.book.ISBN
          );
          if (!findBook) return item;
        });
        state.filter.title = "";
        state.filter.pages = 0;
        state.filter.gender = action.payload;
        state.booksAvailable = filterLibrary;
      } else {
        const filterResult = library.filter((item: BookProps) => {
          const findBook = state.booksToRead.find(
            (item2: BookProps) => item2.book.ISBN === item.book.ISBN
          );
          if (!findBook && item.book.genre === action.payload) return item;
        });
        state.filter.title = "";
        state.filter.pages = 0;
        state.filter.gender = action.payload;
        state.booksAvailable = filterResult;
      }
    },
    searchBooksFilterByPages: (
      state: BookSliceProps,
      action: { payload: number }
    ) => {
      if (action.payload === 0) {
        const filterLibrary = library.filter((item: BookProps) => {
          const findBook = state.booksToRead.find(
            (item2: BookProps) => item2.book.ISBN === item.book.ISBN
          );
          if (!findBook) return item;
        });
        state.filter.title = "";
        state.filter.gender = "all";
        state.filter.pages = action.payload;
        state.booksAvailable = filterLibrary;
      } else {
        const filterResult = library.filter((item: BookProps) => {
          const findBook = state.booksToRead.find(
            (item2: BookProps) => item2.book.ISBN === item.book.ISBN
          );
          if (!findBook && item.book.pages === action.payload) return item;
        });
        state.filter.title = "";
        state.filter.gender = "all";
        state.filter.pages = action.payload;
        state.booksAvailable = filterResult;
      }
    },
    searchBooksFilterByTitle: (
      state: BookSliceProps,
      action: { payload: string }
    ) => {
      if (action.payload === "") {
        const filterLibrary = library.filter((item: BookProps) => {
          const findBook = state.booksToRead.find(
            (item2: BookProps) => item2.book.ISBN === item.book.ISBN
          );
          if (!findBook) return item;
        });
        state.filter.gender = "all";
        state.filter.pages = 0;
        state.filter.title = action.payload;
        state.booksAvailable = filterLibrary;
      } else {
        const filterResult = library.filter((item: BookProps) => {
          const findBook = state.booksToRead.find(
            (item2: BookProps) => item2.book.ISBN === item.book.ISBN
          );
          if (
            !findBook &&
            item.book.title.toLocaleLowerCase() === action.payload
          )
            return item;
        });
        state.filter.gender = "all";
        state.filter.pages = 0;
        state.filter.title = action.payload;
        state.booksAvailable = filterResult;
      }
    },
    changePriorityBookToRead: (
      state: BookSliceProps,
      action: { payload: { book: BookProps; index: number } }
    ) => {
      const findBook = state.booksToRead.find(
        (item: BookProps) => item.book.ISBN === action.payload.book.book.ISBN
      );
      switch (action.payload.index) {
        case (action.payload.index = 0):
          findBook!.priority = 1;
          findBook!.starts = [true, false, false];
          break;
        case (action.payload.index = 1):
          findBook!.priority = 2;
          findBook!.starts = [true, true, false];
          break;
        case (action.payload.index = 2):
          findBook!.priority = 3;
          findBook!.starts = [true, true, true];
          break;
        default:
          break;
      }
    },
    sortBooksToReadByPriority: (
      state: BookSliceProps,
      action: { payload: { sort: string } }
    ) => {
      switch (action.payload.sort) {
        case "asc":
          state.booksToRead.sort((a: any, b: any) => {
            if (a.priority < b.priority) {
              return -1;
            }
            if (a.priority > b.priority) {
              return 1;
            }
            return 0;
          });
          break;
        case "des":
          state.booksToRead.sort((a: any, b: any) => {
            if (a.priority < b.priority) {
              return 1;
            }
            if (a.priority > b.priority) {
              return -1;
            }
            return 0;
          });
          break;
        default:
          break;
      }
    },
  },
});

export const {
  getOneBookByISBN,
  addBookToRead,
  removeBookFromRead,
  searchBooksFilterByGender,
  searchBooksFilterByPages,
  searchBooksFilterByTitle,
  changePriorityBookToRead,
  sortBooksToReadByPriority,
} = slice.actions;
export default slice.reducer;
