export type AuthorType = {
    name: string;
    otherBooks: string[];
}

export type BookType = {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: AuthorType;
}

export type LibraryType = {
    book: BookType;
}

export type ReadingListContextType = {
    state: BookType[],
    show: boolean,
    updateShow: (newState?: boolean) => void,
    addToList: (book: BookType) => void,
    removeFromList: (book: BookType) => void,
    clearList: () => void
    isInList: (book: BookType) => boolean
}

export type FiltersType = {
    genre: 'all' | 'Fantasía' | 'Ciencia ficción' | 'Zombies' | 'Terror'
}
