import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageLogo } from './PageLogo'
import { TEXT_CONTENT } from '../../constants/DOM-text'
import { ARIA_LABELS } from '../../constants/aria-labels'

describe('<PageHeader />', () => {
  it('should render and display the correct text and image', () => {
    render(<PageLogo />)

    const pageLogo = screen.getByRole('link', { name: ARIA_LABELS.GoToHomePage })
    expect(pageLogo).toBeDefined()

    const pageLogoImage = screen.getByRole('img', { name: 'Logo de la página' })
    expect(pageLogoImage).toBeDefined()

    const pageTitle = screen.getByText(TEXT_CONTENT.PageTitle)
    expect(pageTitle).toBeDefined()
  })
})
