import books from '../mockdata/books.json';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { shared } from 'use-broadcast-ts';

const allBooks = books.library.map((item) => item.book);

export const useBooks = create(
  shared(
    persist(
      (set) => ({
        originalBooks: allBooks,
        books: allBooks,
        readinglist: [],
        filter: 'all',
        filteredBooks: allBooks,
        pagesfilter: 100,
        genres: [...new Set(allBooks.map((item) => item.genre))],
        inc: () => set((state) => ({ count: state.count + 1 })),
        addToReadingList: (book) => {
          set((state) => ({
            readinglist: [...state.readinglist, book],
            books: state.books.filter((item) => item.ISBN !== book.ISBN)
          }));
        },
        removeFromReadingList: (book) =>
          set((state) => ({
            readinglist: state.readinglist.filter(
              (item) => item.ISBN !== book.ISBN
            ),
            books: [...state.books, book]
          })),
        filterBooks: (filter) => {
          if (filter === 'all') {
            set((state) => ({
              books: state.originalBooks,
              filter: 'all'
            }));
          } else {
            set((state) => ({
              books: state.originalBooks.filter(
                (item) => item.genre === filter
              ),
              filter: filter
            }));
          }
        },
        filterByPages: (pages) => {
          set((state) => ({
            books: state.originalBooks.filter((item) => item.pages >= pages),
            pagesFilter: pages
          }));
        }
      }),
      {
        name: 'bookworm-storage'
      }
    ),
    { name: 'bookworm-store' }
  )
);
