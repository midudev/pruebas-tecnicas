import { createStore } from 'zustand';
import { persist, subscribeWithSelector, devtools } from 'zustand/middleware';
import { Book } from '@/domain/models/Book';
import { SearchParams } from '@/domain/models/SearchParams';
import { BookService } from '@/domain/services/BookService';
import { BookRepository } from '@/infrastructure/repositories/BookRepository';

export interface GlobalStoreProps {
    bookService: BookService;
}

export interface GlobalStoreState extends GlobalStoreProps {
    avaibleBooks: Book[];
    booksToRead: Book[];
    searchParams: SearchParams;
    addBookToRead: (book: Book) => void;
    removeBookFromRead: (book: Book) => void;
    setSearchParams: (params: SearchParams) => void;
}
export type GlobalStore = ReturnType<typeof createGlobalStore>;

export const createGlobalStore = (initProps?: Partial<GlobalStoreProps>) => {
    const DEFAULT_PROPS: GlobalStoreProps = {
        bookService: new BookService(new BookRepository())
    };
    const bookService = initProps?.bookService ?? DEFAULT_PROPS.bookService;
    const allBooks = bookService.getAllBooks();

    return createStore<GlobalStoreState>()(
        devtools(
            persist(
                subscribeWithSelector(set => ({
                    ...DEFAULT_PROPS,
                    ...initProps,
                    avaibleBooks: allBooks,
                    booksToRead: [] as Book[],
                    searchParams: { title: '', genres: [], maxPages: 1200 } as SearchParams,
                    addBookToRead: (book: Book) => {
                        set(state => ({
                            avaibleBooks: [...state.avaibleBooks.filter(b => b.ISBN !== book.ISBN)],
                            booksToRead: [...state.booksToRead, book]
                        }));
                    },
                    removeBookFromRead: (book: Book) => {
                        set(state => ({
                            avaibleBooks: [...state.avaibleBooks, book],
                            booksToRead: state.booksToRead.filter(b => b.ISBN !== book.ISBN)
                        }));
                    },
                    setSearchParams: (params: SearchParams) => set({ searchParams: params })
                })),
                {
                    name: 'globalStore',
                    partialize: state => ({ avaibleBooks: state.avaibleBooks, booksToRead: state.booksToRead })
                }
            )
        )
    );
};
