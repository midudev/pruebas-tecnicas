import { Book } from '@/domain/models/Book';

export interface IBookRepository {
    getBooks: () => Book[];
}
