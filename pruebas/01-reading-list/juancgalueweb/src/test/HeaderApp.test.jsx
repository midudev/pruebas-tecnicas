import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { HeaderApp } from '../components/HeaderApp'

describe('HeaderApp component', () => {
  afterEach(cleanup)

  it('should render navbar title', () => {
    render(<HeaderApp />)
    screen.getByText('📚 Aplicación de lista de libros')
  })
})
