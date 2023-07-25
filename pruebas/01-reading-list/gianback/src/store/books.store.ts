import { writable } from "svelte/store";
import { library } from "../../../books.json";
import type { Book } from "../models/book.model";

const favoriteBookList: Book[] = JSON.parse(localStorage.getItem('favorites'))
const titleFavorites :string[] = favoriteBookList.map(({title}) => title )

const currentBooksToShow = library.filter(({book}) => !titleFavorites.includes(book.title))

export const bookList = writable(currentBooksToShow)
