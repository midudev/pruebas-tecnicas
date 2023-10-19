import propTypes from 'prop-types'
import { StyledLogo } from './styles'

const LogoIcon = ({ strokeColor }) => {
  return (
    <StyledLogo
      width='32px'
      height='32px'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0' />

      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      />

      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path
          d='M11 3.99995C12.8839 2.91716 14.9355 2.15669 17.07 1.74995C17.551 1.63467 18.0523 1.63283 18.5341 1.74458C19.016 1.85632 19.4652 2.07852 19.8464 2.39375C20.2276 2.70897 20.5303 3.10856 20.7305 3.56086C20.9307 4.01316 21.0229 4.50585 21 4.99995V13.9999C20.9699 15.117 20.5666 16.1917 19.8542 17.0527C19.1419 17.9136 18.1617 18.5112 17.07 18.7499C14.9355 19.1567 12.8839 19.9172 11 20.9999'
          stroke={strokeColor}
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
        />{' '}
        <path
          d='M10.9995 3.99995C9.1156 2.91716 7.06409 2.15669 4.92957 1.74995C4.44856 1.63467 3.94731 1.63283 3.46546 1.74458C2.98362 1.85632 2.53439 2.07852 2.15321 2.39375C1.77203 2.70897 1.46933 3.10856 1.26911 3.56086C1.0689 4.01316 0.976598 4.50585 0.999521 4.99995V13.9999C1.0296 15.117 1.433 16.1917 2.14533 17.0527C2.85767 17.9136 3.83793 18.5112 4.92957 18.7499C7.06409 19.1567 9.1156 19.9172 10.9995 20.9999'
          stroke={strokeColor}
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
        />{' '}
        <path
          d='M11 21V4'
          stroke={strokeColor}
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
        />{' '}
      </g>
    </StyledLogo>
  )
}

LogoIcon.propTypes = {
  strokeColor: propTypes.string
}

export default LogoIcon
