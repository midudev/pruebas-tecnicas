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

  interface Store {
    readingList: string[],
    freeBooks: FreeBook[]
    add: BookAction
    remove: BookAction
    fillFreeBooks: StoreAction
    reset: StoreAction
  }
}
