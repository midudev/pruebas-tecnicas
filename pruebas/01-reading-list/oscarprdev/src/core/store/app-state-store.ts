import { writable } from 'svelte/store'
import books from '../../../../books.json'
import type { GlobalState } from '../types'
import { stateUseCase } from '../state'

export const appState = writable(stateUseCase.state, () =>
  stateUseCase.setDefaultState(books)
)

export const setAppState = (state: GlobalState) => {
  appState.set(state)
}
