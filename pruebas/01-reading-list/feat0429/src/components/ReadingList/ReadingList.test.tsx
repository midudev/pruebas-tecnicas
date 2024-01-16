import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ReadingList } from './ReadingList'
import { RESULT_MESSAGES } from '../../constants/DOM-text'

describe('<ReadingList />', () => {
  it('should render and display proper message', () => {
    render(
        <ReadingList />
    )

    const noBooksMessage = screen.queryByText(RESULT_MESSAGES.NoBooksInList)
    expect(noBooksMessage).not.toBeNull()
  })
})
