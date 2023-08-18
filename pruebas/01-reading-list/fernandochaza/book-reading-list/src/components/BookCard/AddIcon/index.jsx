import propTypes from 'prop-types'
import { StyledAddIcon, StyledCheck, StyledAddButton } from './styles'
import { useTheme } from 'styled-components'

const AddIcon = ({ onClick, isInReadingList }) => {
  const theme = useTheme()
  return (
    <StyledAddButton onClick={onClick}>
      <StyledAddIcon
        viewBox='0 0 24 24'
        fill={theme.mainBg}
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
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
            d='M4 8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8Z'
            stroke={theme.mainTxt}
            strokeWidth='.7'
          ></path>{' '}
          <path
            d='M19.8978 16H7.89778C6.96781 16 6.50282 16 6.12132 16.1022C5.08604 16.3796 4.2774 17.1883 4 18.2235'
            stroke={theme.mainTxt}
            strokeWidth='.7'
          ></path>{' '}
          <path
            d='M8 7H16'
            stroke={theme.mainTxt}
            strokeWidth='.7'
            strokeLinecap='round'
          ></path>{' '}
          <path
            d='M8 10.5H13'
            stroke={theme.mainTxt}
            strokeWidth='.7'
            strokeLinecap='round'
          ></path>{' '}
          <path
            d='M13 16V19.5309C13 19.8065 13 19.9443 12.9051 20C12.8103 20.0557 12.6806 19.9941 12.4211 19.8708L11.1789 19.2808C11.0911 19.2391 11.0472 19.2182 11 19.2182C10.9528 19.2182 10.9089 19.2391 10.8211 19.2808L9.57889 19.8708C9.31943 19.9941 9.18971 20.0557 9.09485 20C9 19.9443 9 19.8065 9 19.5309V16.45'
            stroke={theme.mainTxt}
            strokeWidth='.7'
            strokeLinecap='round'
          ></path>{' '}
        </g>
      </StyledAddIcon>
      { isInReadingList && <StyledCheck
        viewBox='0 -0.5 25 25'
        fill={theme.mainBg}
        width='24'
        xmlns='http://www.w3.org/2000/svg'
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
            fillRule='evenodd'
            clipRule='evenodd'
            d='M5.5 12.0002C5.50024 8.66068 7.85944 5.78639 11.1348 5.1351C14.4102 4.48382 17.6895 6.23693 18.9673 9.32231C20.2451 12.4077 19.1655 15.966 16.3887 17.8212C13.6119 19.6764 9.91127 19.3117 7.55 16.9502C6.23728 15.6373 5.49987 13.8568 5.5 12.0002Z'
            stroke='#52cc00'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>{' '}
          <path
            d='M9 12.0002L11.333 14.3332L16 9.66724'
            stroke='#52cc00'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>{' '}
        </g>
      </StyledCheck>}
    </StyledAddButton>
  )
}

AddIcon.propTypes = {
  strokeColor: propTypes.string,
  onClick: propTypes.func,
  isInReadingList: propTypes.bool
}

export default AddIcon
