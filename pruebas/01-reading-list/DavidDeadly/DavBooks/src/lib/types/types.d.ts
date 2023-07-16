interface BooksResponse {
  library: Library[];
}

interface Library {
  book: IBook;
}

interface IBook {
  title:    string;
  pages:    number;
  genre:    string;
  cover:    string;
  synopsis: string;
  year:     number;
  ISBN:     string;
  author:   Author;
}

interface FreeBook extends IBook {
  free?: boolean;
}

interface Author {
  name:       string;
  otherBooks: string[];
}

declare namespace IBooks {
  type BookAction = (id: string) => void;
  type StoreAction = () => void;
  type FilterAction = (filters: Filters) => void;

  type Filters = {
    genre?: string;
    pages?: number;
  }
  
  interface Store {
    readingList: string[];
    freeBooks: FreeBook[];
    books: IBook[];
    filters: Filters | null;
    add: BookAction;
    remove: BookAction;
    fillFreeBooks: StoreAction;
    filterBooks: FilterAction;
    reset: StoreAction;
  }

  interface NextStore extends Store {
    maxPages: number;
    minPages: number;
    booksGenres: string[];
    numFreeBooks: number;
  }
}
