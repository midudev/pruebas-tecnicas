import { getBooks, getFilters } from "@/mock/books";

const timeout = 1;

const BookService = {
  getBooklist: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: getBooks() });
        // reject({message: 'Error'});
      }, timeout);
    });
  },
  getFiltersOptions: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: getFilters(),
        });
      }, timeout);
    });
  },
};

export default BookService;
