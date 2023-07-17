import { Theme, type Book, type GlobalState } from '../../types';

interface DefaultBooks {
    library: { book: Book }[];
}

export interface StateInfra {
    setDefaultLibraryState(): GlobalState;
}

export class DefaultStateInfra implements StateInfra {
    private readonly localStorageState = 'state';
    constructor(private readonly defaultBook: DefaultBooks) {}

    setDefaultLibraryState(): GlobalState {
        const books = this.defaultBook.library.map((libraryItem) => ({...libraryItem.book, currentPage: 0, stars: 0}));

        const globalState: GlobalState = {
            books,
            readingBooks: [],
            theme: Theme.dark,
        };

        localStorage.setItem(this.localStorageState, JSON.stringify(globalState));

        return globalState;
    }
}
