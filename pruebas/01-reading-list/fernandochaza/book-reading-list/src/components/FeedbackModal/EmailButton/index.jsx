import propTypes from 'prop-types'

import { StyledButtonContainer, StyledEmailSvg } from './styles'

const EmailButton = ({ onClick }) => {
  return (
    <StyledButtonContainer onClick={onClick}>
      <StyledEmailSvg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        aria-label='Gmail'
        viewBox='0 0 512 512'
      >
        <rect width='512' height='512' fill='#fff' rx='15%' />
        <path fill='#4285f4' d='M158 391V249l-82-63v175q0 30 30 30' />
        <path fill='#ea4335' d='m154 248 102 77 102-77v-98l-102 77-102-77' />
        <path fill='#34a853' d='M354 391V249l82-63v175q0 30-30 30' />
        <path fill='#c5221f' d='m76 188 82 63v-98l-30-23c-27-21-52 0-52 26' />
        <path fill='#fbbc04' d='m436 188-82 63v-98l30-23c27-21 52 0 52 26' />
      </StyledEmailSvg>
    </StyledButtonContainer>
  )
}

EmailButton.propTypes = {
  onClick: propTypes.func
}

export default EmailButton
