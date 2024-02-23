import data from './books.json';
import { Data } from './Interfaces';

export default function getBooks() {
  const { library } = (data as Data);

  return library.map(({ book }, idx) => ({ book, id: idx }));
}
