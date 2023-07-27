export default class Author {
  name: string;
  otherBooks: string[];

  constructor(name: string, otherBooks: string[]) {
    this.name = name;
    this.otherBooks = otherBooks;
  }
}
