import type { GlobalState } from '../../types'
import type { DefaultBooks } from './state.types'

export interface StatePorts {
  setDefaultState(books: DefaultBooks): GlobalState
  provideAppState(): GlobalState
}
