import { create } from "zustand";
import { Book, BookStore, BookStoreItem, LocalStore, OrderDirection } from "@/types";
import { persistData } from "@/helpers";
import { ReadingListKey } from "@/constants";

type ReadingListState = {
  books: BookStore;
  count: number;
  setBooks: (books: BookStore) => void;
  setCount: (count: number) => void;
  addBook: (book: BookStoreItem) => void;
  removeBook: (book: BookStoreItem) => void;
  changeOrder: (book: BookStoreItem, direction: OrderDirection) => void;
};

export const useReadingListStore = create<ReadingListState>(
  (set) => ({
    books: {},
    count: 0,
    setBooks: (books: BookStore) => set({ books }),
    setCount: (count: number) => set({ count }),
    addBook: (book: BookStoreItem) => {
      set((state) => {
        const list = {
          ...state.books,
          [book.ISBN]: book
        }

        const nextAvailableOrder = Object.values(list).reduce((acc, book) => {
          if (book.order > acc) {
            return book.order;
          }
          return acc + 1;
        }, -1);

        list[book.ISBN].order = nextAvailableOrder;

        const newState: LocalStore = {
          books: list,
          count: Object.keys(list).length,
        };

        persistData(ReadingListKey, newState);

        return newState;
      });

    },
    removeBook: (book: Book) => {
      set((state) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [book.ISBN]: _, ...rest } = state.books;

        const newState: LocalStore = {
          books: rest,
          count: Object.keys(rest).length,
        };
        
        Object.values(newState.books).forEach((book, index) => {
          newState.books[book.ISBN].order = index;
        });

        persistData(ReadingListKey, newState);

        return newState;
      });
    },
    changeOrder: (book: BookStoreItem, direction: OrderDirection) => {
      const { ISBN, order } = book;

      if (order === 0 && direction === OrderDirection.UP) {
        return;
      }

      const hihgestOrder = Object.values(useReadingListStore.getState().books).reduce((acc, book) => {
        if (book.order > acc) {
          return book.order;
        }
        return acc;
      }, 0);

      if (order === hihgestOrder && direction === OrderDirection.DOWN) {
        return;
      }

      const newOrder = direction === OrderDirection.UP ? order - 1 || 0 : order + 1;
      set((state) => {
        const bookInNewOrder = Object.values(state.books).find((book) => book.order === newOrder);
        
        const newState: LocalStore = {
          books: {
            ...state.books,
            [ISBN]: {
              ...state.books[ISBN],
              order: newOrder,
            },
          },
          count: state.count,
        };
        
        if (bookInNewOrder) {
          newState.books[bookInNewOrder.ISBN].order = order;
        }

        persistData(ReadingListKey, newState);

        return newState;
      });
    },
  }),
);
