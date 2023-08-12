import {
  StyledHeader,
  StyledTitle,
  StyledLogo,
  StyledTitleContainer,
  StyledNav
} from './styles'
import openBookSvg from '../../assets/book-open.svg'
import ColoredButton from '../ColoredButton'

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitleContainer>
        <StyledLogo
          className='logo'
          src={openBookSvg}
          alt='Logo image of an open book'
        />
        <StyledTitle>BOOKS ORGANIZER</StyledTitle>
      </StyledTitleContainer>
      <StyledNav>
        <ColoredButton>Search</ColoredButton>
        <ColoredButton>My Reading List</ColoredButton>
        <ColoredButton>Completed Books</ColoredButton>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
