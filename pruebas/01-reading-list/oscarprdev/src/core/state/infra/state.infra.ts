import { type Book, type GlobalState } from '../../types';

export interface StateInfra {
    setDefaultLibraryState(globalState: GlobalState): GlobalState
    updateBookLists(books: Book[], readingList: Book[]): GlobalState
    provideLocalStorage(): GlobalState
}

export class DefaultStateInfra implements StateInfra {
    private readonly storageName = 'state';
    
    constructor() {}

    setDefaultLibraryState(globalState: GlobalState): GlobalState {
        const currentLocalStorage = JSON.parse(localStorage.getItem(this.storageName))

        if (currentLocalStorage) {
            return currentLocalStorage
        }

        localStorage.setItem(this.storageName, JSON.stringify(globalState));

        return globalState;
    }

    updateBookLists(books: Book[], readingList: Book[]) {
        const localStorage = this.provideLocalStorage()

        localStorage.books = books
        localStorage.readingBooks = readingList

        this.updateLocalStorage(localStorage)

        return localStorage
    }

    provideLocalStorage(): GlobalState {
        const stringLocalStorageState = localStorage.getItem(this.storageName)
        return JSON.parse(stringLocalStorageState)
      }
    
    private updateLocalStorage(stateUpdated: GlobalState) {
        localStorage.setItem(this.storageName, JSON.stringify(stateUpdated))
    }
}
