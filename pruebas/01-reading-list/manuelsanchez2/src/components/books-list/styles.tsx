import { css } from '~/styled-system/css'

export const BooksListULStyles = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  gap: '3rem',
  minWidth: '100%',
  maxWidth: 'var(--max-width-outer)',
  flex: 1,
  lg: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: '0',
    gap: '3.5rem',
    width: 'var(--max-width-outer)',
  },
})
