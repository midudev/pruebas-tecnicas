import { writable } from 'svelte/store'

export const actionsStore = writable({
  readingListItemAdded: false,
  readingListItemRemoved: false,
})
