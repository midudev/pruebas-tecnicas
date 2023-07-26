import { css } from '~/styled-system/css'

export const buttonCloseSpineStyles = css({
  cursor: 'pointer',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  top: '20px',
  border: '1px solid black',
  borderRadius: '0.25rem',
  backgroundColor: 'white',
  width: '25px',
  height: '25px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const bookSpineInnerStyles = css({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  color: '#fff',
  position: 'relative',
  maxWidth: '150px',
})

export const bookSpineStyles = css({
  display: 'flex',
  borderRadius: '0.25rem',
  border: '1px solid #ccc',
  padding: '0.5rem',
  width: '50px',
  minHeight: '220px',
  maxHeight: '220px',
  justifyContent: 'center',
})

export const bookSpineTitleStyles = css({
  writingMode: 'vertical-rl',
  textOrientation: 'sideways',
  transform: 'rotate(180deg)',
  fontSize: '1rem',
})
