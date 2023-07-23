import { DefaultStateUsecase, type StateUsecase } from './application/state.usecase'
import { DefaultStateInfra } from './infra/state.infra'
import { StateRepository } from './repository/state.repository'

export const stateInfra = new DefaultStateInfra()
export const stateRepository = new StateRepository(stateInfra)
export const stateUseCase: StateUsecase = new DefaultStateUsecase(stateRepository)
