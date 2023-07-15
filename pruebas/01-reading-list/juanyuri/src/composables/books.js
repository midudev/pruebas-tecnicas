// books.js
import { ref } from 'vue';
import catalogue from '@/data/books.json'

/* 
 * @params {Object} catalogue - Raw data from JSON file
 * @returns {Object} An object containing { books } reactive ref
*/
export function useBooks() {
  /* Obtain raw data from Catalogue */
  let booksRaw = catalogue['library']

  /* Use of Map to return only the book object inside */
  booksRaw = booksRaw.map( book => book.book)

  /* Reactive reference to watch for changes in data */
  const books = ref( booksRaw );

  return { books }
}