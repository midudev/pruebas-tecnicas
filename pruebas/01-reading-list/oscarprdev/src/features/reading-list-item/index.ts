import { stateInfra, stateRepository } from '../../core/store/app-state-store'
import { ReadingListItemUsecase } from './application/rading-list-item.usecase'
import { ReadingListItemRepository } from './repository/reading-list-item.repository'

const readingListItemRepository = new ReadingListItemRepository(stateInfra)
export const readingListItemUsecase = new ReadingListItemUsecase(
  stateRepository,
  readingListItemRepository
)
