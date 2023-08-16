import ColoredButton from '../ColoredButton'
import Logo from './LogoIcon'

import { useTheme } from 'styled-components'

import {
  StyledHeader,
  StyledTitle,
  StyledTitleContainer,
  StyledNav
} from './styles'

const Header = () => {
  const theme = useTheme()
  return (
    <StyledHeader>
      <StyledTitleContainer>
        <Logo
          alt='Logo image of an open book'
          strokeColor={theme.mainTxt}
        />
        <StyledTitle>READING PLANNER</StyledTitle>
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
