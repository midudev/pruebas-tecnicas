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

      'on:consider'?: (event: CustomEvent<DndEvent<Item>> & { target: EventTarget & T }) => void
      'on:finalize'?: (event: CustomEvent<DndEvent<Item>> & { target: EventTarget & T }) => void
    }
  }
}

export {}
