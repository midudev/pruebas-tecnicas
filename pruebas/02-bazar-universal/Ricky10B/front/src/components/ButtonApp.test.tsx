import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ButtonApp } from './ButtonApp'

describe('<ButtonApp />', () => {
  it('render the button', () => {
    const text = 'Enviar'
    render(
      <ButtonApp
        text={text}
      />
    )

    const button = screen.getByRole('button')
    expect(button.textContent).toBe(text)
  })

  it('Contains the class provided', () => {
    const text = 'Enviar'

    render(
      <ButtonApp
        text={text}
        className='text-xl'
      />
    )

    const button = screen.getByRole('button')

    expect(button).toHaveClass('bg-colorAppPink')
    expect(button).toHaveClass('text-xl')
  })

  it('Text of button is empty', () => {
    render(
      <ButtonApp
        text=''
      />
    )

    const button = screen.getByRole('button')
    expect(button.textContent).toBe('')
  })

  it('Text of button is null', () => {
    render(
      <ButtonApp
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        text={null as any}
      />
    )

    const button = screen.getByRole('button')
    expect(button.textContent).toBe('')
  })
})
