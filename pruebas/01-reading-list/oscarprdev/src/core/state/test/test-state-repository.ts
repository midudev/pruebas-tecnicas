import type { GlobalState } from '../../types'
import type { StatePorts } from '../application/state.ports'
import type { DefaultBooks } from '../application/state.types'
import { mockDetaultState } from './data/default-state'

export class TestStateRepository implements StatePorts {
  constructor() {}

  setDefaultState(defaultBooks: DefaultBooks): GlobalState {
    return {
      books: defaultBooks.library.map((libraryItem) => ({
        ...libraryItem.book,
        stars: 0,
        isDone: false,
      })),
      readingBooks: [],
    }
  }

  provideAppState(): GlobalState {
    return mockDetaultState
  }
}
