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

interface Author {
  name:       string;
  otherBooks: string[];
}

declare namespace IBooks {
  type BookAction = (id: string) => void;
  type StoreAction = () => void;
  type FilterAction = (filters?: Filters) => void;

  type Filters = {
    genre: string;
    maxPages: number;
  };
  
  interface Store {
    readingList: string[];
    books: IBook[];
    getBooks: StoreAction;
    add: BookAction;
    remove: BookAction;
    reset: StoreAction;
  }

  interface NextStore extends Store {
    max: number;
    min: number;
    genres: string[];
    getNumAvaileblesBooks: (filteredBooks: IBook[]) => number;
  }
}
