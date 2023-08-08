import booksJson from '../constant/books.json';
import { BookInterface } from '../types';

const getBookList = () => {
  return new Promise((resolve, reject) => {
    const objLibrary = booksJson
    const bookList: BookInterface[] = objLibrary?.library ? objLibrary?.library.map((itemBook) => itemBook.book) : []

    if(!bookList) {
      reject('Error')
    }

    resolve(bookList)
  })
}


export { getBookList };