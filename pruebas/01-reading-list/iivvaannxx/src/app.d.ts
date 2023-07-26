import 'unplugin-icons/types/svelte'
import type { Item, DndEvent } from 'svelte-dnd-action'

declare global {

  namespace App {

    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

  namespace svelteHTML {

    interface HTMLAttributes<T> {

      // Custom events for the svelte-dnd-action
      'on:consider'?: (event: CustomEvent<DndEvent<Item>> & { target: EventTarget & T }) => void
      'on:finalize'?: (event: CustomEvent<DndEvent<Item>> & { target: EventTarget & T }) => void
    }
  }
}

// Types that are widely used in the entire app.
declare global {

  /** @brief Defines all the fields of the data contained in the 'books.json'. */
  interface Book {

    title: string
    pages: number
    genre: string

    cover: string
    synopsis: string

    year: number
    ISBN: string

    author: Author
  }

  interface Author {

    name: string
    otherBooks: string[]
  }

  // We declare a book array type to easily use it in the entire app.
  interface BookArray extends Array<Book> { }
}

export {}
