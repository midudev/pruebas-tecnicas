import { Book } from '@/domain/models/Book';
import { IBookRepository } from '@/domain/repositories/IBookRepository';
import data from '@/mocks/books.json';

export class BookRepository implements IBookRepository {
    getBooks() {
        return data.library.map(({ book }) => book as Book);
    }
}
