import { Books, Book } from "../interfaces/Book";
import { SyncTabs, SyncTabsBooks } from "../interfaces/SyncTabs";

export const syncTabs = (callback: SyncTabs) => {
    window.addEventListener('storage', (event) => {
        const newData: SyncTabsBooks = {};

        if (event.key === 'books') {
            newData.books = JSON.parse(event.newValue || "{ library: [] }") as Books;
        }

        if (event.key === 'toReadBooks') {
            newData.toReadBooks = JSON.parse(event.newValue || "[]") as Book[];
        }

        callback(newData);
    })
}
