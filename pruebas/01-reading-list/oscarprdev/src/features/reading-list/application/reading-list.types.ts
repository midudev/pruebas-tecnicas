import type { Book } from '../../../core/types'

export interface OrderList {
  start: {
    index: number
    book: Book
  }
  end: {
    index: number
    book: Book
  }
}
