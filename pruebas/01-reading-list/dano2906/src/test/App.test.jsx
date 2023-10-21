/* eslint-disable no-undef */
import { render, renderHook } from '@testing-library/react'
import App from '../App'
import { expect, test } from 'vitest'
import { useBooks } from '../hooks/useBooks'

describe('App', () => {
  test('Should render the app', async () => {
    render(<App />)
  })
  test('Should retrieve the data in useBook', async () => {
    const { result } = renderHook(() => useBooks())
    expect(result.current.books).toEqual([])
  })
})
