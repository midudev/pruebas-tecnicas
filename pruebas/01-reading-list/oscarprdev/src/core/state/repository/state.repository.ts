import type { GlobalState } from '../../types'
import type { StatePorts } from '../application/state.ports'
import type { DefaultBooks } from '../application/state.types'
import type { StateInfra } from '../infra/state.infra'

export class StateRepository implements StatePorts {
  constructor(private readonly stateInfra: StateInfra) {}

  setDefaultState(defaultBooks: DefaultBooks): GlobalState {
    const books = defaultBooks.library.map((libraryItem) => ({
      ...libraryItem.book,
      stars: 0,
      completed: false,
    }))

    const globalState: GlobalState = {
      books,
      readingBooks: [],
    }

    return this.stateInfra.setDefaultLibraryState(globalState)
  }

  provideAppState(): GlobalState {
    return this.stateInfra.provideLocalStorage()
  }
}
