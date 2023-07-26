import { css } from '~/styled-system/css'

export const readingListWrapperStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  mx: 'auto',

  lg: {
    width: 'var(--max-width-outer)',
  },
})

export const readingListHeaderStyles = css({
  width: '100%',
  mx: 'auto',
  lg: {
    minWidth: 'var(--max-width-inner)',
    maxWidth: 'var(--max-width-inner)',
  },
})

export const readingListULStyles = css({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '1rem',
  alignItems: 'flex-start',
  marginInline: 'auto',
  width: '100%',
  maxWidth: '75vw',
  overflowX: 'auto',
  sm: {
    maxWidth: '500px',
  },
  md: {
    maxWidth: '750px',
  },
  lg: {
    maxWidth: 'var(--max-width-inner)',
  },
})

export const shelfStyles = css({
  width: '100%',
  height: '30px',
  backgroundColor: 'whiteSmoke',
  lg: {
    width: 'var(--max-width-outer)',
  },
})

export const noBookTextStyles = css({
  width: '100%',
  height: '250px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
})

export const sortButtonStyles = css({
  maxWidth: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  border: '1px solid black',
  padding: '0.5rem',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  mb: '0.5rem',
  '&:hover': {
    backgroundColor: '#d1d1d1',
  },
  '&:focus': {
    backgroundColor: '#d1d1d1',
  },
})

export const downloadButtonStyles = css({
  maxWidth: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  border: '1px solid black',
  padding: '0.5rem',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  mb: '2.5rem',
  '&:hover': {
    backgroundColor: '#d1d1d1',
  },
  '&:focus': {
    backgroundColor: '#d1d1d1',
  },
})
