import { writable, type Writable } from 'svelte/store'
import { getContext, setContext } from 'svelte'
import type { Book } from 'lib/types/Book'

type Context = Writable<Book[]>

export const keyBooks = "book-wish-list"

export function setBookwishList() {
    console.log("SetBookwishlist")
    let bookWishList:Book[] = [];
    let bookWishListWritable = writable<Book[]>(bookWishList)
    // if(localStorage.getItem(keyBooks)){
    //     const booksStored = JSON.parse(localStorage.getItem(keyBooks) || "");
    //     bookWishList = booksStored;
    //     bookWishListWritable = writable<Book[]>(booksStored);
    // }
	setContext(keyBooks, bookWishListWritable);
    // localStorage.setItem(keyBooks, JSON.stringify(bookWishList));
}

export function getBookWishList() {
	return getContext<Context>(keyBooks)
}