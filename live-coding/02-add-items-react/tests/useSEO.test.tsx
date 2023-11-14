import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, renderHook } from '@testing-library/react'
import App from '../src/App'
import { useSEO } from '../src/hooks/useSEO'

describe('<useSEO />', () => {
  test('Title and description of the page change', () => {
    render(<App />)

    expect(document.title).toBe('[0] Prueba técnica de React')

    renderHook(() => useSEO({
      title: 'Titulo de prueba',
      description: 'Description de prueba'
    }))

    expect(document.title).toBe('Titulo de prueba')
  })
})
