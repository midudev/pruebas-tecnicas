import React from 'react'
import { renderHook, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useSearch } from './useSearch'
import { MemoryRouter } from 'react-router-dom'

const wrapper = ({ children }: { children: React.ReactElement }) => {
  return (
    <MemoryRouter>
      {children}
    </MemoryRouter>
  )
}

describe('useSearch hook', () => {
  it('Render hook correctly', () => {
    const { result } = renderHook(() => useSearch(), { wrapper })

    const { isEmpty, navigateItemsResult } = result.current
    expect(isEmpty).toBeFalsy()

    const formData = new FormData()

    act(() => {
      navigateItemsResult({ formData })
    })
  })

  it('Parameter of search is a value valid', () => {
    const { result } = renderHook(() => useSearch(), { wrapper })

    const { isEmpty, navigateItemsResult } = result.current

    expect(isEmpty).toBeFalsy()

    const formData = new FormData()
    formData.append('search', 'lap')

    act(() => {
      navigateItemsResult({ formData })
    })
    expect(isEmpty).toBeFalsy()
  })
})
