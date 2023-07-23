import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { TestStateRepository } from '../../../core/state/test/test-state-repository'
import { DefaultStateUsecase } from '../../../core/state/application/state.usecase'
import { mockBook01, mockBook02 } from '../../test/data/mock-book'
import { ReadingListItemUsecase } from './reading-list-item.usecase'
import { TestReadingListItemRepository } from '../../test/test-reading-list-item-repository'

describe('Reading list use case', () => {
  const testRepository = new TestReadingListItemRepository()
  const testStateRepository = new TestStateRepository()
  const stateUsecase = new DefaultStateUsecase(testStateRepository)
  const usecase = new ReadingListItemUsecase(
    testStateRepository,
    testRepository,
    stateUsecase.listenersEvents
  )

  afterEach(() => {
    usecase.updateState({ books: [], readingBooks: [] })
  })

  describe('setStars method', () => {
    beforeEach(() => {
      usecase.updateState({ books: [], readingBooks: [mockBook01, mockBook02] })
    })

    it('successfully update stars to book', () => {
      const stars = 2

      usecase.setStars(stars, mockBook01)

      const book = usecase.state.readingBooks.find(
        (book) => book.ISBN === mockBook01.ISBN
      )
      expect(book.stars).toBe(stars)
    })
  })

  describe('toggleBookIsDone method', () => {
    beforeEach(() => {
      usecase.updateState({ books: [], readingBooks: [mockBook01, mockBook02] })
    })

    it('successfully update isDone property to true', () => {
      let isDone = true

      usecase.toggleBookIsDone(mockBook01, isDone)

      let book = usecase.state.readingBooks.find(
        (book) => book.ISBN === mockBook01.ISBN
      )
      expect(book.isDone).toBe(isDone)
    })

    it('successfully update isDone property to false', () => {
      let isDone = false

      usecase.toggleBookIsDone(mockBook01, isDone)

      let book = usecase.state.readingBooks.find(
        (book) => book.ISBN === mockBook01.ISBN
      )
      expect(book.isDone).toBe(isDone)
    })
  })
})
