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
