import { writable } from 'svelte/store'
import books from '../../../../books.json'
import { DefaultStateInfra } from '../state/infra/state.infra'
import { StateRepository } from '../state/repository/state.repository'
import { StateUsecase } from '../state/application/state.usecase'

const stateInfra = new DefaultStateInfra()
export const stateRepository = new StateRepository(stateInfra)
const stateUseCase = new StateUsecase(stateRepository)

export const appState = writable(stateUseCase.state, () =>
  stateUseCase.setDefaultState(books)
)
