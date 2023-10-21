import { expect, test, describe } from 'vitest'
import { render, renderHook, screen } from '@testing-library/react'
import { useBooks } from '../hooks/useBooks'
import FiltersForm from '../components/FiltersForm'

describe('FilterForm Component', () => {
  test('Should render the component', () => {
    render(<FiltersForm />)
  })
  test('Should render the component with props', () => {
    const { result } = renderHook(() => useBooks())
    render(<FiltersForm setFilterGenre={result.current.setFilterGenre} setFilterPages={result.current.setFilterPages} />)
  })
  test('Input select should be rendered', () => {
    const { result } = renderHook(() => useBooks())
    render(<FiltersForm setFilterGenre={result.current.setFilterGenre} setFilterPages={result.current.setFilterPages} />)
    const select = screen.getByRole('combobox')
    expect(select).toBeDefined()
  })
})
