import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Stars } from './Stars'

describe('<Stars />', () => {
  it('Render the stars', () => {
    const { container } = render(
      <Stars
        rating={5}
      />
    )

    const span = container.getElementsByTagName('span[role="img"]')
    expect(span).toBeDefined()
  })

  it('Render one star filled', () => {
    const { container } = render(
      <Stars
        rating={1}
      />
    )

    const span = container.querySelector('span[role="img"]')!
    expect(span.firstElementChild).toHaveClass('icon-tabler-star-filled')

    expect(span.childElementCount).toBe(5)

    Array.from(span.childNodes).slice(1).forEach(svg => {
      expect(svg).toHaveClass('icon-tabler-star')
    })
  })

  it('Render two stars and medium', () => {
    const { container } = render(
      <Stars
        rating={2.56}
      />
    )

    const span = container.querySelector('span[role="img"]')!
    expect(span.childElementCount).toBe(5)
    expect(span.firstElementChild).toHaveClass('icon-tabler-star-filled')
    expect(span.childNodes[1]).toHaveClass('icon-tabler-star-filled')
    expect(span.childNodes[2]).toHaveClass('icon-tabler-star-half-filled')

    Array.from(span.childNodes).slice(3).forEach(svg => {
      expect(svg).toHaveClass('icon-tabler-star')
    })
  })

  it('Should Render 0 Stars', () => {
    const { container } = render(
      <Stars
        rating={0}
      />
    )

    const span = container.querySelector('span[role="img"]')!
    expect(span.childElementCount).toBe(5)
    expect(span.firstElementChild).not.toHaveClass('icon-tabler-star-filled')

    span.childNodes.forEach(svg => {
      expect(svg).toHaveClass('icon-tabler-star')
    })
  })

  it('Number negative should render 0 stars', () => {
    const { container } = render(
      <Stars
        rating={-2.5}
      />
    )

    const span = container.querySelector('span[role="img"]')!
    expect(span.childElementCount).toBe(5)
    expect(span.firstElementChild).not.toHaveClass('icon-tabler-star-filled')

    span.childNodes.forEach(svg => {
      expect(svg).toHaveClass('icon-tabler-star')
    })
  })

  it('Render all stars filled', () => {
    const { container } = render(
      <Stars
        rating={5}
      />
    )

    const span = container.querySelector('span[role="img"]')!

    span.childNodes.forEach(svg => {
      expect(svg).not.toHaveClass('icon-tabler-star')
      expect(svg).not.toHaveClass('icon-tabler-star-half-filled')
    })
  })

  it('Most of 5 stars rendering only 5 stars', () => {
    const { container } = render(
      <Stars
        rating={8}
      />
    )

    const span = container.querySelector('span[role="img"]')!

    span.childNodes.forEach(svg => {
      expect(svg).not.toHaveClass('icon-tabler-star')
      expect(svg).not.toHaveClass('icon-tabler-star-half-filled')
    })
  })
})
