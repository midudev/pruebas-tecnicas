import staticBooks from "./../data/books.json";
import additionalBooks from "./../data/newBooks.json";

export async function getBooks() {
  const mergedLibrary = staticBooks.library.concat(additionalBooks.library);
  const books = { library: mergedLibrary };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(books);
      reject(new Error('La petición falló'));
    }, 500);
  });
}