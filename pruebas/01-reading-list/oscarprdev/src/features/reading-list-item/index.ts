import { stateInfra, stateRepository, stateUseCase } from '../../core/state'
import { ReadingListItemUsecase } from './application/reading-list-item.usecase'
import { ReadingListItemRepository } from './repository/reading-list-item.repository'

const readingListItemRepository = new ReadingListItemRepository(stateInfra)
export const readingListItemUsecase = new ReadingListItemUsecase(
  stateRepository,
  readingListItemRepository,
  stateUseCase.listenersEvents
)
