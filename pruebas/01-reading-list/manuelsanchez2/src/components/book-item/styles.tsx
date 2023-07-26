import { css } from '~/styled-system/css'

export const bookWrapperStyles = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem',
  aspectRatio: '1/1.5',
  perspective: '200px',
  width: '100px',
  height: '150px',

  md: {
    width: '165px',
    height: '225px',
  },
})

export const bookStyles = css({
  display: 'flex',
  cursor: 'pointer',
  width: '100px',
  height: '150px',
  position: 'relative',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.5s ease-in-out',
  md: {
    width: '165px',
    height: '225px',
  },
  _hover: {
    transform: 'rotateY(-10deg)',
  },
  _focus: {
    transform: 'rotateY(-10deg)',
  },
  _before: {
    content: '',
    background: '#fff',
    height: 'calc(100px - 2 * 3px)',
    width: '30px',
    transform:
      'translateX(calc(100px - 30px / 2 - 3px)) rotateY(90deg) translateX(calc(50px / 2))',
    md: {
      width: '50px',
      height: 'calc(165px - 2 * 3px)',
      transform:
        'translateX(calc(165px - 50px / 2 - 3px)) rotateY(90deg) translateX(calc(50px / 2))',
    },
    top: '3px',
    position: 'absolute',
  },
  _after: {
    content: '',
    position: 'absolute',
    width: '100px',
    height: '150px',
    background: '#000',
    transform: 'translateZ(-50px)',
    boxShadow: '-10px 0 50px 10px #666',

    md: {
      width: '165px',
      height: '225px',
    },
  },
})

export const bookImageStyles = css({
  width: '100px',
  height: '150px',
  position: 'absolute',
  boxShadow: '5px 5px 20px #666',
  md: {
    width: '165px',
    height: '225px',
  },
})
