import propTypes from 'prop-types'
import { StyledLink, StyledSvg } from '../styles'

const LinkedInIconLink = ({ href, target }) => {
  return (
    <StyledLink href={href} target={target}>
      <StyledSvg
        xmlns='http://www.w3.org/2000/svg'
        width='36'
        height='36'
        fill='#fff'
        stroke='#fff'
        aria-label='LinkedIn'
        viewBox='0 0 512 512'
      >
        <rect width='512' height='512' fill='#0077b5' rx='15%' />
        <circle cx='142' cy='138' r='37' />
        <path strokeWidth='66' d='M244 194v198M142 194v198' />
        <path d='M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32' />
      </StyledSvg>{' '}
    </StyledLink>
  )
}

LinkedInIconLink.propTypes = {
  href: propTypes.string.isRequired,
  target: propTypes.string.isRequired
}

export default LinkedInIconLink
