import propTypes from 'prop-types'
import { StyledAddIcon, StyledBookIcon, StyledAddButton } from './styles'
import { useTheme } from 'styled-components'

const AddIcon = ({ onClick, isInReadingList }) => {
  const theme = useTheme()
  return (
    <StyledAddButton
      onClick={onClick}
      aria-label='Add or remove book from reading list'
    >
      <StyledBookIcon
        viewBox='0 0 24 24'
        fill='currentColor'
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
            stroke={isInReadingList ? theme.secondaryTxt : theme.mainTxt}
            strokeWidth='.7'
          ></path>{' '}
          <path
            d='M19.8978 16H7.89778C6.96781 16 6.50282 16 6.12132 16.1022C5.08604 16.3796 4.2774 17.1883 4 18.2235'
            stroke={isInReadingList ? theme.secondaryTxt : theme.mainTxt}
            strokeWidth='.7'
          ></path>{' '}
          <path
            d='M8 7H16'
            stroke={isInReadingList ? theme.secondaryTxt : theme.mainTxt}
            strokeWidth='.7'
            strokeLinecap='round'
          ></path>{' '}
          <path
            d='M8 10.5H13'
            stroke={isInReadingList ? theme.secondaryTxt : theme.mainTxt}
            strokeWidth='.7'
            strokeLinecap='round'
          ></path>{' '}
          <path
            d='M13 16V19.5309C13 19.8065 13 19.9443 12.9051 20C12.8103 20.0557 12.6806 19.9941 12.4211 19.8708L11.1789 19.2808C11.0911 19.2391 11.0472 19.2182 11 19.2182C10.9528 19.2182 10.9089 19.2391 10.8211 19.2808L9.57889 19.8708C9.31943 19.9941 9.18971 20.0557 9.09485 20C9 19.9443 9 19.8065 9 19.5309V16.45'
            stroke={isInReadingList ? theme.secondaryTxt : theme.mainTxt}
            strokeWidth='.7'
            strokeLinecap='round'
          ></path>{' '}
        </g>
      </StyledBookIcon>
      {isInReadingList ? (
        <StyledAddIcon
          width='20px'
          height='20px'
          viewBox='-3.2 -3.2 38.40 38.40'
          version='1.1'
          fill='currentColor'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'>
            <rect
              x='-3.2'
              y='-3.2'
              width='38.40'
              height='38.40'
              rx='19.2'
              fill='currentColor'
              strokeWidth='0'
            ></rect>
          </g>
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            {' '}
            <title>minus-circle</title> <desc>Created with Sketch Beta.</desc>{' '}
            <defs> </defs>{' '}
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              {' '}
              <g
                id='Icon-Set'
                transform='translate(-516.000000, -1087.000000)'
                fill='#d31818'
              >
                {' '}
                <path
                  d='M532,1117 C524.268,1117 518,1110.73 518,1103 C518,1095.27 524.268,1089 532,1089 C539.732,1089 546,1095.27 546,1103 C546,1110.73 539.732,1117 532,1117 L532,1117 Z M532,1087 C523.163,1087 516,1094.16 516,1103 C516,1111.84 523.163,1119 532,1119 C540.837,1119 548,1111.84 548,1103 C548,1094.16 540.837,1087 532,1087 L532,1087 Z M538,1102 L526,1102 C525.447,1102 525,1102.45 525,1103 C525,1103.55 525.447,1104 526,1104 L538,1104 C538.553,1104 539,1103.55 539,1103 C539,1102.45 538.553,1102 538,1102 L538,1102 Z'
                  id='minus-circle'
                >
                  {' '}
                </path>{' '}
              </g>{' '}
            </g>{' '}
          </g>
        </StyledAddIcon>
      ) : (
        <StyledAddIcon
          width='20px'
          height='20px'
          viewBox='-3.2 -3.2 38.40 38.40'
          version='1.1'
          fill='currentColor'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'>
            <rect
              x='-3.2'
              y='-3.2'
              width='38.40'
              height='38.40'
              rx='19.2'
              fill='currentColor'
              strokeWidth='0'
            ></rect>
          </g>
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            {' '}
            <title>plus-circle</title> <desc>Created with Sketch Beta.</desc>{' '}
            <defs> </defs>{' '}
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='#52cc00'
              fillRule='evenodd'
            >
              {' '}
              <g
                id='Icon-Set'
                transform='translate(-464.000000, -1087.000000)'
                stroke='#52cc00'
              >
                {' '}
                <path
                  d='M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z'
                  id='plus-circle'
                >
                  {' '}
                </path>{' '}
              </g>{' '}
            </g>{' '}
          </g>
        </StyledAddIcon>
      )}
    </StyledAddButton>
  )
}

AddIcon.propTypes = {
  strokeColor: propTypes.string,
  onClick: propTypes.func,
  isInReadingList: propTypes.bool
}

export default AddIcon
