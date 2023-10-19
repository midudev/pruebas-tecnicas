import propTypes from 'prop-types'
import { StyledLink, StyledSvg } from '../styles'

const WhatsappIconLink = ({ href, target }) => {
  return (
    <StyledLink href={href} target={target}>
      <StyledSvg
        xmlns='http://www.w3.org/2000/svg'
        width='36'
        height='36'
        aria-label='WhatsApp'
        viewBox='0 0 512 512'
      >
        <rect width='512' height='512' fill='#25d366' rx='15%' />
        <path
          fill='#25d366'
          stroke='#fff'
          strokeWidth='26'
          d='m123 393 14-65a138 138 0 1 1 50 47z'
        />
        <path
          fill='#fff'
          d='M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18'
        />
      </StyledSvg>
    </StyledLink>
  )
}

WhatsappIconLink.propTypes = {
  href: propTypes.string.isRequired,
  target: propTypes.string.isRequired
}

export default WhatsappIconLink
