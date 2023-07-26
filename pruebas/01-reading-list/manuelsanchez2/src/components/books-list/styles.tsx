import { css } from '~/styled-system/css'

export const BooksListULStyles = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto 50px',
  gap: '3rem',
  minWidth: '100%',
  maxWidth: 'var(--max-width-outer)',
  flex: 1,
  lg: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: '0 0 100px',
    gap: '3.5rem',
    width: 'var(--max-width-outer)',
  },
})
