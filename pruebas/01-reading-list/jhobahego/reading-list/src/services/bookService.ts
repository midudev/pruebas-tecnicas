import { LibraryData, Book } from '../types';
import data from './books.json';

const datos: LibraryData[] = data.library;

export function getAllBooks(): Book[] {
  return datos.map(libraryData => libraryData.book);
}
