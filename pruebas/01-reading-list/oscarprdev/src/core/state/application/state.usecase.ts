import type { GlobalState } from '../../types'
import type { StatePorts } from './state.ports'
import type { DefaultBooks, Subscription } from './state.types'

export interface StateUsecase {
  get state(): GlobalState
  get listenersEvents(): Subscription[]
  setDefaultState(books: DefaultBooks): void
  updateState(state: Partial<GlobalState>): void
  provideAppState(): GlobalState
  subscribe(listener: Subscription): void
}

export class DefaultStateUsecase implements StateUsecase {
  private globalState: GlobalState
  protected listeners: Subscription[] = [];

  constructor(protected readonly ports: StatePorts) {}

  get state(): GlobalState {
    return this.globalState
  }

  get listenersEvents() {
    return this.listeners
  }

  setDefaultState(books: DefaultBooks) {
    const defaultState = this.ports.setDefaultState(books)

    this.updateState(defaultState)
  }

  updateState(state: Partial<GlobalState>) {
    this.globalState = { ...this.globalState, ...state }

    if (this.listeners.length) {
      this.listeners.forEach((listener) => listener(this.globalState));
    }
  }

  subscribe(listener: Subscription) {
    this.listeners.push(listener);
  }

  provideAppState(): GlobalState {
    return this.ports.provideAppState()
  }
}
