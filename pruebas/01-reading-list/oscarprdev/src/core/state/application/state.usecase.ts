import { appState } from '../../store/app-state-store'
import type { GlobalState } from '../../types'
import type { StatePorts } from './state.ports'
import type { DefaultBooks } from './state.types'

export class StateUsecase {
  private globalState: GlobalState

  constructor(private readonly ports: StatePorts) {}

  setDefaultState(books: DefaultBooks) {
    const defaultState = this.ports.setDefaultState(books)

    this.updateState(defaultState)
  }

  get state(): GlobalState {
    return this.globalState
  }

  updateState(state: Partial<GlobalState>) {
    this.globalState = { ...this.globalState, ...state }

    // Svelte entry point
    appState.set(this.globalState)
  }
}
