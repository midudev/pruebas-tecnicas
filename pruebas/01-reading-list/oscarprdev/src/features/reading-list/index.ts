import { stateInfra, stateRepository } from '../../core/store/app-state-store'
import { ReadingListUsecase } from './application/reading-list.usecase'
import { ReadingListRepository } from './repository/reading-list'

const readingListRepository = new ReadingListRepository(stateInfra)
export const readingListUsecase = new ReadingListUsecase(
  stateRepository,
  readingListRepository
)
