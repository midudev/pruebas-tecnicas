import { stateRepository } from '../../core/store/store'
import { ReadingListUsecase } from './application/reading-list.usecase'
import { DefaultReadingListInfra } from './infra/reading-list.infra'
import { ReadingListRepository } from './repository/reading-list'

const readingListInfra = new DefaultReadingListInfra()
const readingListRepository = new ReadingListRepository(readingListInfra)
export const readingListUsecase = new ReadingListUsecase(
  stateRepository,
  readingListRepository
)
