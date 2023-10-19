import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'

import { ActionListButton, TITLE_VARIANTS } from '../components/ActionListButton.jsx'

afterEach(cleanup)

it('should render the <ActionListButton /> with the default title', () => {
  const { getByRole } = render(<ActionListButton action={() => {}} Icon={() => null} />)

  const name = TITLE_VARIANTS?.default('')
  getByRole('button', { name })
})

it('should render the <ActionListButton /> with the delete variant and the title to delete from the list', () => {
  const listNameTest = 'LIST_TO_DELETE_TEST'

  const { getByRole } = render(
    <ActionListButton
      action={() => {}}
      Icon={() => null}
      variant='delete'
      nameList={listNameTest}
    />
  )

  const name = TITLE_VARIANTS?.delete(listNameTest)
  getByRole('button', { name })
})

it('should execute the callback provided when is clicked', async () => {
  const spy = vi.fn()

  const { getByRole } = render(
    <ActionListButton
      action={spy}
      Icon={() => null}
    />
  )

  fireEvent.click(getByRole('button'))

  await waitFor(() => {
    expect(spy).toHaveBeenCalledOnce()
  })
})
