import propTypes from 'prop-types'
import { StyledSvg } from './styles'

const ArrowIcon = ({ rotate, strokeColor }) => {
  return (
    <StyledSvg
      viewBox='0 0 24 24'
      fill='none'
      width='40px'
      height='40px'
      xmlns='http://www.w3.org/2000/svg'
      $rotate={rotate}
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path
          d='M7 10L12 15L17 10'
          stroke={strokeColor}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>{' '}
      </g>
    </StyledSvg>
  )
}

ArrowIcon.propTypes = {
  rotate: propTypes.bool,
  strokeColor: propTypes.string
}

export default ArrowIcon
