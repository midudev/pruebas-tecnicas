import { Book, Books } from "./Book";

export interface SyncTabsBooks {
    books?: Books;
    toReadBooks?: Book[];
}

export interface SyncTabs {
    (data: SyncTabsBooks): void;
}