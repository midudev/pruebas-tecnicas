import { bookStore } from "../state/bookStore";


export const getIsBookInReadingList = (ISBN) => {

    const { readingList } = bookStore();

    return readingList.some((b) => b.book.ISBN === ISBN);
}
