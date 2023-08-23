import propTypes from 'prop-types'
import ColoredButton from '../ColoredButton'
import Logo from './LogoIcon'

import { useTheme } from 'styled-components'

import {
  StyledHeader,
  StyledTitle,
  StyledTitleContainer,
  StyledNav,
  StyledContainer
} from './styles'
import { Link } from 'react-router-dom'

import ThemeSwitcher from '../ThemeSwitcher'

const Header = ({ scroll }) => {
  const theme = useTheme()

  return (
    <StyledContainer $scroll={scroll}>
      <StyledHeader>
        <StyledTitleContainer>
          <Link to='/'>
            <Logo
              alt='Logo image of an open book'
              strokeColor={theme.mainTxt}
            />
          </Link>
          <StyledTitle>READINGS PLANNER</StyledTitle>
        </StyledTitleContainer>
        <StyledNav>
          <Link to='/search'>
            <ColoredButton>Search</ColoredButton>
          </Link>
          <Link to='/my-list'>
            <ColoredButton>My Reading List</ColoredButton>
          </Link>
          <Link to='/completed-books'>
            <ColoredButton>Read Titles</ColoredButton>
          </Link>
          <ThemeSwitcher />
        </StyledNav>
      </StyledHeader>
    </StyledContainer>
  )
}

Header.propTypes = {
  scroll: propTypes.bool
}

export default Header
