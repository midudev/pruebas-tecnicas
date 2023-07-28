import fetchMock from 'jest-fetch-mock';
import { getAllBooks } from "../src/store/slices/books";
import { bookData } from './bookData';

beforeAll(() => {
    fetchMock.enableMocks(); // Enable fetch mocking
});


describe('Test on Redux Thunk', () => { 
    test('The books array should equal to 13', async() => {

        fetchMock.mockResponseOnce(bookData);

        const books = await getAllBooks();

        expect(books.length).toEqual(13);
    })
 })