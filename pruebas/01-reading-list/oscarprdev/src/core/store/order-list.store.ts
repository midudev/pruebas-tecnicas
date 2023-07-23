import { writable, type Writable } from 'svelte/store'
import type { OrderList } from '../../features/reading-list/application/reading-list.types'

export const orderList: Writable<OrderList> = writable({
  start: {
    index: 0,
    book: null,
  },
  end: {
    index: 0,
    book: null,
  },
})
