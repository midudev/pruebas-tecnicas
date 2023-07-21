import { writable, type Writable } from 'svelte/store'
import { getContext, setContext } from 'svelte'
import type { Book } from 'lib/types/Book'

type Context = Writable<Book[]>

export const keyBooks = "book-wish-list"

export function setBookwishList() {
    let bookWishList:Book[] = [];
    let bookWishListWritable = writable<Book[]>(bookWishList)
	setContext(keyBooks, bookWishListWritable);
}

export function getBookWishList() {
	return getContext<Context>(keyBooks)
}