import type { Book } from '../../types'

export interface DefaultBooks {
  library: { book: Book }[]
}

export type Subscription = (state: GlobalState) => void
