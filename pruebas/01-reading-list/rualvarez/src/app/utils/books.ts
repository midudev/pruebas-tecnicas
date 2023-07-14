import * as data from 'src/assets/books.json'

export const Books = {
  getBooksData() {
    const { library } = data;
    return library;
  }
}