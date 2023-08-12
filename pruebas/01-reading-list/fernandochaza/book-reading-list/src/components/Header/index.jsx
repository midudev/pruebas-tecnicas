import { StyledHeader, StyledTitle, StyledLogo, StyledTitleContainer, StyledNav, StyledButton } from './styles'
import openBookSvg from '../../assets/book-open.svg'

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitleContainer>
        <StyledLogo
          className='logo'
          src={openBookSvg}
          alt='Logo image of an open book'
        />
        <StyledTitle>MY READING LIST</StyledTitle>
      </StyledTitleContainer>
      <StyledNav>
        <StyledButton>SEARCH</StyledButton>
        <StyledButton>MY LIST</StyledButton>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
