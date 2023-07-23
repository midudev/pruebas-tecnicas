import { describe, expect, it, vi, type SpyInstance, beforeEach } from 'vitest'
import { DefaultStateUsecase } from './state.usecase'
import mockBooks from '../test/data/mock-books.json'
import { TestStateRepository } from '../test/test-state-repository'
import { mockDetaultState } from '../test/data/default-state'

describe('State use case', () => {
  const testStateRepository = new TestStateRepository()
  const usecase = new DefaultStateUsecase(testStateRepository)

  let setDefaultStateSpy: SpyInstance
  let updateStateSpy: SpyInstance

  beforeEach(() => {
    setDefaultStateSpy = vi.spyOn(usecase, 'setDefaultState')
    updateStateSpy = vi.spyOn(usecase, 'updateState')
  })

  describe('setDefaultState', () => {
    it('it succesfully updates the use case state', () => {
      usecase.setDefaultState(mockBooks);

      expect(usecase.state).to.deep.equal(mockDetaultState);
    })
  }) 
})
