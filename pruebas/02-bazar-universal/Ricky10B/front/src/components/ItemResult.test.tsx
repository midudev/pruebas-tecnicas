import { products } from '../../../../products.json'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { ItemResult } from './ItemResult'

describe('<ITemResult />', () => {
  it('Render the item', () => {
    render(
      <MemoryRouter>
        <ItemResult
          product={products[0]}
        />
      </MemoryRouter>
    )

    const h3 = screen.getByRole('heading')
    expect(h3).toBeDefined()
  })

  it('Render the product correctly', () => {
    const product = products[0]

    render(
      <MemoryRouter>
        <ItemResult
          product={product}
        />
      </MemoryRouter>
    )

    const img = screen.getByRole('img')
    const h3 = screen.getByRole('heading')
    const p = screen.getByRole('paragraph')
    const span = screen.getByText(`${product.price}$`)
    const stars = span.nextElementSibling

    expect(img.getAttribute('src')).toBe(product.thumbnail)
    expect(h3).toHaveTextContent(product.title)
    expect(p).toHaveTextContent(product.description)
    expect(span).toBeDefined()
    expect(stars?.childElementCount).toBe(5)
  })

  it('The product provided not exist', () => {
    const product = products[100]

    render(
      <MemoryRouter>
        <ItemResult
          product={product}
        />
      </MemoryRouter>
    )

    try {
      screen.getByRole('heading')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      expect(e.message).toMatch('Unable to find an accessible element with the role "heading"')
    }
  })
})
