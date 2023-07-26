import { css } from '~/styled-system/css'

export const filterModalStyles = css({
  backgroundColor: 'white',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  p: '3rem',
})

export const filterInputStyles = css({
  width: '270px',
  height: '2.5rem',
  color: 'black',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  border: 'none',
  borderBottom: '1px solid black',
  backgroundColor: 'transparent',
  outline: 'none',
  padding: '0.5rem',
  '&:focus': {
    borderBottom: '1px solid blue',
  },
  '&::placeholder': {
    color: 'gray',
    fontSize: '0.75rem',
    opacity: 0.5,
  },
})

export const overlayStyles = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1,
})

export const filterOpenButtonStyles = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  position: 'fixed',
  right: '1rem',
  bottom: '1rem',
  border: '1px solid black',
  padding: '0.5rem',
  borderRadius: '0.5rem',
  zIndex: 10,
  backgroundColor: 'white',

  md: {
    bottom: 'auto',
    top: '1rem',
  },
})

export const filterCloseButtonStyles = css({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  cursor: 'pointer',
  zIndex: 2,
  border: '1px solid black',
  backgroundColor: 'white',
  borderRadius: '50%',
  width: '2rem',
  height: '2rem',
  textAlign: 'center',
  color: 'black',
})
