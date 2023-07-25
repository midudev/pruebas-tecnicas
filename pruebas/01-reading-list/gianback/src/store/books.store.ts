import { writable } from "svelte/store";
import { library } from "../../../books.json";

export let bookList = writable(library);
// const createBookStore = () => {
//   const { set, subscribe } = writable(library);

//   return {
//     subscribe,
//     filterBooks: (genreSelected: string) => {
//       if (genreSelected.trim() !== "") {
//         const booksFiltered = library.filter(
//           ({ book }) => book.genre !== genreSelected
//         );
//         set(booksFiltered);
//       } else {
//         set(library);
//       }
//     },
//   };
// };

// export const bookStore = createBookStore();

// export const filteredBooks = derived(bookStore, (_$bookStore) => {
//   return bookStore.filterBooks(get(filter));
// });
