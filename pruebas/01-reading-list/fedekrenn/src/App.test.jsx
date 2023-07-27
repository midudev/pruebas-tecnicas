import React from 'react'
import App from './App'
import { render, screen } from '@testing-library/react'
import { describe, expect, test, beforeEach } from 'vitest'

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('debería renderizarse el componente y que contenga el id de test books-container', () => {
    expect(screen.getByTestId('books-container')).toBeTruthy()
  })
})
