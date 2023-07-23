import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { TestReadingListRepository } from '../../test/test-reading-list-repository'
import { ReadingListUsecase, sortItems } from './reading-list.usecase'
import { TestStateRepository } from '../../../core/state/test/test-state-repository'
import { DefaultStateUsecase } from '../../../core/state/application/state.usecase'
import { mockBook01, mockBook02 } from '../../test/data/mock-book'
import { mockDefaultState } from '../../../core/state/test/data/default-state'

describe('Reading list use case', () => {
  const testRepository = new TestReadingListRepository()
  const testStateRepository = new TestStateRepository()
  const stateUsecase = new DefaultStateUsecase(testStateRepository)
  const usecase = new ReadingListUsecase(
    testStateRepository,
    testRepository,
    stateUsecase.listenersEvents
  )

  afterEach(() => {
    usecase.updateState({ books: [], readingBooks: [] })
  })

  describe('addBook method', () => {
    beforeEach(() => {
      usecase.updateState({ books: [mockBook01], readingBooks: [] })
    })

    it('successfully add book to reading list and remove book from books list', () => {
      usecase.addBook(mockBook01)

      expect(usecase.state).to.deep.equal({
        books: [],
        readingBooks: [mockBook01],
      })
    })
  })

  describe('removeBook method', () => {
    beforeEach(() => {
      usecase.updateState({ books: [], readingBooks: [mockBook01] })
    })

    it('successfully remove book from reading list and add book to books list', () => {
      usecase.removeBook(mockBook01)

      expect(usecase.state).to.deep.equal({
        books: [mockBook01],
        readingBooks: [],
      })
    })
  })

  describe('dragBook method', () => {
    beforeEach(() => {
      usecase.updateState({ books: [], readingBooks: [mockBook01, mockBook02] })
    })

    it('swap order between the first book and the second book', () => {
      usecase.dragBooks({
        start: {
          index: 0,
          book: mockBook01,
        },
        end: {
          index: 1,
          book: mockBook02,
        },
      })

      expect(usecase.state).to.deep.equal({
        books: [],
        readingBooks: [mockBook02, mockBook01],
      })
    })
  })

  describe('sortBooks method', () => {
    const MAX_VAL = sortItems[0]
    const MIN_VAL = sortItems[1]
    const COMPLETED = sortItems[2]
    const READING = sortItems[3]

    beforeEach(() => {
      usecase.updateState({ books: [], readingBooks: [mockBook01, mockBook02] })
    })

    it('sort books by ascendant values first successfully', () => {
      usecase.sortBooks(MAX_VAL)

      expect(usecase.state).to.deep.equal({
        books: [],
        readingBooks: [mockBook02, mockBook01],
      })
    })

    it('sort books by descendant values first successfully', () => {
      usecase.sortBooks(MIN_VAL)

      expect(usecase.state).to.deep.equal({
        books: [],
        readingBooks: [mockBook01, mockBook02],
      })
    })

    it('sort books by completed first successfully', () => {
      usecase.sortBooks(COMPLETED)

      expect(usecase.state).to.deep.equal({
        books: [],
        readingBooks: [mockBook02, mockBook01],
      })
    })

    it('sort books by reading first successfully', () => {
      usecase.sortBooks(READING)

      expect(usecase.state).to.deep.equal({
        books: [],
        readingBooks: [mockBook01, mockBook02],
      })
    })
  })
})
